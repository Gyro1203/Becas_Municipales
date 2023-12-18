import { useForm } from 'react-hook-form';
import { createForm } from '../services/Postulacion.service';

export default function PostulacionForm(){

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const res = await createForm(data);
        console.log(res);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='typebeca'>Beca</label>
                <input
                    name="typeBeca"
                    type="string"
                    {...register('typeBeca', { required: true })}
                />
            </div>
            <div>
                <label htmlFor='birthdate'>Fecha de Nacimiento</label>
                <input
                    name="birthdate"
                    type="date"
                    {...register('birthdate', { required: true , min: 1900-1-1})}
                />
            </div>
            <div>
                <label htmlFor='address'>Dirección</label>
                <input
                    name="address"
                    type="string"
                    {...register('address', { required: true })}
                />
            </div>
            <div>
                <label htmlFor='handicap'>Discapacidad</label>
                <input
                    name="handicap"
                    type="string"
                    {...register('handicap', { required: true })}
                />
            </div>
            {errors.exampleRequired && <span>Este campo es obligatorio</span>}
            <input type="submit" />
        </form>
    );
}
