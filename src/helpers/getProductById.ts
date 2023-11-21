import type { Product } from '@/types/Product';
import fetchHelper from './fetchHelper';

const PHONES_ENDPOINT = 'https://dummyjson.com/products';

const getProductById = async (id?: number): Promise<Product> => {
  const product = await fetchHelper<Product>(`${PHONES_ENDPOINT}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return Promise.resolve(product);
};

export default getProductById;
