import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Header } from './components/header/header';
import { ShoppRoutes } from './routes/router';
import { Footer } from './components/footer/footer';
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <ShoppRoutes />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
