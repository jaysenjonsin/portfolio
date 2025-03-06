import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
export default function Home() {
  //site inspos: https://deadsimplesites.com/
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
