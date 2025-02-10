import useStoreCart from '@/global/useStoreCart';
import { useEffect, useState } from 'react';

export function useModelCart() {
  const [amoutPrice, setAmoutPrice] = useState(0);
  const { cart } = useStoreCart();
  const totalPriceCart = cart.reduce((acc, val) => {
    return acc + val.price;
  }, 0);
  useEffect(() => {
    setAmoutPrice(totalPriceCart);
  }, [totalPriceCart]);
  return {
    data: { amoutPrice },
  };
}
