import { Button } from '@/components/ui/button';
import girl from '@/assets/images/hero/girl.png';
import girl2 from '@/assets/images/hero/girl2.png';
export function Hero() {
  return (
    <section className="w-full min-h-[500px] my-20 overflow-hidden ">
      <div className="w-full container mx-auto flex md:flex-row flex-col items-center justify-between">
        <div className="lg:w-[800px] md:w-[400xl] sm:w-[300px] space-y-4">
          <h1 className="lg:text-[8rem] md:text-6xl sm:text-4xl text-2xl font-bold">
            A moda para todas as estações
          </h1>
          <h2 className="text-orange-600 text-2xl font-bold">MUDE!</h2>
          <h3 className="text-slate-600 text-2xl">
            Estilo para todos os gostos, faça seu próprio estilo.
          </h3>
          <Button variant="default" className="mt-10">
            Shopp Now
          </Button>
        </div>
        <div className="flex relative ">
          <img
            src={girl}
            alt="image-hero"
            className="max-h-[500px] md:ml-40 rounded-full"
          />
          <img
            src={girl2}
            alt="image2-hero"
            className="max-h-[500px] md:ml-40 absolute right-40 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
