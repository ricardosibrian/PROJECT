import { UserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import PortalLayout from '../Portals/Portal';
import LoginForm from './LoginForm/LoginForm';



const useAuth = () => {
    const { user } = useContext(UserContext);
    if(user) return true;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <PortalLayout/> : <LoginForm/>
}

export default ProtectedRoutes;