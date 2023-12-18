import { Link } from 'react-router-dom';
import { getMyForms, deleteForm  } from '../services/Postulacion.service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';

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
                        <Card>
                            <CardContent>
                                <Typography>{postulacion.username}</Typography>
                                <Typography>{postulacion.rut}</Typography>
                                <Typography>{postulacion.typeBeca}</Typography>
                                <Typography>{postulacion.address}</Typography>
                                <Typography>{postulacion.handicap}</Typography>
                                <Typography>{postulacion.birthdate}</Typography>
                                <Button onClick={()=>deleteForm(postulacion._id)}>Eliminar</Button>
                            </CardContent>
                        </Card>
                        
                    </li>
                ))}
                </ul>

        </>
    )
}

export default VerMisPostulaciones;