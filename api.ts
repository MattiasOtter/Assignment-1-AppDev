import axios from "axios";

const API_KEY = "RGAPI-aadd1292-ea1d-431e-af53-7e36bd7b3459"; // Replace with your Riot Games API key
const BASE_URL =
  "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/en_US/champion.json";

export const fetchChampions = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        "X-Riot-Token": API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching champions:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const fetchChampionDetails = async (id: string): Promise<any> => {
    try {
      const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/14.19.1/data/en_US/champion/${id}.json`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching champion details:', error.message);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        }
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  };