import { useState, useEffect } from "react";

const useFetchApi = ({url}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = false;
    const fetchData = ({ isMounted,url }) => {
      isMounted = true;
      setLoding(true);
      fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
        .catch((e) => setError(e))
        .finally(() => {
          setLoding(false);
          isMounted = false;
        });
    };
    fetchData({ isMounted,url });
    return (isMounted) => {
      isMounted = false;
    };
  }, [url]);
  return { data, isLoading, error };
};
export default useFetchApi;
