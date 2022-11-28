import * as React from 'react';
import Title from '../Utils/Title';
import SecondaryTitle from '../Utils/SecondaryTitle';
import LeccionesList from '../Utils/LeccionesList';
import { useLocation } from 'react-router-dom';
import AddLection from '../Utils/AddLection';

function CardDetails(props) {
    const location = useLocation();
    const { courseid } = location.state;
    const { title } = location.state;
    const { videoLink } = location.state;

    return(
        <div> 
            <Title text={title}/>
            <SecondaryTitle text="Lecciones:"/>
            <LeccionesList courseid={courseid} videoLink={videoLink}/>
            <AddLection courseid={courseid}/>
        </div> 
    );
}
  
export default CardDetails;