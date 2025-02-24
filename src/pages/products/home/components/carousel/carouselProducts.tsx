import { CardProduct } from '@/components/card-product/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Tproducts } from '@/pages/products/products.type';
import { useRef } from 'react';
interface IProduct {
  ArrProducts: Tproducts[];
}
export function CarouselProducts({ ArrProducts }: IProduct) {
  const plugin = useRef(Autoplay({ delay: 3800, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseLeave={plugin.current.reset}
      className="md:w-full max-w-[1000px] w-60 "
      opts={{ loop: true, align: 'center' }}
    >
      <CarouselContent>
        {ArrProducts?.map((product: Tproducts) => {
          return (
            <CarouselItem className="md:basis-1/3" key={product._id}>
              <div className="flex items-center justify-center">
                <CardProduct
                  itemProduct={product}
                  product={product}
                  key={product._id}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
