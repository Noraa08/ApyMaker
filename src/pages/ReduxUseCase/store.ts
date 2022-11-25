import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './Counter/features/counter/counterSlice'
import postsSlice from './Posts/features/posts/postSlice'
import usersSlice from './Posts/features/users/usersSlice'

export const store = configureStore({
    reducer:{
        yumeCounter: counterSlice,
        yumePosts: postsSlice,
        yumeUsers: usersSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch