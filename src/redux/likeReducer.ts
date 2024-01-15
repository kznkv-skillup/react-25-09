import { createSlice } from '@reduxjs/toolkit'

type LikesType = {
    [id: number]: boolean
}

export const initialState: LikesType = {
    1: true,
    3: true,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLikeState: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { toggleLikeState } = likeSlice.actions

export default likeSlice.reducer
