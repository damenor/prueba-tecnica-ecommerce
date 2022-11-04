const API_BASE_URL = 'https://front-test-api.herokuapp.com/api'
const API_URL_GET_PRODUCTS = `${API_BASE_URL}/product`

export const getApiProducts = async () => {
  const response = await fetch(API_URL_GET_PRODUCTS)
  return await response.json()
}
