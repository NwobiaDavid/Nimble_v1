import { motion } from 'framer-motion';

export default function Two() {
  return (
    <div data-aos="fade-left" className="w-full my-5 flex justify-end items-center">
      <motion.div className="flex flex-col lg:flex-row duration-100 p-4 w-full lg:w-[70%] cursor-pointer rounded-xl hover:shadow-xl border border-gray-600">
        
        <div className="lg:w-[70%] w-full text-right">
          <h1 className="lg:text-6xl text-xl font-semibold lg:py-3">
            Level-Up Language Quests
          </h1>
          <p className="lg:text-3xl text-lg lg:py-5">
            Nimbles &ldquo;Level-Up Language Quests&rdquo; turn learning into an epic
            adventure. Achieve goals, earn rewards, and progress through
            challenging quests, making language learning a fun and rewarding
            experience
          </p>
        </div>

        <div className="lg:w-[30%] w-full hidden lg:flex lg:ml-5 bg-orange-500 ">
          <img src="#" alt="" />
        </div>

      </motion.div>
    </div>
  );
}
