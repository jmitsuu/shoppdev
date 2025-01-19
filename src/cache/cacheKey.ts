import { create } from 'domain';

export const cacheKey = {
  products: {
    create: 'createProduct',
    list: 'listProduct',
    delete: 'deleteProduct',
  },
};
