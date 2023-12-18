import { useForm } from "react-hook-form"
import { createApelation } from "../services/apelation.service"
import { useNavigate } from "react-router-dom"

export default function ApelacionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();
  const onSubmit =async (data) => {
    await createApelation(data);
    console.log(data);
    navigate("/apelation");
  }


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div>
      <label htmlFor="apelacion">Causal de apelacion</label>
      <input {...register("apelacion", {required: true})} />
      </div>
      {/* include validation with required or other standard HTML validation rules */}
      <div>
      <label htmlFor="razon">Razon de rechazo</label>
      <input {...register("razon", { required: true })} />
      </div>
      <div>
      <label htmlFor="fecha">Fecha</label>
      <input  autoComplete="off" {...register("fecha", { required: true })} />
      </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>Campo vacio!</span>}
      <input type="submit" />
    </form>
    <button type="button" onClick={()=> navigate("/apelation")} >Cancelar</button>
    </>
  )
}