import {Hero} from "@/features/home/components/Hero/Hero";
import {Header} from "@/shared/components/Header/Header";


export default function Home() {
  return (
      <main>
          <Header/>
          <Hero/>
        {/* Espacio para probar el scroll y el cambio de color del header */}
        <section className="h-screen bg-slate-50 flex items-center justify-center">
          <h2 className="text-3xl font-light text-gray-400">Contenido Adicional</h2>
        </section>
      </main>
  );
}