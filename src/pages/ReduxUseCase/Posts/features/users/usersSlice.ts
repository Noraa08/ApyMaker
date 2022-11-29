import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../store";

export interface UserState { 
    id: number;
    name: string;
}

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = [] as UserState[]

export const fetchUsers = createAsyncThunk('posts/fetchUsers', async () => {
    const response = await axios.get(USERS_URL)
    return response.data as UserState[]
  })

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllUsers = (state: RootState) => state.yumeUsers;
export const selectUserById = (state: RootState, userId: number) => state.yumeUsers.find((user: { id: number; }) => user.id === userId)
export const selectPostsByUser = (state: RootState, userId: number) => state.yumePosts.posts?.filter((post: { id: number; userId:number})=> post.userId === userId)

export default usersSlice.reducer