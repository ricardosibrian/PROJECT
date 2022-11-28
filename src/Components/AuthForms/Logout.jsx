import { useState } from 'react';
import { toast } from "react-toastify";

const LoginForm = ({ onLogout = () => { } }) => {
  onLogout();
}

export default LoginForm;