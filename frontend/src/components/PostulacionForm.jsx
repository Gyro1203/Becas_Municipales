import { useForm } from 'react-hook-form';

function PostulacionForm(){

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return(
        <form>
            <input
                name="rut"
                type="string"
                {...register('rut', { required: true })}
            />
            <input
                type="password"
                name="password"
                {...register('password', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
}

export default PostulacionForm;
