import { Link } from 'react-router-dom';
import { getForms } from '../services/Postulacion.service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
                        <Link to={`/forms/${postulacion._id}`}>
                            {postulacion.username} | 
                            | {postulacion.rut} | 
                            | {postulacion.typeBeca} |  
                            | {postulacion.address} | 
                            | {postulacion.handicap} | 
                            | {postulacion.birthdate} 
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default VerPostulaciones;