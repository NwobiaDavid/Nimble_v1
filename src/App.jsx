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

function App() {
  return (
    <>
      <div>
      <NavBar />
       <div className="px-10 py-20">
         <HomePage />
         <Features />
         <div className='h-[1080px] py-10 flex flex-col justify-evenly'><One/> <Two/> </div>
         <PageTwo />
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
