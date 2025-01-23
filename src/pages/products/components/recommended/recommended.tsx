import { Container } from '@/pages/layouts/container';
import { Title } from '../title/title';
import { Tproducts } from '../../products.type';
import { CardProduct } from '../card-product/card';
import { useModelProducts } from '../../model.products';
import { ContainerCards } from '../../layouts/containerCards';

export function Recommended() {
  const { data } = useModelProducts();
  return (
    <Container>
      <Title
        title="Recomendados"
        subTitle="Estilos que talvez encaixe melhor no seu perfil"
      />
      <ContainerCards>
        {data.homePopularSeason?.map((product: Tproducts) => {
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
  );
}
