import { cacheKey } from '@/cache/cacheKey';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services.products';

export const useModelProducts = () => {
  const limit = 4;
  const { isPending, data: listProducts } = useQuery({
    queryKey: [cacheKey.products.list, limit],
    queryFn: () => getProducts(limit),
  });

  const recommendedProducts = listProducts?.reverse();
  return {
    state: { isPending },
    data: { listProducts, recommendedProducts },
  };
};
