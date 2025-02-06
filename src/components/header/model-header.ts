export function ModelHeader() {
  const menuLinks = [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'Moda Completa',
      route: '/completefashion',
    },
    {
      title: 'Homens',
      route: '/clothes?gender=male',
    },
    {
      title: 'Mulheres',
      route: '?gender=female',
    },
    // {
    //   title: 'Gerenciamento',
    //   route: '/productmanagement',
    // },
    // {
    //   title: 'Dashboard',
    //   route: '/dashboard',
    // },
  ];
  return {
    data: { menuLinks },
  };
}
