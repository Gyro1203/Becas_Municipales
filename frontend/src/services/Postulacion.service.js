import axios from './root.service';

export const getForms = async () => {
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