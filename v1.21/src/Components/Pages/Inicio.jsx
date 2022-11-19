import * as React from 'react';
import Title from '../Utils/Title';
import banner from '../../assets/images/banner.png';

const Inicio = () => {
   
    return (
        <div>     
          <Title text="Bienvenido"/>
          <img src={banner} alt="banner" width="100%" height="350px"></img>
        </div>  
      );
};

export default Inicio;