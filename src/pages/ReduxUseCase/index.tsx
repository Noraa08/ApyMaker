import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { fetchPosts } from './Posts/features/posts/postSlice'
import { fetchUsers } from './Posts/features/users/usersSlice'
import { store } from './store'

import Error from '../Error'
import Layout from './components/Layout'
import Counter from './Counter'
import BlogPosts from './Posts'
import Select from './Select'


// get users and posts immediately as it loaded
store.dispatch(fetchUsers())
store.dispatch(fetchPosts());

const ReduxUseCase = () => {
  return (
    <Provider store={store}>
      <Routes>
        {/* 布局路由 Layout - Outlet */}
        <Route path="/" element={<Layout />} >
          {/* 这里会在内部处理父路由已经匹配到的路径前缀，所以不要写成 /teams/:teamId，直接写后面的部分 */}
          <Route index element={<Counter />} />   
          <Route path="/blog-posts/*" element={<BlogPosts />} />
          <Route path="/select" element={<Select />} />
          <Route path="*" element={<Error />} />

        </Route>

      </Routes>
    </Provider>
  )
}

export default ReduxUseCase