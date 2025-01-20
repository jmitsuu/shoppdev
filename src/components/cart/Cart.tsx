import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import useStoreCart from '@/global/useStoreCart';
import { FaCartShopping, FaX } from 'react-icons/fa6';
export function Cart() {
  const { cart, decrCart } = useStoreCart();
  return (
    <Sheet>
      <SheetTrigger>
        {' '}
        <h3 className="flex flex-col items-center relative">
          <span className="text-xs absolute bottom-8 right-3">
            {cart.length >= 1 ? cart.length : ''}
          </span>
          <FaCartShopping />
          Carrinho
        </h3>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-8 text-2xl">Carrinho</SheetTitle>
        </SheetHeader>
        <div className="space-y-1 h-96 max-h-96 border p-1 rounded-md overflow-y-auto">
          {cart?.map((item) => {
            return (
              <div className="border min-h-14 w-full p-1 rounded-md flex items-center gap-2 relative">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-10 h-10"
                />
                <div>
                  <h1 className="text-xs">{item.title}</h1>
                  <p>{item.price}</p>
                </div>
                <FaX
                  onClick={() => decrCart(item._id)}
                  className="float-right absolute right-2 cursor-pointer hover:text-red-500"
                />
              </div>
            );
          })}
        </div>
        <SheetDescription>
          {cart.length >= 1
            ? `${cart?.length} items adicionado ao carrinho`
            : 'Nenhum item adicionado ao carrinho'}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
