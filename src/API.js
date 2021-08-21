const API_URL = 'http://localhost:5000/'

const fetchProduct = async (productId) => {
  const endpoint = `${API_URL}${productId}`;
  const response = await fetch(endpoint);
  return await response.json();
}

const fetchProducts = async () => {
  const endpoint = API_URL;
  const response = await fetch(endpoint);
  return await response.json();
}

const API = {
  fetchProduct,
  fetchProducts
}

export default API;