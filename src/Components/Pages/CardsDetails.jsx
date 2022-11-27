import * as React from 'react';
import Title from '../Utils/Title';
import SecondaryTitle from '../Utils/SecondaryTitle';
import LeccionesList from '../Utils/LeccionesList';

function CardDetails() {
    return(
        <div> 
            <Title text="Precálculo"/>
            <SecondaryTitle text="Lecciones:"/>
            <LeccionesList />
            
        </div> 
    );
}
  
export default CardDetails;