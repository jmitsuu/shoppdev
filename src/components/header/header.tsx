import icon from '@/assets/images/icon/shirt.png';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { ModelHeader } from './model-header';
import { Cart } from '../cart/Cart';
import { Link, NavLink } from 'react-router-dom';
import { useModelAdminAuth } from '@/pages/admin/model.admin';
export function Header() {
  const { data } = ModelHeader();
  const { data: checkAdm } = useModelAdminAuth();

  return (
    <header className="  h-20">
      <div className="flex items-center justify-between h-20 px-10  w-screen fixed  mx-auto z-50 bg-white border-b">
        <div className="flex items-center  uppercase">
          <img src={icon} className="h-8" />
          <h1 className="ml-2 font-extrabold text-3xl underline">
            Dev <span className="text-orange-600">Shopp</span>
          </h1>
        </div>
        <nav className="md:flex items-center h-full hidden">
          <ul className="gap-x-8 flex items-center ">
            {data.menuLinks.map((menu) => {
              return (
                <Link
                  key={menu.title}
                  to={menu.route}
                  className="cursor-pointer  text-gray-500"
                >
                  {menu.title}
                </Link>
              );
            })}
            {checkAdm.userAdmin?.status === 200 ? (
              <>
                <Link
                  to={'/productmanagement'}
                  className="cursor-pointer  text-blue-500"
                >
                  Gerenciamento
                </Link>
                <Link
                  to={'/dashboard'}
                  className="cursor-pointer  text-blue-500"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              ''
            )}
          </ul>
        </nav>
        <ul className="md:flex hidden items-center gap-x-4">
          <li className="flex flex-col items-center cursor-pointer text-gray-600">
            <FaMagnifyingGlass />
            <h3>Pesquisar</h3>
          </li>
          <li className=" cursor-pointer text-gray-600">
            <NavLink to="/auth" className="flex flex-col items-center">
              <IoPerson />
              <h3>Entrar</h3>
            </NavLink>
          </li>
          <li className="flex flex-col items-center cursor-pointer text-gray-600">
            <Cart styleCart="" />
          </li>
        </ul>
        <div className="md:hidden">
          <Cart styleCart="" />
        </div>
      </div>
    </header>
  );
}
