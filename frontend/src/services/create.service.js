import axios from './root.service';
import cookies from 'js-cookie';

export const createBeca = async (req, res) => {
    try {
        const response = await axios.post('create/', {
            typeBeca, 
            descripcionBeca,
            vencimientoBeca,
        });
    
        const { status, data } = response;;
    
        if (status === 400) {
            const { typeBeca, descripcionBeca,
                vencimientoBeca, } = await jwtDecode(data.data.accessToken);
            localStorage.setItem('user', JSON.stringify({ typeBeca, descripcionBeca,
                vencimientoBeca, }));
            axios.defaults.headers.common[
                'Create'
            ] = `Bearer ${data.data.accessToken}`;
            cookies.set('jwt-auth', data.data.accessToken, { path: '/' });
        }
        } 
    catch (error) {
    console.log(error);
    }
}
        
    