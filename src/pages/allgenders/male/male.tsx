import { useModelGenders } from '../model.genders';
import { Tproducts } from '@/pages/products.type';

export function Male() {
  const { data } = useModelGenders();
  return (
    <section>
      {data.listProducts?.map((product: Tproducts) => {
        return <div>{product.title}</div>;
      })}
    </section>
  );
}
