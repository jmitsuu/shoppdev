import { Tproducts } from '../../products.type';
interface CardProductProps {
  product: Tproducts;
}
export function CardProduct({ product }: CardProductProps) {
  return (
    <div className="cursor-pointer  group">
      <div className="relative transition-all ">
        <img
          src={product.image_url}
          alt={product.title}
          className="h-80 w-52 rounded-md"
        />
        <div className="absolute bottom-0 opacity-90 left-0 w-full h-20 rounded-md group-hover:bg-black flex items-center justify-center">
          <h1 className="text-orange-500 font-bold hidden group-hover:flex ">
            COMPRAR
          </h1>
        </div>
      </div>
      <h2 className="text-xs font-bold mt-5">{product.title}</h2>
      <p className="text-orange-500 text-sm mt-1">{product.price} R$</p>
    </div>
  );
}