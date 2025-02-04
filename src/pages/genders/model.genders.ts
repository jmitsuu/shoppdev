import { cacheKey } from '@/cache/cacheKey';
import { useQuery } from '@tanstack/react-query';
import { getProductsGenders } from '../services.products';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useModelGenders() {
  const [searchGender, setSearchGender] = useState('');

  const { isPending, data: listProducts } = useQuery({
    queryKey: [cacheKey.products.list, searchGender],
    queryFn: () => getProductsGenders(searchGender),
    enabled: !!searchGender,
  });
  useEffect(() => {
    const location = useLocation();
    const genderpage = location.pathname.replace('/', '');
    if (genderpage) {
      setSearchGender(genderpage);
    }
  }, []);
  return {
    state: { isPending },
    data: { listProducts },
    actions: { setSearchGender },
  };
}
