import React from 'react'
import { useEffect, useState } from 'react';
import { getApelations } from '../../services/apelation.service';
import { Link } from 'react-router-dom';



function VerApelaciones() {

    const [apelations, setApelations] = useState([]);
    
    useEffect(() => {
        getApelations().then((response) => {
            setApelations(response);
        });
    console.log(apelations);
    }, []);
    
  return (
    <>
    <h1>Lista de apelaciones</h1>
     <ul>
      {apelations.map((apelation) => (
          <li key={apelation._id}>
             {apelation.rut} || {apelation.username} <br />
             <Link to={`/apelation/${apelation._id}`}>Ver Detalles</Link>
          </li>
      ))} 
     </ul>
        <Link to="/apelation">Volver</Link>
    </>
  )
}

export default VerApelaciones