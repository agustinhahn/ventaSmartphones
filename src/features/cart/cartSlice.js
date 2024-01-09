import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        user: "agustinHahn",
        items: [],
        total: null,
        updateAt: ""
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state,actions) =>{
            state.value.items.push({...actions.payload,quality:1})
        },
        removeItem: () =>{

        }
    },
})
export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer