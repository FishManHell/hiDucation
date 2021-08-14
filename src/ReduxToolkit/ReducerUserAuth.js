import {createAsyncThunk, createAction, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "../Utils/Url";
import axios from "axios";

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
            const data = response.headers.get('token')
            console.log(data)
            localStorage.setItem('token', data);
            dispatch(getToken(data))
            return response.headers.get('token')
        } catch (error) {
            throw Error(error);
        }
    }
)


export const changePassword = createAsyncThunk('userAuth/changePassword',
    async (endpoint = {email: '', password: ''}) => {
        try {
            const response = await axios.put(
                `${BASE_URL}/user/${endpoint.email}/password/reset`,
                endpoint.password,
                {headers:{'Content-Type': 'application/json'}})
            const data = await response
            console.log(data)
            return data
        } catch (error) {
            throw Error(error);
        }
    })

export const regUser = createAsyncThunk('userAuth/regUser',
    async (endpoint, {}) => {
    try {
        const response = await axios.post(
            `https://telran-hiducation.herokuapp.com/user/registration`,
            endpoint,
            {headers: {'Content-Type' : 'application/json'}})
        const data = await response
        console.log(data)
        return data
    } catch (error) {
        throw Error(error)
    }
})

const toolkitSlice = createSlice({
    name: "userAuth",
    initialState,

    reducers: {getToken (state, action) {state.token = action.payload}},

    extraReducers: {

        [regUser.pending]: (state) => {
            state.loading = true;
            state.error = null
        },

        [regUser.fulfilled]: (state) => {
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

        [postLogin.pending]: (state) => {
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

        [changePassword.pending]: (state) => {
            state.loading = true;
            state.error = null
        },

        [changePassword.fulfilled]: (state) => {
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