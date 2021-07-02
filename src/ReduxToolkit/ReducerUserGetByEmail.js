import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUserInform} from "./ReducerUserAuth";
import axios from "axios";
import {BASE_URL} from "../Utils/Url";

const initialState = {
    userProfile: {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        institute: '',
        degree: '',
        fields: '',
        apps: [0],
        stillStudent: true,
        roles: []
    },
    loading: false,
    error: null
}

export const editProfileInform = createAction('editProfile')

export const getUserProfile = createAsyncThunk('userProfile/getProfile',
    async (endpoint, {dispatch}) => {
    try {
        const response = await axios.get(`${endpoint}`);
        const data = response.data
        console.log(data)
        return data
    }
    catch (error) {
        throw Error (error)
    }
})

export const editUserProfile = createAsyncThunk('userProfile/PostEditUserProfile',
    async (endpoint, {getState}) => {
        try {
            const response = await fetch(`${BASE_URL}/user/${getState().userAuth.user.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(endpoint)
            })
                const data = response
                console.log(data)
                return data
            } catch (error) {
                throw Error (error)
        }
    }
)

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,

    reducers: {},
    extraReducers: {

        [getUserInform]: (state, action) => { // взят action из post login
            state.userProfile.email = action.payload.email
            state.userProfile.password = action.payload.password
        },

        [getUserProfile.pending]: (state, action) => {
            state.loading = true;
            state.error = null
        },
        [getUserProfile.fulfilled]: (state, action) => {
            // state.userProfile = action.payload
            state.loading = false
        },

        [getUserProfile.rejected]: (state, action) => {
            state.error = action.error.message
            state.loading = false
        },

        [editProfileInform]: (state, action) => {
            state.userProfile.firstName = action.payload.userProfile.firstName
            state.userProfile.lastName = action.payload.userProfile.lastName
            state.userProfile.email = action.payload.userProfile.email
            state.userProfile.password = action.payload.userProfile.password
            state.userProfile.institute = action.payload.userProfile.institute
            state.userProfile.degree = action.payload.userProfile.degree
        },

        [editUserProfile.pending]: (state) => {
            state.loading = true;
            state.error = null
        },
        [editUserProfile.fulfilled]: (state) => {
            state.loading = false
        },

        [editUserProfile.rejected]: (state, action) => {
            state.error = action.error.message
            state.loading = false
        },
    }
})

export default userProfileSlice.reducer