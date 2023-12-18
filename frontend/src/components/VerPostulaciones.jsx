import { getForms } from '../services/Postulacion.service';
import { useEffect, useState } from 'react';

const VerPostulaciones = () => {

    const [ postulaciones, setPostulaciones ] = useState([]);

    useEffect(()=>{
        getForms().then((response) =>{
            setPostulaciones(response);
        });
        console.log(postulaciones); 
    },[])

    return(
        <>
            <h1>Postulaciones</h1>
            <ul>
                {postulaciones.map((postulacion) => (
                    <li key={postulacion._id}>
                        {postulacion.username} | {postulacion.rut} | {postulacion.typeBeca} | {postulacion.address} | {postulacion.handicap} | {postulacion.birthdate} 
                    </li>
                ))}
            </ul>
        </>
    )
}

export default VerPostulaciones;