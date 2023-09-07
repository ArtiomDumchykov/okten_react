import { AxiosError } from "axios"
import { createAsyncThunk, createSlice, isFulfilled, isRejected } from "@reduxjs/toolkit"

import { IAuth, IUser } from "../../intefaces"
import { authSerivice } from "../../services"

type IState = {
    errors: {
        username?: string[],
        detail?: string
    },
    me: IUser
}

const initialState: IState = {
    errors: null,
    me: null,
}

const register = createAsyncThunk<void, {user: IAuth}>(
    'authSlice/register',
    async({user}, {rejectWithValue}) => {
        try {
            await authSerivice.register(user)   
        } catch (error) {
            const err = error as AxiosError
            return rejectWithValue(err.response.data)
        }
    } 
)

const login = createAsyncThunk<IUser, {user: IAuth}>(
    'authSlice/login',
    async({user}, {rejectWithValue}) => {
        try {
            return await authSerivice.login(user)
        } catch (error) {
            const err = error as AxiosError;
            rejectWithValue(err.response.data)
        }
    }
)

const me = createAsyncThunk<IUser, void>(
    'authSlice/me',
    async(_, {rejectWithValue}) => {
        try {
            const { data } =  await authSerivice.me()
            return data
        } catch (error) {
            const err = error as AxiosError;
            rejectWithValue(err.request.data)
        }
    }
)

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {

    },
    extraReducers: builder => builder
        .addCase(login.fulfilled, (state, actions) => {
            state.me = actions.payload
        })
        .addCase(me.fulfilled, (state, actions) => {
            state.me = actions.payload
        })
        .addMatcher(isRejected(), (state, action) => {
            state.errors = action.payload
        })
        .addMatcher(isFulfilled(), state => {
            state.errors = null
        })
})

const {reducer: authReducer, actions} = authSlice

const authActions = {
    ...actions,
    register,
    login,
    me,
}

export {
    authActions,
    authReducer
}