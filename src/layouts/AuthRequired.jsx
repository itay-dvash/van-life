import { Navigate, Outlet } from 'react-router-dom'

export default function AuthRequired() {
    const isLoggedIn = true

    if (!isLoggedIn)
        return <Navigate to='login?message=You%20must%20login%20first' />
    return <Outlet />
}