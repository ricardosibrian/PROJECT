import { Routes, Route, Navigate } from 'react-router-dom';

import classes from './AuthView.module.scss';

import LoginForm from '../../Components/AuthForms/LoginForm/LoginForm';
import RegisterForm from '../../Components/AuthForms/RegisterForm/RegisterForm';
import Logout from '../../Components/AuthForms/Logout';
import { useUserContext } from '../../Components/contexts/UserContext';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AuthView = () => {
  const navigate = useNavigate();
  const { login, logout, register, user } = useUserContext();

  const onLoginHandler = async (identifier, password) => {
    //Ejecutar el servicio de login <- User context
    await login(identifier, password);
  }

  const onLogoutHandler = async () => {
    await logout();
  }

  const onRegisterHandler = async (username, email, password) => {
    await register(username, email, password);
  }

  useEffect(() => {
    if (user) {
      navigate("/");
    }else{
      navigate("/auth/signin");
    }
  }, [user])

  return (
    <div className={classes["container"]}>
      <div className={classes["card"]}>
        <Routes>
          <Route path='signin' element={<LoginForm onLogin={onLoginHandler} />} />
          <Route path='signup' element={<RegisterForm onRegister={onRegisterHandler} />} />
          <Route path='signout' element={<Logout onLogout={onLogoutHandler} />} />
        </Routes>
      </div>
    </div>
  )
}

export default AuthView;