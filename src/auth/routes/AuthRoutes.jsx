import { Navigate, Routes, Route } from 'react-router-dom'
import { LoginRoute } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={ <LoginRoute />} />
        <Route path='register' element={ <RegisterRoute />} />

        <Route path='/*' element={ <Navigate to='/auth/login' />} />
    </Routes>
  )
}
