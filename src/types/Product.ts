export interface ProductsResponse {
  products: Array<Product>;
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  title: string;
  category: string;
  brand: string;
  price: string;
  stock: string;
  rating: string;
}