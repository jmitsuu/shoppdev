// src/App.tsx
import { Auth } from '@/pages/auth/auth';
import { SignIn } from '@/pages/auth/signin/signIn';
import { SignUp } from '@/pages/auth/signup/signUp';
import { PageErrorAuth } from '@/pages/layouts/pageErrorAuth';
import { PageErrorShopp } from '@/pages/layouts/PageErrorShopp';
import { CompleteFashion } from '@/pages/products/completefashion/completeFashion';
import { HomePage } from '@/pages/products/home/homepage';
import { Route, Routes } from 'react-router-dom';

export function ShoppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/completefashion" element={<CompleteFashion />} />
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
