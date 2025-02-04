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
      route: '/male',
    },
    {
      title: 'Mulheres',
      route: '/female',
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
