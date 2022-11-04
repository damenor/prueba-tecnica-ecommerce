const API_BASE_URL = 'https://front-test-api.herokuapp.com/api'
const API_URL_GET_PRODUCTS = `${API_BASE_URL}/product`

export const getApiProducts = async () => {
  const response = await fetch(API_URL_GET_PRODUCTS)
  return await response.json()
}

export const getApiProductById = async ({ queryKey }) => {
  const productId = queryKey[1]
  const response = await fetch(`${API_URL_GET_PRODUCTS}/${productId}`)
  return await response.json()
}
