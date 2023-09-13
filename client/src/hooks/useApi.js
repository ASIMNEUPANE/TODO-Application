import { useState } from "react";
import axios from "axios";
import { URLS } from "../constants";

export default function useApi() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  const create = async ({ url, payload }) => {
    try {
      setLoading(true);
      await axios.post(url, payload);
    } catch (e) {
      setError(e);
      setLoading(false);
    } finally {
      setLoading(false);
      list({url:URLS.TODOS});
    }
  };

  const list = async ({ url }) => {
    try {
      setLoading(true);
      const { data } = await axios(url);
      setData(data.data);
    
    } catch (e) {
      setError(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const updateStatus = () => {};
  const deleteById = () => {};

  return { data, error, Loading, create, list, updateStatus, deleteById };
}
