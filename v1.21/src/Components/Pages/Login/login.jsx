import React, { useState } from 'react';
import "./login.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = (props) => {

    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    const handleLogin = () => {
        setError(false); 
        
        if(username.value==='' || password.value==='') {
          setError(true); 
          return;
        } 
    
        if (username.value==='admin' && password.value==='123') {   
          //props.history.push('/PortalAdmin'); 
          alert("Conectado.");
        } else {
          setError(true);  
          //props.history.push('/Login');   
          alert("Error.");       
        }
    }

    return (
          <div>
              <div>
                <TextField
                  variant="standard"                  
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="usuario"
                  name="username"
                  autoComplete="usuario"
                  autoFocus
                  {...username}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="password"
                {...password}
               />              
              </div>
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleLogin}>                                                                                                              
                </Button>                 
              </div>      
    );

};

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }


export default Login;