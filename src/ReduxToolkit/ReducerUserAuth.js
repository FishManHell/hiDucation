import {createAsyncThunk, createAction, createSlice} from "@reduxjs/toolkit";

export const getUserInform = createAction('userAuth/getUser');
export const logoutProfile = createAction('userAuth/logout')

const initialState = {
        token: '',
        user: {
            email: '',
            password: ''
        },
        loading: false,
        error: null
    }


export const postLogin = createAsyncThunk('userAuth/getTokenLogin', async (endpoint, {dispatch}) => {
        try {
            const response = await fetch(`${endpoint}`);
            const data = await response.headers.get('token')
            localStorage.setItem('token', data);
            dispatch(getToken(data))
            return response.headers.get('token')
        } catch (error) {
            throw Error(error);
        }
    }
)


const toolkitSlice = createSlice({
    name: "userAuth",
    initialState,

    reducers: {
        getToken (state, action) {
            state.token = action.payload
        },
    },

    extraReducers: {

        [logoutProfile] (state) {
            localStorage.removeItem('token') // это основное - потом через него работать нужно все время и сним работать
            state.user.email = '' // это просто временно для теста
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
        }

    }
})


export default toolkitSlice.reducer
export const {getToken} = toolkitSlice.actions