import useStoreCart from '@/global/useStoreCart';
import { Tproducts } from '../../pages/products.type';
interface CardProductProps {
  product: Tproducts;
  itemProduct: Tproducts;
}
const API_URL = import.meta.env.VITE_API_URL;
export function CardProduct({ product, itemProduct }: CardProductProps) {
  const { incCart } = useStoreCart();

  return (
    <div className="cursor-pointer group relative  w-56 ">
      <div className="relative transition-all">
        {product.path_image ? (
          <img
            src={`${API_URL + product.path_image}`}
            alt={product.title}
            className="h-72 w-52 rounded-sm"
          />
        ) : (
          <div className="h-72 w-56  bg-gray-200 rounded-sm flex items-center justify-center">
            <p>Carregando...</p>
          </div>
        )}
        <div
          onClick={() => incCart(itemProduct)}
          className="absolute w-full bottom-0 opacity-90 left-0 min-w-52 h-10 rounded-md md:bg-transparent bg-black group-hover:bg-black flex items-center justify-center"
        >
          <h1 className="text-orange-500 font-bold md:hidden md:group-hover:flex hover:text-orange-600 hover:underline">
            Adicionar ao carrinho
          </h1>
        </div>
      </div>
      <h2 className="text-xs font-bold mt-5">{product.title}</h2>
      <p className="text-orange-500 text-sm mt-1">{product.price} R$</p>
    </div>
  );
}
