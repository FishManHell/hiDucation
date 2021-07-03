import {createAsyncThunk, createAction, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "../Utils/Url";

export const getUserInform = createAction('userAuth/getUser');
export const logoutProfile = createAction('userAuth/logout');

const initialState = {
        token: '',
        user: {
            email: '',
            password: ''
        },
        loading: false,
        error: null
    }


export const postLogin = createAsyncThunk('userAuth/getTokenLogin',
    async (endpoint = {email: '',  password: ''}, {dispatch}) => {
        try {
            const response = await fetch(`${BASE_URL}/user/login?userEmail=${endpoint.email}&password=${endpoint.password}`);
            const data = await response.headers.get('token')
            localStorage.setItem('token', data);
            dispatch(getToken(data))
            return response.headers.get('token')
        } catch (error) {
            throw Error(error);
        }
    }
)

export const changePassword = createAsyncThunk('userAuth/changePassword',
    async (endpoint = {email: '', password: ''}, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/user/${endpoint.email}/password/reset`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(endpoint.password)
            });
            const data = response
            console.log(data)
            return data
        } catch (error) {
            throw Error(error);
        }
    })

export const regUser = createAsyncThunk('userAuth/regUser',
    async (endpoint, {}) => {
    try {
        const response = await fetch(`${BASE_URL}/user/registration`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(endpoint)
        })
        const data = response
        console.log(data)
        return data
    } catch (error) {
        throw Error(error)
    }
})

const toolkitSlice = createSlice({
    name: "userAuth",
    initialState,

    reducers: {
        getToken (state, action) {
            state.token = action.payload
        },
    },

    extraReducers: {

        [regUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null
        },

        [regUser.fulfilled]: (state, action) => {
            state.loading = false
        },

        [regUser.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },

        [logoutProfile] (state) {
            localStorage.removeItem('token') // это основное - потом через него работать нужно все время и сним работать
            state.user.email = '' // это просто временно для теста использую в качестве токена на проверку логаут
        },

        [getUserInform] (state, action) {
            state.user.email = action.payload.email
            state.user.password = action.payload.password
        },

        [postLogin.pending]: (state, action) => {
            state.loading = true;
            state.error = null
        },

        [postLogin.fulfilled]: (state, action) => {
            state.token = action.payload;
            state.loading = false
        },

        [postLogin.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },

        [changePassword.pending]: (state, action) => {
            state.loading = true;
            state.error = null
        },

        [changePassword.fulfilled]: (state, action) => {
            state.loading = false
        },

        [changePassword.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
})

export default toolkitSlice.reducer
export const {getToken} = toolkitSlice.actions