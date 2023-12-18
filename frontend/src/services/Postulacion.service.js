import axios from './root.service';

export const getForms = async () => {
  try {
    const response = await axios.get('/Forms');
    if (response.status === 200) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
};

export const createForm = async (form) => { 
  try {
    const response = await axios.post('/Forms', form);
    if (response.status === 201) {
      return response.data.data;
    }
    return {};
  } catch (error) { 
    console.log(error);
  } 
};

export const getForm = async (id) => { 
  try {
    const response = await axios.get(`/Forms/${id}`);
    if (response.status === 200) {
      return response.data.data;
    }
    return {};
  } catch (error) { 
    console.log(error);
  } 
};

export const getMyForms = async () => {
  try {
    const response = await axios.get('/Forms/myForms');
    if (response.status === 200) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
};

export const deleteForm = async (id) => {
  try {
    const response = await axios.delete(`/Forms/${id}`);
    if (response.status === 200) {
      return response.data.data;
    }
    return {};
  } catch (error) {
    console.log(error);
  }
};
