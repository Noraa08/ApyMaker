import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

export interface PostState {
  id: string;
  title: string;
  content: string;
  userId: string;
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
    postAdded: {
        reducer(state, action: PayloadAction<PostState>) {
          state.push(action.payload);
        },
        prepare(title, content, userId){
            return {
                payload:{
                    id: nanoid(),
                    title,
                    content,
                    userId
                } as PostState
            }
        }
    }
  },
});

export const selectAllPosts = (state: RootState) => state.yumePosts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
