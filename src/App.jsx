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

function App() {
  return (
    <>
      <div>
      <NavBar />
       <div className="px-10 py-20">
         <HomePage />
         <Features />
         <One/>
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
