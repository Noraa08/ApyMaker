import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Counter from './Counter'
import Posts from './Posts'
import SinglePostPage from './Posts/features/posts/SinglePostPage'
import { fetchUsers } from './Posts/features/users/usersSlice'
import Select from './Select'
import { store } from './store'
import Error from '../Error'


// get users immediately as it loaded
store.dispatch(fetchUsers())

const ReduxUseCase = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Counter />} />
          <Route path="posts" element={<Posts />} />
          <Route path="select" element={<Select />} />

          <Route path="*" element={<Error />} />

        </Route>
      </Routes>
    </Provider>
  )
}

export default ReduxUseCase