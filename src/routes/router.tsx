// src/App.tsx
import { HomePage } from '@/pages/products/home/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export function ShoppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
