import {createAction, createSlice} from "@reduxjs/toolkit";
export const filterProduct = createAction('filter/Product');

const initialState = {
    products: [
        {
            id: '1',
            mainName: 'Math',
            sectionInform: 'Introduction and bla bla bla bla',
            img: 'https://i.ibb.co/yWswVKy/two.png'

        },
        {
            id: '2',
            mainName: 'Math',
            sectionInform: 'Introduction and bla bla bla bla',
            img: 'https://i.ibb.co/yWswVKy/two.png'

        },
        {
            id: '3',
            mainName: 'Math',
            sectionInform: 'Introduction and bla bla bla bla',
            img: 'https://i.ibb.co/yWswVKy/two.png'

        },
        {
            id: '4',
            mainName: 'Programming',
            sectionInform: 'Introduction and bla bla bla bla',
            img: 'https://i.ibb.co/yWswVKy/two.png'

        },
        {
            id: '5',
            mainName: 'Programming',
            sectionInform: 'Introduction and bla bla bla bla',
            img: 'https://i.ibb.co/yWswVKy/two.png'

        },
        {
            id: '6',
            mainName: 'Programming',
            sectionInform: 'Introduction and bla bla bla bla',
            img: 'https://i.ibb.co/yWswVKy/two.png'

        },
        {
            id: '7',
            mainName: 'Physics',
            sectionInform: 'Introduction and bla bla bla bla',
            img: 'https://i.ibb.co/yWswVKy/two.png'

        },
        {
            id: '8',
            mainName: 'Physics',
            sectionInform: 'Introduction and bla bla bla bla',
            img: 'https://i.ibb.co/yWswVKy/two.png'

        },
        {
            id: '9',
            mainName: 'Physics',
            sectionInform: 'Introduction and bla bla bla bla',
            img: 'https://i.ibb.co/yWswVKy/two.png'

        },
    ],
    filterArrayProducts: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,

    reducers: {},
    extraReducers: {
        [filterProduct] (state, action) {
            const filProducts = state.products.filter(product => product.mainName.includes(action.payload))
            state.filterArrayProducts = [...filProducts];
        }
    }
})

export default filterSlice.reducer