import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface AllowedRolesProps {
    allowedRoles: number[]
}

const RequireAuth = ({ allowedRoles }: AllowedRolesProps) => {
    const { auth } = useAuth()!
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role)) // return the value of role
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/login-example//unauth-page" state={{ from: location }} replace />
                : <Navigate to="/login-example/sign-in" state={{ from: location }} replace />
    );
}

export default RequireAuth;