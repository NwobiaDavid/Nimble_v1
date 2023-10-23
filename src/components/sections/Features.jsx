import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import img_one from '../../assets/question-flat-103e9.svg'
import img_two from '../../assets/connections-lineal-colored.svg'
import img_three from '../../assets/puzzle-flat-f3053.svg'

export default function Features() {
  const featuresVar = {
    hidden: {
      opacity: 0,
      y: '-10vh'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        delay: 0.3,
        staggerChildren: 0.4
      }
    }
  };

  const childrenVar = {
    hidden: {
      opacity: 0,
      y: '-10vh'
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const features = [
    {
      image: img_one,
      header: 'Do you hate limited speaking practice in language apps?',
      text: 'Nimble delivers immersive, real-time conversations that focus on speaking and pronunciation. Unlike other platforms, Nimble offers extensive speaking exercises, ensuring confident communication in your target language. Experience interactive learning where you talk, listen, and truly communicate, enhancing your language skills effectively.',
    },
    {
      image: img_two,
      header:
        'Do you find the lack of cultural context frustrating in language learning apps?',
      text: 'Say goodbye to cultural confusion with Nimble! Our interactive lessons provide cultural insights, guiding you to understand not just the language, but also customs, idioms, and social nuances. Nimble ensures authentic, meaningful conversations by immersing you in the language and culture, connecting you effortlessly with native speakers',
    },
    {
      image: img_three,
      header:
        'Tired of translation exercises without proper explanations in language apps?',
      text: 'Nimble prioritizes understanding over translation. We offer clear explanations for grammar, vocabulary, and language constructs, empowering confident application. With personalized tutoring, grasp language intricacies and communicate effectively, making learning with Nimble a transformative experience.',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const featuresRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="problems" ref={featuresRef} className="lg:h-[300px] font-nunito mt-16 py-8 flex justify-center items-center">
      <motion.ul
        variants={featuresVar}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around"
      >
        {features.map((item) => (
          <motion.div whileHover={{scale: 1.05}} variants={childrenVar} key={item.header} className="flex cursor-pointer py-5 px-3 shadow-lg rounded-lg">
            <div className="flex flex-col text-center lg:text-left ">
              <div className="flex lg:flex-row flex-col justify-between lg:h-[40%] ">
                <div className='lg:w-[20%] w-[50%] h-[100%] flex justify-center items-center lg:mr-1'><img className="w-full p-4 object-cover h-full " src={item.image} alt={item.header} /></div>
                <h2 className=" text-xl lg:text-2xl lg:w-[80%] py-2 font-bold">{item.header}</h2>
              </div>
              
                <p className="text-lg opacity-90">{item.text}</p>
            </div>
            
          </motion.div>
        ))}
      </motion.ul>
    </div>
  );
}
