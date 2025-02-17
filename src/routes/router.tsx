// src/App.tsx
import { Auth } from '@/pages/auth/auth';
import { SignIn } from '@/pages/auth/signin/signIn';
import { SignUp } from '@/pages/auth/signup/signUp';
import { PageErrorAuth } from '@/pages/layouts/pageErrorAuth';
import { PageErrorShopp } from '@/pages/layouts/PageErrorShopp';
import { HomePage } from '@/pages/products/home/homepage';
import { Route, Routes } from 'react-router-dom';
import { useModelAdminAuth } from '@/pages/products/admin/model.admin';
import { Unauthorized } from '@/pages/layouts/unauthorized';
import { GenderProducts } from '@/pages/products/clothes/male&female/gendersproducts';
import { Clothes } from '@/pages/products/clothes/clothes';
import { lazy, Suspense } from 'react';
import { LoadingSuspense } from '@/pages/layouts/LoadingSuspense';

export function ShoppRoutes() {
  const { data } = useModelAdminAuth();
  const InfoProduct = lazy(
    () => import('@/pages/products/product/infoProduct')
  );
  const AllClothes = lazy(
    () => import('@/pages/products/clothes/all/allclothes')
  );
  const CheckOut = lazy(() => import('@/pages/products/checkout/checkout'));
  const ProductManagement = lazy(
    () => import('@/pages/products/admin/product-management/productmanagement')
  );
  const Dashboard = lazy(
    () => import('@/pages/products/admin/dashboard/dashboard')
  );
  return (
    <Suspense fallback={<LoadingSuspense />}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/clothes/all" element={<Clothes />}>
          <Route index element={<AllClothes />} />
          <Route path="clothes" element={<GenderProducts />} />
        </Route>
        <Route path="/product/:id" element={<InfoProduct />} />
        <Route path="/checkout" element={<CheckOut />} />

        <Route path="/auth" element={<Auth />}>
          <Route index element={<SignIn />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<PageErrorAuth />} />
        </Route>
        {data.userAdmin?.status === 200 ? (
          <Route path="/productmanagement" element={<ProductManagement />} />
        ) : (
          <Route path="/productmanagement" element={<Unauthorized />} />
        )}

        {data.userAdmin?.status === 200 ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/dashboard" element={<Unauthorized />} />
        )}
        <Route path="*" element={<PageErrorShopp />} />
      </Routes>
    </Suspense>
  );
}
