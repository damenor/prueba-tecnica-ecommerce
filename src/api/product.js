const API_BASE_URL = 'https://front-test-api.herokuapp.com/api'
const API_URL_GET_PRODUCTS = `${API_BASE_URL}/product`
const API_URL_CART = `${API_BASE_URL}/cart`

export const getApiProducts = async () => {
  const response = await fetch(API_URL_GET_PRODUCTS)
  return await response.json()
}

export const getApiProductById = async ({ queryKey }) => {
  const productId = queryKey[1]
  const response = await fetch(`${API_URL_GET_PRODUCTS}/${productId}`)
  return await response.json()
}

export const addApiShoppingCart = async data => {
  const body = JSON.stringify(data)
  const response = await fetch(API_URL_CART, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })
  return await response.json()
}
