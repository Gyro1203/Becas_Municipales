import axios from "./root.service";

export const getApelations = async () => {
try {
    const response = await axios.get("/apelation");
    if (response.status === 200) {
        console.log(response.data);
        return response.data.data;
    }
    return [];
}catch (error) {
    console.log(error);
}
};

export const createApelation = async (apelation) => {
try {
    const response = await axios.post("/apelation", apelation);
    if (response.status === 201) {
        console.log(response.data);
        return response.data.data;
    }
    return [];
}catch (error) {
    console.log(error);
} 
};

export const getApelation = async (id) => {
try {
    const response = await axios.get(`/apelation/${id}`);
    if (response.status === 200) {
        console.log(response.data);
        return response.data.data;
    }
    return [];
}catch (error) {
    console.log(error);
}
};

export const updateApelation = async (id, apelation) => {
try {
    const response = await axios.put(`/apelation/${id}`, apelation);
    if (response.status === 201) {
        console.log(response.data);
        return response.data.data;
    }
    
    return [];  
}catch (error) {
    console.log(error);
}
};   

