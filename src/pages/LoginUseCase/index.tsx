import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import LoginForm from './LoginForm.tsx'
import UserRegisForm from './UserRegisForm.tsx'

const LoginUseCase = () => {
  return (
    <Routes>
        {/* 布局路由 Layout - Outlet */}
        <Route path="/" element={<Layout />} >
          {/* 这里会在内部处理父路由已经匹配到的路径前缀，所以不要写成 /teams/:teamId，直接写后面的部分 */}
          <Route index element={<UserRegisForm />} />   
          <Route path="login-form" element={<LoginForm />} />   

        </Route>

      </Routes>
  )
}

export default LoginUseCase