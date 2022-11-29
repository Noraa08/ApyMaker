import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { fetchUsers } from './Posts/features/users/usersSlice'
import { fetchPosts } from './Posts/features/posts/postSlice'
import { store } from './store'

import Layout from './components/Layout'
import Counter from './Counter'
import PostsList from './Posts/features/posts/PostsList'
import SinglePostPage from './Posts/features/posts/SinglePostPage'
import Select from './Select'
import Error from '../Error'


// get users and posts immediately as it loaded
store.dispatch(fetchUsers())
store.dispatch(fetchPosts());

const ReduxUseCase = () => {
  return (
    <Provider store={store}>
      <Routes>
        {/* 布局路由 Layout - Outlet */}
        <Route element={<Layout />} >

          {/* 这里会在内部处理父路由已经匹配到的路径前缀，所以不要写成 /teams/:teamId，直接写后面的部分 */}
          <Route path="/counter" element={<Counter />} />

          <Route path="/posts" element={<PostsList />}/>
          <Route path="/posts/:postId" element={<SinglePostPage />} />

          <Route path="/select" element={<Select />} />

          <Route path="*" element={<Error />} />

        </Route>
      </Routes>
    </Provider>
  )
}

export default ReduxUseCase