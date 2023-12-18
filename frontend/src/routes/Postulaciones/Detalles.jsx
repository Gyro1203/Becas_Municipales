import { useParams } from "react-router-dom"
import { getForm } from "../../services/Postulacion.service";
import { useEffect, useState } from "react";

const Detalles = () => {
  const { id } = useParams();
  const [ postulacion, setPostulacion ] = useState([]); 

  useEffect (() => {
    getForm(id).then((response) => {
      setPostulacion(response);
    });
  }, []);

  return (
    <>
        <br/>
        <h2>Detalles de la postulacion</h2>
        <div>
            <p>Nombre: {postulacion.username}</p>
            <p>Rut: {postulacion.rut}</p>
            <p>Tipo de beca: {postulacion.typeBeca}</p>
            <p>Fecha de nacimiento: {postulacion.birthdate}</p>
            <p>Direccion: {postulacion.address}</p>
            <p>Discapacidad: {postulacion.handicap}</p>
            <p>Fecha de postulacion: {postulacion.createdAt}</p>
        </div>
    </>
  )
}

export default Detalles