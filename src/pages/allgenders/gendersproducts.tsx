import { Tproducts } from '@/pages/products.type';
import { useModelGenders } from './model.genders';
import { CardProduct } from '@/components/card-product/card';
import { ContainerCards } from '../layouts/containerCards';
import { Container } from '../layouts/container';
import { SkeletonCard } from '../layouts/skeletonCard';

export function GenderProducts() {
  const { data, state } = useModelGenders();
  return (
    <section className="min-h-screen ">
      <Container>
        <div className="flex items-center justify-center">
          {state.isLoading || state.isError ? <SkeletonCard qtDivs={8} /> : ''}
        </div>
        <ContainerCards styleDiv="grid grid-cols-5 gap-4">
          {data.listProducts?.map((product: Tproducts) => {
            return (
              <CardProduct
                itemProduct={product}
                product={product}
                key={product._id}
              />
            );
          })}
        </ContainerCards>
      </Container>
    </section>
  );
}
