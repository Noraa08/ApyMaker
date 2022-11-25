import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import {sub} from 'date-fns'

export interface PostState {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string;
  reactions: {
    thumbsUp:number
    wow:number
    heart:number
    rocket:number
    coffee:number
  };
}

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
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
                    date: new Date().toISOString(),
                    title,
                    content,
                    userId,
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    },
                    test: [
                        { label1: 0},
                        { label2: 0},
                        { label3: 0},
                      ]
                } as PostState
            }
        }
    },
    reactionAdded(state, action: PayloadAction<{postId: string, reaction:string}>) {
        const {postId, reaction } = action.payload
        const existingPost = state.find(p => p.id === postId)
        if(existingPost){
        }
    }
  },
});

export const selectAllPosts = (state: RootState) => state.yumePosts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
