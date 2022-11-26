import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { sub } from "date-fns";
import axios from "axios";

export interface IPost {
    id: string;
    title: string;
    content: string;
    userId: string;
    date: string;
    reactions: {
      thumbsUp: number;
      wow: number;
      heart: number;
      rocket: number;
      coffee: number;
      [x: string]: number; // must declare a index signature  
}}

export interface PostState {
  posts: IPost[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: null
}

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [{
    id:'0',
    title:'',
    content: '',
    userId: '0',
    date: '',
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
}
  }],
  status: 'idle',
  error: null
} as PostState;

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL)
  return response.data as PostState
})



const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<IPost>) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
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
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(
      state,
      action: PayloadAction<{ postId: string; reaction: string }>
    ) {
      let { postId, reaction } = action.payload;
      const existingPost = state.posts.find((p) => p.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++; // // must declare a index signature
      }
    },
  },
  extraReducers(builder) {
    builder
        .addCase(fetchPosts.pending, (state:any, action) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<any[string]>) => {
            state.status = 'succeeded'
            // Adding date and reactions
            let min = 1;
            const loadedPosts = action.payload.map((post:IPost) => {
                post.date = sub(new Date(), { minutes: min++ }).toISOString();
                post.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0
                }
                return post;
            });

            // Add any fetched posts to the array
            state.posts = state.posts.concat(loadedPosts)
        })
        .addCase(fetchPosts.rejected, (state:any, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
     
},

});

export const selectAllPosts = (state: RootState) => state.yumePosts.posts
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
