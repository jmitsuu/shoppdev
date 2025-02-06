// src/App.tsx
import { Dashboard } from '@/pages/admin/dashboard/dashboard';
import { ProductManagement } from '@/pages/admin/product-management/productmanagement';
import { Auth } from '@/pages/auth/auth';
import { SignIn } from '@/pages/auth/signin/signIn';
import { SignUp } from '@/pages/auth/signup/signUp';
import { PageErrorAuth } from '@/pages/layouts/pageErrorAuth';
import { PageErrorShopp } from '@/pages/layouts/PageErrorShopp';
import { CompleteFashion } from '@/pages/completefashion/completeFashion';
import { HomePage } from '@/pages/home/homepage';
import { Route, Routes } from 'react-router-dom';
import { useModelAdminAuth } from '@/pages/admin/model.admin';
import { Unauthorized } from '@/pages/layouts/unauthorized';
import { GenderProducts } from '@/pages/allgenders/gendersproducts';

export function ShoppRoutes() {
  const { data } = useModelAdminAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/completefashion" element={<CompleteFashion />} />
      <Route path="/clothes" element={<GenderProducts />} />

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
      <Route path="/auth" element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<PageErrorAuth />} />
      </Route>
      <Route path="*" element={<PageErrorShopp />} />
    </Routes>
  );
}
