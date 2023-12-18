import { useEffect, useState } from 'react';
import instance from '../services/root.service';
import NavBar from '../components/NavBar';
import { AuthProvider, useAuth } from '../context/AuthContext';
import axios from 'axios';
import {ListItemButton, Box,Button,Divider,Stack,IconButton,DialogTitle,Dialog, DialogContent, Grid, List,ListItem, ListItemText} from '@mui/material'

useAuth;





const MenuAceptarRechazar = (data) => {
    const [isAbierto, setAbierto] = useState(true);
    

    const handleAceptar = () =>{
        const body ={
            codigo_postulacion:data.data._id,
            isAceptado: true,
        }
        instance.post(`/resultados/`,body)
        .then((response) => {
            const res = response;
            toggleAbierto
            console.log(res);

        })
        .catch((error) => {
            console.log(error);
        })
    }


    const handleRechazar = () =>{

        const body ={
            codigo_postulacion:data.data._id,
            isAceptado:false,
            razon: "   asdasd    asdasd     aa"
        }
        instance.post(`/resultados/`,body)
        .then((response) => {
            const res = response;
            toggleAbierto
            console.log(res);

        })
        .catch((error) => {
            console.log(error);
        })
    }

    const toggleAbierto = () =>{
        setAbierto(!isAbierto);
    }
    return (
        <>
        <Dialog open={isAbierto}>
            <DialogTitle>
                Revisar Postulacion
                <IconButton onClick={toggleAbierto} color="inherit">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </IconButton>
                </DialogTitle>
                <DialogContent>
                    <div>
                        <Divider />
                        <p>Username: {data.data.username}</p>
                        <p>Rut: {data.data.rut}</p>
                        <p>Fecha de nacimiento: {data.data.birthdate.split("T")[0]}</p>
                        <p>Direccion: {data.data.address}</p>
                        <p>Handicap: {data.data.handicap}</p>
                        <Divider />
                        <p>Tipo de beca: {data.data.typeBeca}</p>
                        <p>Fecha de postulacion: {data.data.createdAt.split("T")[0]}</p>
                        <Divider/>
                        <Box display="flex" justifyContent="space-between">

                            <Button sx={{ backgroundColor: 'red', color: 'white' }} onClick={handleRechazar}>
                                Rechazar
                            </Button>

                            <Button sx={{ backgroundColor: 'green', color: 'white' }} onClick={handleAceptar}>
                                Aceptar
                            </Button>
                        </Box>

                    </div>
                </DialogContent>
        </Dialog>
        </>
    )

}


const Resultados = () => {
    
    const [postulaciones, setPostulaciones] = useState([]);
    const [selectedPostulacion, setSelected] = useState([]);
    const [isAbrir, setAbrir] = useState(false);

    useEffect(() => {
        instance.get('/resultados/postulaciones')
        .then((response) => {
            const res = response;
            setPostulaciones(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    const abrirMenu = (postulacion) => {
        setAbrir(!isAbrir)
        setSelected(postulacion)
    }
    
    return(
    <>
    <NavBar/>
    <h1>Postulaciones pendientes</h1>
    <List >
        <ListItem sx={{backgroundColor: '#1A4669'}}>
            <ListItemText sx={{ flexBasis: '10%' }}>N°</ListItemText>
            <ListItemText sx={{ flexBasis: '30%' }}>RUT</ListItemText>
            <ListItemText sx={{ flexBasis: '30%' }}>Beca</ListItemText>
            <ListItemText sx={{ flexBasis: '30%' }}>Fecha</ListItemText>
        </ListItem>
    {postulaciones?.map((postulacion, index) => (
        <ListItemButton ListItem sx={{backgroundColor: 'grey'}}  onClick={()=>abrirMenu(postulacion)}>
            <ListItemText sx={{ flexBasis: '10%' }}>{index+1}</ListItemText>
            <ListItemText sx={{ flexBasis: '30%' }}>{postulacion.rut}</ListItemText>
            <ListItemText sx={{ flexBasis: '30%' }}>{postulacion.typeBeca}</ListItemText>
            <ListItemText sx={{ flexBasis: '30%' }}>{postulacion.createdAt.split("T")[0]}</ListItemText>

        </ListItemButton>
    ))}
    </List>
    {isAbrir ? (
        <MenuAceptarRechazar data={selectedPostulacion}/>
    ) : (
        <></>
    )
        }
    <MostrarResultados/>
    </>
    );

}

const MostrarResultados = () => {
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        instance.get('/resultados/')
        .then((response) => {
            const res = response;
            setResultados(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])


    
    return(
    <>
    <h1>Resultados Postulaciones</h1>
    <List >
        <ListItem sx={{backgroundColor: '#1A4669'}}>
            <ListItemText sx={{ flexBasis: '10%' }}>N°</ListItemText>
            <ListItemText sx={{ flexBasis: '30%' }}>Codigo</ListItemText>
            <ListItemText sx={{ flexBasis: '10%' }}>Aceptado</ListItemText>
            <ListItemText sx={{ flexBasis: '30%' }}>Fecha</ListItemText>
        </ListItem>
    {resultados?.map((resultado, index) => (
        <ListItem ListItem sx={{backgroundColor: 'grey'}}>
            <ListItemText sx={{ flexBasis: '10%' }}>{index+1}</ListItemText>
            <ListItemText sx={{ flexBasis: '30%' }}>{resultado.codigo_postulacion}</ListItemText>
            <ListItemText sx={{ flexBasis: '10%' }}>{resultado.isAceptado.toString()}</ListItemText>
            <ListItemText sx={{ flexBasis: '30%' }}>{resultado.createdAt.split("T")[0]}</ListItemText>

        </ListItem>
    ))}
    </List>
    </>
    );
}

export default Resultados;