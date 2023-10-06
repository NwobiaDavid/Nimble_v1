
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import HomePage from './components/sections/HomePage';
import NavBar from './components/sections/NavBar';
import PageFour from './components/sections/PageFour';
import PageThree from './components/sections/PageThree';
import PageTwo from './components/sections/PageTwo';

function App() {
  return (
    <>
      <div>
      <NavBar />
       <div className="px-10">
         <HomePage />
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
