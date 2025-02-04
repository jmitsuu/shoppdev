import { Tproducts } from '@/pages/products.type';
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
  if (findItem >= 0) {
    toast('Produto já foi adicionado ao carrinho');
    return { cart: stateOne };
  }
  return { cart: [...stateOne, stateTwo] };
};

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
