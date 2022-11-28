import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios';
import { UserContextProvider } from './Components/contexts/UserContext';

axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT || 'http://localhost:3000/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
)

