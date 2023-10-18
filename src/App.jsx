import './index.css';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import HomePage from './components/sections/HomePage';
import NavBar from './components/sections/NavBar';
import PageFour from './components/sections/PageFour';
import PageThree from './components/sections/PageThree';
import PageTwo from './components/sections/PageTwo';
import Features from './components/sections/Features';
import One from './components/sections/solutions/One';
import Two from './components/sections/solutions/Two';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Three from './components/sections/solutions/Three';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div>
        <NavBar />
        <div className="px-10 py-20">
          <HomePage />
          <Features />
          <div className="h-[1200px] py-10 pt-16 flex flex-col items-center justify-evenly">
          <div className='text-2xl mt-20 mb-3 w-[20%] border rounded-xl border-black uppercase p-3 font-bold text-center font-nunito '>nimble&rsquo;s features</div>
            <One /> <Two /> <Three />
          </div>
          <div data-aos="fade-up">
            <PageTwo />
          </div>
          <PageThree />
          <PageFour />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
