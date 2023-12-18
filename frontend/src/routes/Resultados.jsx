import { useEffect, useState } from 'react';
import instance from '../services/root.service';
import NavBar from '../components/NavBar';
import { AuthProvider, useAuth } from '../context/AuthContext';
import axios from 'axios';
import ListItemButton from '@mui/material/ListItemButton'

useAuth;

const Resultados = ()  => {
    const [postulaciones, setPostulaciones] = useState([]);
    const [selected, setSelected] = useState(false);
    const [selectedId, setSelectedId] = useState(0);

    useEffect(() => {
        instance.get('/resultados/postulaciones')
        .then((response) => {
            const res = response.data;
            setPostulaciones(res);
            console.log("res ", res);
        })
        .catch((error) => {
            console.log('Error',error);
        })
    })

    return(
    <>
    <NavBar/>
    <h1>Resultados</h1>
    <ListItemButton></ListItemButton>
    </>
    );

}

export default Resultados;