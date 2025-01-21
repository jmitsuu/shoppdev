import { Button } from '@/components/ui/button';
import girlBanner from '@/assets/images/banner/girl-banner.png';
export function Banner() {
  return (
    <section className="w-full h-96  flex md:flex-row flex-col items-center justify-between my-20 py-20 px-20 bg-rose-50/40">
      <div className="space-y-2">
        <h1 className="md:text-5xl text-orange-500 font-bold">
          desconto de 30%
        </h1>
        <h1 className="md:text-6xl">Coleção de verão</h1>
        <h2 className="text-slate-500 md:text-2xl">
          Aproveite a promoção do verão com descontos de 30%
        </h2>
        <Button variant="default" className="mt-10">
          Ver Oferta
        </Button>
      </div>
      <div>
        <img src={girlBanner} alt="girl-banner" className="h-96" />
      </div>
    </section>
  );
}
