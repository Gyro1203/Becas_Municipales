import { getMyForms, deleteForm  } from '../services/Postulacion.service';
import { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

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
            <Box sx={{width:'100%', display:'flex', flexWrap: 'wrap', gap: 2}}>
                {postulaciones.map((postulacion) => (
                    <Card key={postulacion._id} sx={{ background: grey[800], paddingLeft:'5px', flexBasis: 'calc(33.33% - 20px)'}}>
                        <CardContent >
                            <Typography color={'white'}>Nombre: {postulacion.username}</Typography>
                            <Typography color={'white'}>Rut: {postulacion.rut}</Typography>
                            <Typography color={'white'}>Tipo de beca: {postulacion.typeBeca}</Typography>
                            <Typography color={'white'}>Fecha de nacimiento: {postulacion.birthdate}</Typography>
                            <Typography color={'white'}>Direccion: {postulacion.address}</Typography>
                            <Typography color={'white'}>Discapacidad: {postulacion.handicap}</Typography>
                            <Typography color={'white'}>Fecha de postulacion: {postulacion.createdAt}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=>deleteForm(postulacion._id)} sx={{ color: 'red' }}>
                                Eliminar
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>

        </>
    )
}

export default VerMisPostulaciones;