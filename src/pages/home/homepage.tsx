import { Container } from '@/pages/layouts/container';
import { Hero } from './components/hero/hero';
import { Categories } from './components/hero-categories/categories';
import { Title } from './components/title/title';
import { useModelProducts } from './model.home';
import { CardProduct } from '../../components/card-product/card';
import { Tproducts } from '../products.type';
import { Skeleton } from '@/components/ui/skeleton';
import { Banner } from './components/banner/banner';
import { ContainerCards } from '../layouts/containerCards';
export function HomePage() {
  const { data, state } = useModelProducts();

  return (
    <>
      <Hero />
      <Categories />
      <Container>
        <Title
          title="Popular na Temporada"
          subTitle="Os melhores estilos para você aproveitar nessa temporada"
        />
        <div className="w-full flex justify-center items-center ">
          {state.isPending ? (
            <Skeleton className="h-80 w-52 rounded-md my-20 " />
          ) : (
            ''
          )}
        </div>
        <ContainerCards>
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
        <Banner />
        <Title
          title="Recomendados"
          subTitle="Estilos que talvez encaixe melhor no seu perfil"
        />
        <ContainerCards>
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
    </>
  );
}
