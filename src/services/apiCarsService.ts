import axios, { AxiosResponse } from 'axios'
import { owuBaseURl as baseURL } from '../constants'

type IRes<DATA> = Promise<AxiosResponse<DATA>>

const instanseCarsaxios = axios.create({baseURL})

export type {
    IRes
}

export {
    instanseCarsaxios
}