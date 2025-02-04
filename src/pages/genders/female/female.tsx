import { Tproducts } from '@/pages/products.type';
import { useModelGenders } from '../model.genders';

export function Female() {
  const { data } = useModelGenders();
  return (
    <section>
      {data.listProducts?.map((product: Tproducts) => {
        return <div>{product.title}</div>;
      })}
    </section>
  );
}
