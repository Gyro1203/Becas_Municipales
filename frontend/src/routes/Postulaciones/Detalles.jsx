import { useParams } from "react-router-dom"
import { getForm } from "../../services/Postulacion.service";
import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const Detalles = () => {
  const { id } = useParams();
  const [ postulacion, setPostulacion ] = useState([]); 

  useEffect (() => {
    getForm(id).then((response) => {
      setPostulacion(response);
    });
  }, []);

  return (
    <Box sx={{ width:'50%', background: grey[800], marginLeft:'25%', marginTop:'10px'}}>
        <Typography padding='10px' variant='h4' align="center" color='white'>
          Detalles de la postulacion
        </Typography>
        <div>
            <Typography padding='5px' variant='h6'>Nombre: {postulacion.username}</Typography>
            <Typography padding='5px' variant='h6'>Rut: {postulacion.rut}</Typography>
            <Typography padding='5px' variant='h6'>Tipo de beca: {postulacion.typeBeca}</Typography>
            <Typography padding='5px' variant='h6'>Fecha de nacimiento: {postulacion.birthdate}</Typography>
            <Typography padding='5px' variant='h6'>Direccion: {postulacion.address}</Typography>
            <Typography padding='5px' variant='h6'>Discapacidad: {postulacion.handicap}</Typography>
            <Typography padding='5px' variant='h6'>Fecha de postulacion: {postulacion.createdAt}</Typography>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <Button href={"/forms"} size="large" sx={{ color: 'lightblue' }}>
            Volver
          </Button>
        </div>
        
    </Box>
  )
}

export default Detalles