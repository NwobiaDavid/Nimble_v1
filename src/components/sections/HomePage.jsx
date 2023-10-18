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
    <div id="home" className=" mt-3 h-[600px]  " >
      <div  className="  flex items-center h-full justify-center font-nunito ">

        <motion.div  variants={containerVariant} initial="hidden" animate="visible" className="w-[50%] pr-2">

          <motion.div variants={childVariants} className="mb-5 flex text-left justify-center flex-col">
            <h2 className="text-8xl  mb-2 font-semibold" >Learn a Language <span className="text-orange-500 font-bold ">2x Faster</span> with Generative AI</h2>
            <p className="text-xl opacity-70">Nimble is your Personal Language Tutor that&apos;s with you 24/7, teaches you a Language Faster to a state of Proficiency with less Time and Cost <span className="text-orange-500 cursor-pointer">learn more</span> </p>
          </motion.div>

          <motion.div variants={childVariants} className="flex items-center">
            <Link to="/contact" className="w-[20%]" >
            <button className=" w-full duration-200 font-semibold py-2 border-2 border-black rounded-lg hover:border-transparent hover:bg-black hover:text-white">Sign up</button>
            </Link>
            <p className="text-sm ml-5 font-bold opacity-40 ">
            Practicing with a native speaker like &ldquo;Nimble&rdquo; enables people to learn a new language 2x faster due to <br /> instant feedback, authentic input, and cultural immersion.</p>
          </motion.div>
      
          </motion.div>
        <div className="w-[40%] flex justify-center h-full">
        <img className="max-w-full max-h-full " src={bg_img} alt="" />
        </div>
      </div>
      <div className="h-[400px] flex justify-center  ">
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
