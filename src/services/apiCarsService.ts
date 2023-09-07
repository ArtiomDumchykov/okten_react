import axios, { AxiosError, AxiosResponse } from 'axios'

import { owuBaseURl as baseURL, urls } from '../constants'
import { authSerivice } from './authService'
import { router } from '../router'

type IRes<DATA> = Promise<AxiosResponse<DATA>>

const instanseCarsaxios = axios.create({baseURL})

instanseCarsaxios.interceptors.request.use(req => {
    const access = authSerivice.getAccessToken();

    if (access) {
        req.headers.Authorization = `Bearer ${access}`
    }

    return req
})

type IWaitList = () => void

const waitList: IWaitList[] = []

let isRefreshing = false

instanseCarsaxios.interceptors.response.use(
    (res) => {
        return res
    },
    async (error: AxiosError) => {
        const originalRequest = error.config

        if (error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {

                    await authSerivice.refresh()
                    isRefreshing = false
                    afterRefresh()
                    return instanseCarsaxios(originalRequest)

                } catch (error) {

                    authSerivice.deleteTokens()
                    isRefreshing = false
                    router.navigate('/auth/login?SessionExpired=true')
                    return Promise.reject(error)
                }
            }

            if (originalRequest.url === urls.auth.refresh) {
                return Promise.reject(error)
            }

            return new Promise(resolve => {
                subscribeToWaitList(() => resolve(instanseCarsaxios(originalRequest)))
            })
        }
    }
)

const subscribeToWaitList = (callback: IWaitList): void => {
    waitList.push(callback)
}

const afterRefresh = (): void => {
    while (waitList.length) {
        const callback = waitList.pop()
        callback()
    }
}

export type {
    IRes
}

export {
    instanseCarsaxios
}