import { motion } from 'framer-motion';

export default function Two() {
  return (
    <div className="w-full my-5 flex justify-end items-center">
      <motion.div className="flex duration-100 p-4 w-[70%] cursor-pointer rounded-xl hover:shadow-xl border border-gray-600">
        <div className="w-[70%] text-right">
          <h1 className="text-6xl font-semibold py-3">
            Level-Up Language Quests
          </h1>
          <p className="text-3xl py-5">
            Nimbles &ldquo;Level-Up Language Quests&rdquo; turn learning into an epic
            adventure. Achieve goals, earn rewards, and progress through
            challenging quests, making language learning a fun and rewarding
            experience
          </p>
        </div>

        <div className="w-[30%] ml-5 bg-orange-500 ">
          <img src="#" alt="" />
        </div>
      </motion.div>
    </div>
  );
}
