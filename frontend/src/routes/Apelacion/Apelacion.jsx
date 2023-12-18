import { Link } from "react-router-dom";
import { getApelations } from "../../services/apelation.service";
import { useEffect, useState } from "react";

const Apelacion = () => {

    const [apelations, setApelations] = useState([]);
    
    useEffect(() => {
        getApelations().then((response) => {
            setApelations(response);
        });
    console.log(apelations);
    }, []);

    return (
        <>
        <h1>Ver apelaciones</h1>
        <Link to="/apelation/create">Generar Apelacion</Link>
         <ul>
          {apelations.map((apelation) => (
              <li key={apelation._id}>
                 {apelation.rut} || {apelation.username} <br />
                 <Link to={`/apelation/${apelation._id}`}>Ver Detalles</Link>
              </li>
          ))} 
         </ul>
        </>
        
    );
};

export default Apelacion;