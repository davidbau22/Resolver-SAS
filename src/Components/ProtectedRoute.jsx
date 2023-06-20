import { Navigate, Outlet } from 'react-router-dom'


export const ProtectedRoute = ({ user, redirectTo = "/Login" }) => {
    if (!user) {
        return <Navigate to={redirectTo} /> 
    }
    return <Outlet/>
}
