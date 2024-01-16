import { createSlice } from '@reduxjs/toolkit'

type Review = {
    name: string
    text: string
}

export const initialState: Review[] = [
    {
        name: 'Jack-1',
        text: 'Что ж, в живую он просто прекрасен, идеальный дизайн, размер, сзади очень приятная матовая крышка, на ней не остаётся отпечатков, не скользит в руке, удобность и внешка просто 10 из 10.',
    },
    {
        name: 'John',
        text: 'Все супер, телефон просто бомба)',
    },
]

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => {
            return [...state, action.payload]
        },
    },
})

export const { addReview } = reviewsSlice.actions

export default reviewsSlice.reducer
