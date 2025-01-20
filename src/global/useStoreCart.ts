import { Tproducts } from '@/pages/products/products.type';
import { create } from 'zustand';

type Store = {
  cart: Tproducts[];
  incCart: (item: Tproducts) => void;
  decrCart: (id: number) => void;
};

const useStoreCart = create<Store>()((set) => ({
  cart: [],
  incCart: (item: Tproducts) =>
    set((state) => ({ cart: [...state.cart, item] })),
  decrCart: (id: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== id),
    })),
}));
export default useStoreCart;
