import axios from "axios";
import * as url from "../url_helper";
import accessToken from "../jwt-token-access/accessToken";

// Configura la URL base de la API
const API_URL = process.env.REACT_APP_API_URL;
console.log("Valor de API_URL:", API_URL);

// Función para configurar encabezados de autenticación si es necesario
const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}${url.POST_REGISTER}`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Funciones loginUser y loginJWTUser con manejo de errores

export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}${url.POST_LOGIN}`, user);
    return response.data;
  } catch (error) {
    // Manejar el error aquí
    console.log("Error en loginUser:", error);
    if (error.response && error.response.data) {
      console.error(`Error en loginUser:`, error.response.data);
      throw error.response.data;
    } else {
      console.error("Error en loginUser:", error);
      throw error;
    }
  }
};


export const loginJWTUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}${url.POST_JWT_LOGIN}`, user);
    return response.data;
  } catch (error) {
    // Manejar el error aquí
    console.log("Error en loginJWTUser:", error);
    if (error.response && (error.response.status === 400 || error.response.status === 401)) {
      alert("Usuario y/o contraseña incorrectos. Por favor, ingrese credenciales válidas.");
    } else {
      throw error;
    }
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}${url.POST_PASSWORD_FORGET}`, { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerJWTUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}${url.POST_JWT_REGISTER}`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateJWTProfile = async (user) => {
  try {
    const response = await axios.post(`${API_URL}${url.POST_EDIT_JWT_PROFILE}`, user, getAuthHeaders());
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (user) => {
  try {
    const response = await axios.post(`${API_URL}${url.POST_EDIT_PROFILE}`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const jwtForgetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}${url.POST_JWT_PASSWORD_FORGET}`, { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const socialLogin = async (user) => {
  try {
    const response = await axios.post(`${API_URL}${url.SOCIAL_LOGIN}`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}${url.GET_EVENTS}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addNewEvent = async (eventData) => {
  try {
    const response = await axios.post(`${API_URL}${url.ADD_NEW_EVENT}`, eventData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async (eventData) => {
  try {
    const response = await axios.put(`${API_URL}${url.UPDATE_EVENT}`, eventData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await axios.delete(`${API_URL}${url.DELETE_EVENT}`, { data: { eventId } });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}${url.GET_CATEGORIES}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};