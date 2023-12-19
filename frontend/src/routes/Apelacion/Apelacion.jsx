import { Link } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Apelacion = () => {


    return (
       <>
       
        <Link to="/apelation/create">Generar Apelacion</Link>
        <br />
        <Link to="/apelation/VerApelaciones">Ver Apelaciones</Link>
        </>
        
    );
};

export default Apelacion;