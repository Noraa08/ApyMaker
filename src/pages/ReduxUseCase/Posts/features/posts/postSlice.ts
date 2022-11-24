import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../../../store";

export interface PostState {
    id: string;
    title: string
    content: string
}

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
] as PostState[];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action: PayloadAction<PostState>){
        state.push(action.payload)
    }
  },
});

export const selectAllPosts = (state: RootState) => state.yumePosts;

export default postsSlice.reducer;
