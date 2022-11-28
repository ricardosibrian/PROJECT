import * as React from 'react';
import Title from '../Utils/Title';
import banner from '../../assets/images/banner.png';
import {useUserContext} from '../contexts/UserContext';

const Inicio = () => {
   
  const user = useUserContext();
  console.log(user.username);
    return (
        <div>     
          <h1></h1>
          <Title text="jhg"/>
          <img src={banner} alt="banner" width="100%" height="350px"></img>
        </div>  
      );
};

export default Inicio;