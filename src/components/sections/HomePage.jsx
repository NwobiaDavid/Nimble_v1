import { Link } from "react-scroll";
import {motion} from 'framer-motion'
import bg_img from '../../assets/discussion-lineal-colored-91bda.svg'


export default function HomePage() {
  const containerVariant = {
    hidden: {
      opacity: 0,
      y: '-5vh'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
        duration: 0.6,
        staggerChildren: 0.4
      }
    }
  }

    const childVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <div id="home" className=" mt-3 lg:h-[600px] h-[650px] " >

      <div  className="  flex flex-col lg:flex-row items-center h-full justify-center font-nunito ">

        <motion.div  variants={containerVariant} initial="hidden" animate="visible" className="lg:w-[50%] lg:pr-2">

          <motion.div variants={childVariants} className="mb-5 flex text-center lg:text-left justify-center flex-col">
            <h2 className="lg:text-8xl text-4xl mb-2 font-semibold" >Learn a Language <span className="text-orange-500 font-bold ">2x Faster</span> with Generative AI</h2>
            <p className="lg:text-xl text-base opacity-70">Nimble is your Personal Language Tutor that&apos;s with you 24/7, teaches you a Language Faster to a state of Proficiency with less Time and Cost <span className="text-orange-500 cursor-pointer">learn more</span> </p>
          </motion.div>

          <motion.div variants={childVariants} className="flex flex-col lg:flex-row items-center">
            <Link to="/contact" className="lg:w-[20%] w-full " >
            <button className=" w-full duration-200 font-semibold py-2 border-2  justify-self-center border-black rounded-lg hover:border-transparent hover:bg-black hover:text-white">Sign up</button>
            </Link>
            <p className="text-sm leading-4 lg:leading-none lg:text-left text-center lg:ml-5 font-semibold lg:font-bold opacity-40 ">
            Practicing with a native speaker like &ldquo;Nimble&rdquo; enables people to learn a new language 2x faster <br /> due to instant feedback, authentic input, and cultural immersion.</p>
          </motion.div>
      
          </motion.div>

        <div className="lg:w-[40%]  flex justify-center h-full">
        <img className="max-w-full max-h-full " src={bg_img} alt="" />
        </div>

      </div>


      <div className="h-[400px] mt-5 flex justify-center  ">
      <motion.div
        className="w-4 h-4 bg-orange-500 rounded-full mt-4"
        initial={{ y: '-20px' }} 
        animate={{ y: 0 }} 
        transition={{
          type: 'spring',
          repeat: Infinity, 
          repeatType: 'reverse'
        }}
      ></motion.div>
      <motion.div
        className="w-4 ml-2 h-4 bg-blue-500 rounded-full mt-4"
        initial={{ y: '-20px' }} 
        animate={{ y: 0 }} 
        transition={{
          type: 'spring',
          repeat: Infinity, 
          delay: 0.2,
          repeatType: 'reverse'
        }}
      ></motion.div>
      </div>
    </div>
  )
}
