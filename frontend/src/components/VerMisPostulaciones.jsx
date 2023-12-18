import { Link } from 'react-router-dom';
import { getMyForms, deleteForm  } from '../services/Postulacion.service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerMisPostulaciones = () => {

    const [ postulaciones, setPostulaciones ] = useState([]);

    useEffect(()=>{
        getMyForms().then((response) =>{
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
                        <a>
                            {postulacion.username} | 
                            | {postulacion.rut} | 
                            | {postulacion.typeBeca} |  
                            | {postulacion.address} | 
                            | {postulacion.handicap} | 
                            | {postulacion.birthdate} 
                        </a>
                        <button onClick={()=>deleteForm(postulacion._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default VerMisPostulaciones;