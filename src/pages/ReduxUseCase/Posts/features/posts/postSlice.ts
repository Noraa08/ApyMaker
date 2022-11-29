import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import axios from "axios";
import { sub } from "date-fns";

export interface IPost {
    [x: string]: any;
    id: number;
    title: string;
    content: string;
    userId: number;
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
  posts?: IPost[];
  status?: 'idle' | 'pending' | 'succeeded' | 'failed'
  error?: null
}

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [],
  status: 'idle',
  error: null
} as PostState;

// get all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL)
  return response.data as PostState
})

// add a new post
export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost:any) => {
  const response = await axios.post(POSTS_URL, initialPost)
  return response.data
})

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<IPost>) {
        state.posts?.push(action.payload);
      },
      prepare(title:string, content:string, userId:number) {
        return {
          payload: {
            id: Number(nanoid()),
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
      action: PayloadAction<{ postId: number; reaction: string }>
    ) {
      let { postId, reaction } = action.payload;
      const existingPost = state.posts?.find((p) => p.id === Number(postId));
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
        .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<any>) => {
            state.status = 'succeeded'
            // Adding date and reactions because this fake api doesn't have those properties
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
            }) as IPost[]

            state.posts = loadedPosts
            // Add any fetched posts to the array
            // state.posts = state.posts?.concat(loadedPosts)
        })
        .addCase(fetchPosts.rejected, (state:any, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
          // Fix for API post IDs:
          // Creating sortedPosts & assigning the id 
          // would be not be needed if the fake API 
          // returned accurate new post IDs
          const sortedPosts = state.posts?.sort((a, b) => {
              if (a.id > b.id) return 1
              if (a.id < b.id) return -1
              return 0
          }) as IPost[]
          action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
          // End fix for fake API post IDs 

          action.payload.userId = Number(action.payload.userId)
          action.payload.date = new Date().toISOString();
          action.payload.reactions = {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
          }
          console.log(action.payload)
          state.posts?.push(action.payload)
      })
     
},

});

export const selectAllPosts = (state: RootState) => state.yumePosts.posts
export const getPostsStatus = (state: RootState) => state.yumePosts.status
export const getPostsError = (state: RootState) => state.yumePosts.error
export const selectPostById = (state: RootState, postId: number) => state.yumePosts.posts?.find(post => post.id === postId)



export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
