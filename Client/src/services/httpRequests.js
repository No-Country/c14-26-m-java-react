import axios from "axios";

const URL = 'https://fakestoreapi.com'

export const getRequest = async endpoint => {
    // const token = getToken();
    try {
      const { data } = await axios.get(URL + endpoint, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        //   Authorization: getToken()
        }
      });
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
  
        throw new Error(error.message);
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  };