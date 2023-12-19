import { useForm } from 'react-hook-form';
import { createForm } from '../services/Postulacion.service';
import { Box, Button, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';

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
        <Box 
            component="form" 
            onSubmit={handleSubmit(onSubmit)}
            sx={{background: grey[800], width:'50%', marginLeft:'25%', marginTop:'10px'}}
        >
            <div>
                <TextField
                    name="typeBeca"
                    type="string"
                    label="Beca"
                    variant='outlined'
                    {...register('typeBeca', { required: true })}
                />
            </div>
            <div>
                <TextField
                    name="birthdate"
                    type='date'
                    variant='outlined'
                    {...register('birthdate', { required: true , min: 1900-1-1})}
                />
            </div>
            <div>
                <TextField
                    name="address"
                    type="string"
                    label="Direccion"
                    {...register('address', { required: true })}
                />
            </div>
            <div>
                <TextField
                    name="handicap"
                    type="string"
                    label="Discapacidad"
                    variant='outlined'  
                    {...register('handicap', { required: true })}
                />
            </div>
            {errors.exampleRequired && <span>Este campo es obligatorio</span>}
            <Button type="submit">Enviar</Button>
        </Box>
    );
}
