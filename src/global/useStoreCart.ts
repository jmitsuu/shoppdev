import { Tproducts } from '@/pages/products/products.type';
import { toast } from 'sonner';
import { create } from 'zustand';

type Store = {
  cart: Tproducts[];
  incCart: (item: Tproducts) => void;
  decrCart: (id: string) => void;
};
type TypeFilterCart = {
  stateOne: Tproducts[];
  stateTwo: Tproducts;
};
const filterItemDuplicate = ({ stateOne, stateTwo }: TypeFilterCart) => {
  const findItem = stateOne.findIndex(
    (item: Tproducts) => item._id === stateTwo._id
  );
  localStorage.setItem('cart', JSON.stringify([...stateOne, stateTwo]));

  toast.success('Produto adicionado ao carrinho');
  if (findItem >= 0) {
    toast.warning('Produto já foi adicionado ao carrinho');
    return { cart: stateOne };
  }
  const getCartLocal = localStorage.getItem('cart');
  const newCart = JSON.parse(getCartLocal || '');
  return { cart: newCart };
};
const removeLocalStorageCart = () => {};

const useStoreCart = create<Store>()((set) => ({
  cart: [],
  incCart: (item) =>
    set((state) =>
      filterItemDuplicate({ stateOne: state.cart, stateTwo: item })
    ),
  decrCart: (id: string) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== id),
    })),
}));
export default useStoreCart;
