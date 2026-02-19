
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  variant?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartTotals {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
}
