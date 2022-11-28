import { useState, React } from 'react';
import { toast } from 'react-toastify';
import classes from '../AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin = () => { } }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const errors = {
    "identifier": !identifier,
    "password": !password
  }

  const hasErrors = () => Object.values(errors).some(error => error);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (hasErrors()) {
      toast.warn("Credenciales Incorrectas");
      return;
    }

    onLogin(identifier, password);
  }

  return (
    <section className={classes["containerr"]}>
      <h3 className={classes["logintitle"]}> Already have an account? </h3>

      <form onSubmit={onSubmitHandler}>
        <label>
          Usuario *
          <input
            className={errors["identifier"] ? classes["error"] : ""}
            type={"text"}
            name="identifier"
            autoComplete='username'
            value={identifier}
            onChange={({ target }) => { setIdentifier(target.value) }} />
        </label>

        <label>
          Password *
          <input
            className={errors["password"] ? classes["error"] : ""}
            type={"password"}
            name="password"
            autoComplete='current-password'
            value={password}
            onChange={({ target }) => { setPassword(target.value) }} />
        </label>

        <button type="submit">
          Sign in
        </button>
        <button type='button' onClick={()=>{navigate('/auth/signup')}}>
          Register
        </button>
      </form>
    </section>
  );
}

export default LoginForm;