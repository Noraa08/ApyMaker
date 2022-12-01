import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {AuthProvider} from './context/AuthProvider'

import Layout from './components/Layout'

import LoginForm from './LoginForm'
import UserRegisForm from './UserRegisForm'


const LoginUseCase = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* 布局路由 Layout - Outlet */}
        <Route path="/" element={<Layout />} >
          {/* 这里会在内部处理父路由已经匹配到的路径前缀，所以不要写成 /teams/:teamId，直接写后面的部分 */}

          <Route index element={<UserRegisForm />} />
          <Route path="login-form" element={<LoginForm />} />

        </Route>

      </Routes>
    </AuthProvider>
  )
}

export default LoginUseCase