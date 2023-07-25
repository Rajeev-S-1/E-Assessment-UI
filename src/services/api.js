import axios from 'axios';
import { useEffect, useState } from "react";

// export const get = async (url, params) => {
//   try {
//     const response = await axios.get(`${url}`, { params });
//     return response.data;
//   } catch (error) {
//     // Handle error
//     throw error;
//   }
// };

export const post = async (url, data) => {
  try {
    const response = await axios.post(`${url}`, data);
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};

export const FetchData = (url, params) => {
  console.log("Loaded...")

  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}`, { params });
        if (response.status !== 200) {
          throw Error('Invalid address !!!');
        }
        else {
          setisPending(false);
          setData(response.data);
          setError(null);
        }
      }
      catch (error) {
        setisPending(false);
        setError(error.message);
      }
    }

    fetchData();
  }, [url,params])

  return ({ data, isPending, error })
}