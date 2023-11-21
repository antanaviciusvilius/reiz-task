import type { Product, ProductsResponse } from '@/types/Product';
import fetchHelper from './fetchHelper';

const PHONES_ENDPOINT = 'https://dummyjson.com/products';

const getProducts = async (title?: string): Promise<Product[]> => {
  const queryByTitle = title ? `/search?q=${title}` : '';
  const products = await fetchHelper<ProductsResponse>(`${PHONES_ENDPOINT}${queryByTitle}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return Promise.resolve(products.products);
};

export default getProducts;