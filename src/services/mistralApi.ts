import axios from 'axios';

const API_URL = 'https://api.mistral.ai/v1';

export const sendMessage = async (message: string) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, { message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export const retrieveInformation = async (query: string) => {
  try {
    const response = await axios.get(`${API_URL}/retrieve`, { params: { query } });
    return response.data;
  } catch (error) {
    console.error('Error retrieving information:', error);
    throw error;
  }
};

export const getModelContext = async () => {
  try {
    const response = await axios.get(`${API_URL}/context`);
    return response.data;
  } catch (error) {
    console.error('Error getting model context:', error);
    throw error;
  }
};
