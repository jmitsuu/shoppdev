import { PiTeaBagFill } from 'react-icons/pi';
import { GiClothes } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { getTokenAdmin } from '@/utils/getlocalstorage';
export function ModelHeader() {
  const menuLinks = [
    {
      icon: FaHome,
      title: 'Home',
      route: '/',
    },
    {
      icon: GiClothes,
      title: 'Roupas',
      route: '/clothes/all',
    },
    {
      icon: PiTeaBagFill,
      title: 'Acessórios',
      route: '/accessories',
    },
  ];
  const name = getTokenAdmin.userData
    ? JSON.parse(getTokenAdmin.userData)
    : null;
  return {
    data: { menuLinks, name },
  };
}
