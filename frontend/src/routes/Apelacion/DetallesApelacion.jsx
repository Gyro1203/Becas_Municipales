
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getApelation } from '../../services/apelation.service'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const DetallesApelacion=() => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [apelation, setApelation] = useState({});
    useEffect(() => {
        getApelation(id).then((response) => {
            setApelation(response);
        });
    }, []);


  return (
    <>
    
    <Link to={`/apelation/${apelation._id}/edit`}>Editar</Link>
    <div>
    <h1>DetallesApelacion</h1>
    <p>{apelation._id}</p>
    <p>{apelation.rut}</p>
    <p>{apelation.username}</p>
    <p>{apelation.apelacion}</p>
    <p>{apelation.razon}</p>
    <p>{apelation.fecha}</p>
    <p>{apelation.estado}</p>
    </div>
    <button type="button" onClick={()=> navigate("/apelation")} >Volver</button>
    </>
  )
}

export default DetallesApelacion