import { Container } from '@/pages/layouts/container';
import { useModelInfoProduct } from './model.infoproduct';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import useStoreCart from '@/global/useStoreCart';
const API_URL = import.meta.env.VITE_API_URL;
export function InfoProduct() {
  const { data, state } = useModelInfoProduct();
  const { incCart } = useStoreCart();
  return (
    <section>
      <Container>
        {state.isPending ? (
          <div className=" flex justify-center items-center">
            <div className="border rounded-sm min-h-96 w-[600px] flex md:flex-row flex-col p-2 space-x-5">
              <Skeleton className="w-[255px]" />
              <div className="space-y-2">
                <Skeleton className="w-80 h-8 bg-gray-200" />
                <Skeleton className="w-44 h-6 bg-gray-100" />
                <Skeleton className="w-44 h-6 bg-gray-100" />
              </div>
            </div>
          </div>
        ) : (
          <div className=" flex justify-center items-center">
            <div className="min-h-96 w-[600px] flex md:flex-row flex-col  p-2 space-x-5">
              {state.isPending ? <Skeleton className="w-[255px]" /> : ''}

              <img
                className="h-96 w-64 rounded-sm mx-auto"
                src={`${API_URL}${data.findProduct?.path_image}`}
              />
              <div className="relative md:min-h-full min-h-60 flex flex-col items-center">
                <h1 className="text-xl font-light text-gray-600 ">
                  {data.findProduct?.title}
                </h1>
                <span className="text-slate-400 text-xs">
                  codigo: {data.findProduct?._id}
                </span>
                <p className=" text-xs my-2 ">
                  {data.findProduct?.description}
                </p>
                <h2 className="font-bold">R$: {data.findProduct?.price}</h2>
                <h2 className="text-sm text-gray-600">
                  7x de R$ {Number(data.findProduct?.price / 7).toFixed(2)}
                </h2>
                <Button
                  onClick={() => {
                    incCart(data.findProduct);
                  }}
                  className="absolute bottom-0 bg-orange-600 hover:bg-orange-700 w-full uppercase"
                >
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
