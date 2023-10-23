import './index.css';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import HomePage from './components/sections/HomePage';
import NavBar from './components/sections/NavBar';
import Features from './components/sections/Features';
import One from './components/sections/solutions/One';
import Two from './components/sections/solutions/Two';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Three from './components/sections/solutions/Three';
import Faq from './components/sections/Faq';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div>
        <NavBar />
        <div className="lg:px-10 px-5 py-20">
          <HomePage />
          <Features />
          <div className="h-[1350px] py-10 pt-16 flex flex-col items-center overflow-hidden justify-evenly">
          <div data-aos="fade-up" id='solutions' className='lg:text-2xl text-xl mt-20 mb-3 w-[90%] lg:w-[20%] border rounded-xl border-black uppercase p-3 font-bold text-center font-nunito '>nimble&rsquo;s features</div>
            <One /> 
            <Two />
             <Three />
          </div>
          <Faq />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
