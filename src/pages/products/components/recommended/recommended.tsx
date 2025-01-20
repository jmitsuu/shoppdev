import { Container } from '@/pages/layouts/container';
import { Title } from '../title/title';
import { Tproducts } from '../../products.type';
import { CardProduct } from '../card-product/card';
import { useModelProducts } from '../../model.products';

export function Recommended() {
  const { data } = useModelProducts();
  return (
    <Container>
      <Title
        title="Recomendados"
        subTitle="Estilos que talvez encaixe melhor no seu perfil"
      />
      <div className="flex justify-center my-20 gap-x-5">
        {data.recommendedProducts?.map((product: Tproducts) => {
          return (
            <CardProduct
              itemProduct={product}
              product={product}
              key={product._id}
            />
          );
        })}
      </div>
    </Container>
  );
}
