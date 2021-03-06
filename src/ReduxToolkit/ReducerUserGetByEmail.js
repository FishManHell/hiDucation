import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUserInform} from "./ReducerUserAuth";
import axios from "axios";
import {BASE_URL} from "../Utils/Url";

const initialState = {
    userProfile: {
        apps: [0],
        degree: "",
        email: "",
        fields: "",
        firstName: "",
        id: 0,
        institute: "",
        lastName: "",
        password: "",
        roles: [],
        stillStudent: true
    },
    loading: false,
    error: null
}

export const editProfileInform = createAction('editProfile')

export const getUserProfile = createAsyncThunk('userProfile/getProfile',
    async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}/user/${endpoint}`);
        const data = response.data
        console.log(data)
        return data
    }
    catch (error) {
        throw Error (error)
    }
})

// export const getUserProfile = createAsyncThunk('userProfile/getProfile',
//     async (endpoint) => {
//         try {
//             const response = await axios.get(`https://telran-hiducation.herokuapp.com/user/${endpoint}`);
//             const data = response
//             console.log(data)
//             return data
//         }
//         catch (error) {
//             throw Error (error)
//         }
//     })


export const editUserProfile = createAsyncThunk('userProfile/PostEditUserProfile',
    async (endpoint, {getState}) => {
        try {
            const response = await axios.put(
                `${BASE_URL}/user/${getState().userAuth.user.email}`,
                endpoint,
                {headers: {'Content-Type' : 'application/json'}}
            )
                const data = await response
                console.log(data)
                return response
            } catch (error) {
                throw Error (error)
        }
    }
)


// export const editUserProfile = createAsyncThunk('userProfile/PostEditUserProfile',
//     async (endpoint, {getState}) => {
//         try {
//             const response = await axios.put(
//                 `https://telran-hiducation.herokuapp.com/user/${getState().userAuth.user.email}`,
//                 endpoint,
//                 {headers: {'Content-Type' : 'application/json'}}
//             )
//             const data = await response
//             console.log(data)
//             return response
//         } catch (error) {
//             throw Error (error)
//         }
//     }
// )

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,

    reducers: {},
    extraReducers: {
        [editProfileInform]: (state, action) => {
            state.userProfile.firstName = action.payload.userProfile.firstName
            state.userProfile.lastName = action.payload.userProfile.lastName
            state.userProfile.email = action.payload.userProfile.email
            state.userProfile.password = action.payload.userProfile.password
            state.userProfile.institute = action.payload.userProfile.institute
            state.userProfile.degree = action.payload.userProfile.degree
        },

        [getUserInform]: (state, action) => { // ???????? action ???? post login
            state.userProfile.email = action.payload.email
            state.userProfile.password = action.payload.password
        },

        [getUserProfile.pending]: (state) => {
            state.loading = true;
            state.error = null
        },
        [getUserProfile.fulfilled]: (state) => {
            // state.userProfile = action.payload
            state.loading = false
        },

        [getUserProfile.rejected]: (state, action) => {
            state.error = action.error.message
            state.loading = false
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