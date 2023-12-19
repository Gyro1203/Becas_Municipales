import { Link } from 'react-router-dom';
import { getForms } from '../services/Postulacion.service';
import { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

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
            <Box sx={{width:'100%', display:'flex', flexWrap: 'wrap', gap: 2}}>
                {postulaciones.map((postulacion) => (
                        <Card key={postulacion._id} sx={{ background: grey[800] , textAlign: 'center', flexBasis: 'calc(33.33% - 20px)'}}>
                            <CardContent >
                                <Typography gutterBottom variant='h5' color={'white'}>{postulacion.typeBeca}</Typography>
                                <Typography color={'white'}>{postulacion.username}</Typography>
                                <Typography color={'white'}>{postulacion.rut}</Typography>
                                        
                                <Link to={`/forms/${postulacion._id}`}>
                                
                                </Link>
                            </CardContent>
                            <CardActions>
                                <Button href={`/forms/${postulacion._id}`} sx={{ color: 'lightblue' }}>Ver Detalles</Button>
                            </CardActions>
                        </Card>
                ))}
            </Box>
        </>
    )
}

export default VerPostulaciones;