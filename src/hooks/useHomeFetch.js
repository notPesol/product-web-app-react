import API from '../API';

import { useEffect, useState } from 'react';

export const useHomeFetch = () => {
  const [state, setState] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(false);
        setLoading(true);

        const products = await API.fetchProducts();

        setState(products);
        setData(products[0]);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }

    fetchProducts();

    return () => {
      setState([]);
      setData({})
    }
  }, []);

  return { state, data, loading, error };
}