import { useEffect, useState } from 'react';
import instance from '../services/root.service';
import NavBar from '../components/NavBar';
import { AuthProvider, useAuth } from '../context/AuthContext';
import axios from 'axios';
import {ListItemButton, Box,Divider,Stack,IconButton,DialogTitle,Dialog, DialogContent, Grid, List,ListItem, ListItemText} from '@mui/material'
import CancelIcon from '@mui/material/Cancel';

useAuth;





const MenuAceptarRechazar = (data) => {
    const [isAbierto, setAbierto] = useState(true);
    /*
    useEffect(() => {
        instance.get(`/resultados/${id}`)
        .then((response) => {
            const res = response;
            setPostulaciones(res.data.data);
            console.log(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])
    */

    const onClick = () =>{
        setAbierto(false);
    }

    console.log("asdasdsa", data);
    return (
        <>
        <Dialog open={isAbierto}>
            <DialogTitle>
                Revisar Postulacion
                <IconButton onClick={onClick} color="inherit">
                    <CancelIcon />
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
            console.log(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    const abrirMenu = (postulacion) => {
        setAbrir(true)
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
    {isAbrir && 
        <MenuAceptarRechazar data={selectedPostulacion}/>}
    </>
    );

}

export default Resultados;