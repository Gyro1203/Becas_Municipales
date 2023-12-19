import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { updateApelation } from "../../services/apelation.service"
import { useParams } from 'react-router-dom'

const EditarApelacion = () => {

  const { id } = useParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const navigate = useNavigate();
    const onSubmit = async (data) => {
      await updateApelation(id, data);
      console.log(data);
      navigate("/apelation");
    }

  return (
    <>
    <div>EditarApelacion</div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label htmlFor="estado">Estado</label>
      <input  autoComplete="off" {...register("estado", { required: true })} />
      </div>
      {errors.exampleRequired && <span>Campo vacio!</span>}
      <input type="submit" />
    </form>
    <button type="button" onClick={()=> navigate("/apelation")} >Cancelar</button>
    
    </>
    
  )
}

export default EditarApelacion