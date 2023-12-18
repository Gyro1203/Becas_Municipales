import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createBeca } from '../services/create.service';

function createComp() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        login(data).then(() => {
        navigate('/');
        });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            typeBeca="tipo de beca"
            descipcionBeca="describir beca"
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      );
     
}

export default createComp;
