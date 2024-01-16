import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './likeSlice'
import cartSlice from './cartSlice'
import reviewsSlice from './reviewsSlice'

export const store = configureStore({
    reducer: {
        productsLikeState: likeSlice,
        productsInCart: cartSlice,
        reviews: reviewsSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
