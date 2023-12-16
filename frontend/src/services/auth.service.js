import axios from './root.service';
import cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const login = async ({ rut, password }) => {
  try {
    const response = await axios.post('auth/login', {
      rut,
      password,
    });
    const { status, data } = response;
    if (status === 200) {
      const { rut, roles } = await jwtDecode(data.data.accessToken);
      console.log("roles", roles)
      localStorage.setItem('user', JSON.stringify({ rut, roles }));
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${data.data.accessToken}`;
      cookies.set('jwt-auth', data.data.accessToken, { path: '/' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  delete axios.defaults.headers.common['Authorization'];
  cookies.remove('jwt');
  cookies.remove('jwt-auth');
};

export const test = async () => {
  try {
    const response = await axios.get('/users');
    const { status, data } = response;
    if (status === 200) {
      console.log(data.data);
    }
  } catch (error) {
    console.log(error);
  }
};
