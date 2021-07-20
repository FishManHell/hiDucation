import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMGUR_URL} from "../Utils/Url";
import axios from "axios";

const initialState = {
    img: '',
    // img: []
    loadingImg: false,
    error: null
}


export const postImgImgur = createAsyncThunk('imgur/postImgur',
    async (avatar, {dispatch}) => {
        try {
            const response = await axios.post(`${IMGUR_URL}`, avatar, {headers: {Authorization: 'Client-ID 955afae64956fa3'}})
            const result = await response.data
            const url = await result.data.link
            dispatch(getImgImgur(url))
            return response.data.data.link
        } catch (error) {
            throw Error(error)
        }
    })

const toolkitSlice = createSlice({
    name: "imgur",
    initialState,

    reducers: {
        getImgImgur(state, action) {
            // state.img.push(action.payload)
            state.img = action.payload
        },
        delImg(state, action) {
            // const img = state.img
            // img.splice(action.payload, 1)
            state.img = ''
        }
    },

    extraReducers: {
        [postImgImgur.pending]: (state) => {
            state.loadingImg = true
            state.error = null
        },

        [postImgImgur.fulfilled]: (state) => {
            state.loadingImg = false
        },

        [postImgImgur.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loadingImg = false
        }
    }
})

export default toolkitSlice.reducer
export const{getImgImgur, delImg} = toolkitSlice.actions