import type { Product } from '@/types/Product';

const filterByBrand = (array: Product[], brand: string) => array
  .filter(
    (product) => product.brand.toLowerCase().includes(brand.toLowerCase()),
  );

export default filterByBrand;
