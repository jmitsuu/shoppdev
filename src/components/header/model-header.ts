export function ModelHeader() {
  const menuLinks = [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'Roupas',
      route: '/clothes/all',
    },
    {
      title: 'Acessórios',
      route: '/accessories',
    },
    // {
    //   title: 'Homens',
    //   route: '/clothes?gender=male',
    // },
    // {
    //   title: 'Mulheres',
    //   route: '?gender=female',
    // },
  ];
  return {
    data: { menuLinks },
  };
}
