import { useState } from "react";
import Loading from "../Components/Loading";
import axios from "axios";
import { URLS } from "../constants";
import Title from "../Components/Title";

export default function useApi() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const create = async ({ url, payload }) => {
    try {
      setLoading(true);
      await axios.post(url, payload);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      list({url: URLS.TODOS});
    }
  };

  const list = async ({ url }) => {
    try {
      setLoading(true);
      const { data } = await axios(url);
      setData(data.data);
    } catch (e) {
      setLoading(false);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async ({ url, id, payload }) => {
    try {
      setLoading(true);
      await axios.put(url, id, payload);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const deleteById = async ({ url, id }) => {
    try {
      setLoading(true);
      const link = url + "/" + id;
      await axios.delete(link);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      list({url:URLS.TODOS})
    }
  };

  return { data, error, loading, create, list, updateStatus, deleteById };
}
