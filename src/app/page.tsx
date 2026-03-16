import {Hero} from "@/features/home/components/Hero/Hero";
import {Header} from "@/shared/components/Header/Header";
import {HomeContainer} from "@/features/home/HomeContainer";
import {Footer} from "@/shared/components/Footer/Footer";


export default function Home() {
  return (
      <main>
          <Header isHome={true}/>
          <HomeContainer/>
          <Footer/>
      </main>
  );
}