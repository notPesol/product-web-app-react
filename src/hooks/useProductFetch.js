import API from '../API';

import { useEffect, useState } from 'react';

export const useProductFetch = (productId) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setError(false);
        setLoading(true);

        const product = await API.fetchProduct(productId);

        setProduct({...product});
        setLoading(false);
        console.log(product);
      } catch (error) {
        setError(true);
      }
    }

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
}