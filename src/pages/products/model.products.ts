import { cacheKey } from '@/cache/cacheKey';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from './services.products';
import { Tproducts } from './products.type';

export const useModelProducts = () => {
  const { isPending, data: listProducts } = useQuery({
    queryKey: [cacheKey.products.list],
    queryFn: getProducts,
  });
  const homePopularSeason = listProducts?.slice(0, 4) || [];
  const recommendedProducts =
    listProducts
      ?.filter((product: Tproducts) => product.price > 2000)
      ?.slice(0, 5) || [];
  return {
    state: { isPending },
    data: { listProducts, homePopularSeason, recommendedProducts },
  };
};
