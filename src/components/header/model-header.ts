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
      route: '/men',
    },
    {
      title: 'Mulheres',
      route: '/women',
    },
  ];
  return {
    data: { menuLinks },
  };
}
