import icon from '@/assets/images/icon/shirt.png';
import { FaCartShopping, FaMagnifyingGlass } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { ModelHeader } from './model-header';
export function Header() {
  const { data } = ModelHeader();
  return (
    <header className="w-screen h-20 border-b mx-auto container flex items-center justify-between">
      <div className="flex items-center  uppercase">
        <img src={icon} className="h-8" />
        <h1 className="ml-2 font-extrabold text-3xl underline">
          Shopp <span className="text-orange-600">Dev</span>
        </h1>
      </div>
      <nav className="flex items-center h-full">
        <ul className="gap-x-8 flex items-center ">
          {data.menuLinks.map((menu) => {
            return (
              <li key={menu.title} className="cursor-pointer  text-gray-500">
                {menu.title}
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="flex items-center gap-x-4">
        <li className="flex flex-col items-center cursor-pointer text-gray-600">
          <FaMagnifyingGlass />
          <h3>Pesquisar</h3>
        </li>
        <li className="flex flex-col items-center cursor-pointer text-gray-600">
          <IoPerson />
          <h3>Entrar</h3>
        </li>
        <li className="flex flex-col items-center cursor-pointer text-gray-600">
          <FaCartShopping />
          <h3>Carrinho</h3>
        </li>
      </ul>
    </header>
  );
}
