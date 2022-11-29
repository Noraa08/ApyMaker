import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './Counter/features/counter/counterSlice'
import postsReducer from './Posts/features/posts/postSlice'
import usersReducer from './Posts/features/users/usersSlice'

export const store = configureStore({
    reducer:{
        yumeCounter: counterReducer,
        yumePosts: postsReducer,
        yumeUsers: usersReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch