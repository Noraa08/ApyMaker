import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'

import Layout from './components/Layout'
import LoginForm from './pages/LoginForm'
import RegisForm from './pages/RegisForm'
import HomePage from './pages/HomePage'
import Admin from './pages/Admin'
import Client from './pages/Client'
import './index.css';
import UnauthPage from './pages/UnauthPage'
import RequireAuth from './components/requireAuth'
import ExamplePage from './pages/ExamplePage'

interface IRole {
  user: number
  client: number
  admin: number
}
const ROLES = {
  'user': 2001,
  'client': 1984,
  'admin': 5150
} as IRole

const LoginUseCase = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* 布局路由 Layout - Outlet */}
        <Route path="/" element={<Layout />} >
          {/* 这里会在内部处理父路由已经匹配到的路径前缀，所以不要写成 /teams/:teamId，直接写后面的部分 */}
          {/* public routes */}
          <Route index element={<HomePage />} />
          <Route path="sign-up" element={<RegisForm />} />
          <Route path="sign-in" element={<LoginForm />} />
          <Route path="unauth-page" element={<UnauthPage />} />

          {/* auth outlet */}
          <Route element={<RequireAuth allowedRoles={[ROLES.user]} />} >
            <Route path="example" element={<ExamplePage />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />} >
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.client]} />} >
            <Route path="client" element={<Client />} />
          </Route>

        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default LoginUseCase