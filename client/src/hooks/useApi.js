import { useCallback, useState } from "react";
import axios from "axios";

export default function useApi() {
  const [data, setData] = useState([]);
  const [error, setEroor] = useState(null);
  const [loading, setLoading] = useState(false);

  const list = useCallback(
    async ({url}) => {
      try {
        setLoading(true);
        const { data } = await axios(url);    
        setData(data.data);
        return data?.data;
      } catch (e) {
        setEroor(e);
      } finally {
        setLoading(false);
      }
    },[]); 
   
  const create = async ({ url, payload }) => {
    try {
      setLoading(true);
      const result = await axios.post(url, payload);

      return result;
    } catch (e) {
      setEroor(e);
    } finally {
      setLoading(false);
    }
  };
  const updateStatus = async ({ url, id, payload }) => {
    try {
      setLoading(true);
      url = url + "/" + id;
      const result = await axios.put(url, payload);

      return result;
    } catch (e) {
      setEroor(e);
    } finally {
      setLoading(false);
    }
  };
  const deleteById = async ({ url, id}) => {
    try {
      setLoading(true);
      url = url + "/" + id;
      const result = await axios.delete(url);

      return result;
    } catch (e) {
      setEroor(e);
    } finally {
      setLoading(false);
    }
  };


  return{
    data,error,loading,list,create,updateStatus,deleteById,
  };
}
