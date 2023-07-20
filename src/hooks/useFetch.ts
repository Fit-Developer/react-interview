import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "https://cdn.contentful.com";
axios.defaults.headers.common["Authorization"] =
  "Bearer VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o";

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string | unknown>("");
  useEffect(() => {
    setIsLoading(false);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response?.data;
        setData(data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
          setIsLoading(false);
        } else {
          setError(error);
        }
      }
    };
    fetchData();
  }, [url]);
  return { isLoading, data, error };
};
