import {mainAxios, productsAxios} from '../axios'

export async function axiosFetch(req, method, values) {
  let result = null
  try {
    result = await mainAxios({
      method: method,
      url: req,
      data: { ...values }
    });
    return { data: result.data }
  } catch (error) {
    return { error: error.message }
  }
}

export async function fetchFakeProducts() {
  let result = null
  try {
    result = await productsAxios({
      method: 'GET',
      url: "https://fakestoreapi.com/products",
    });
    return { data: result.data }
  } catch (error) {
    return { error: error.message }
  }
}

