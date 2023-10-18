import { motion } from 'framer-motion';

export default function Three() {
  return (
    <div data-aos="fade-right" className="w-full my-5 flex items-center">
      <motion.div className="flex duration-150 hover:shadow-lg cursor-pointer p-4 w-[70%] rounded-xl border border-gray-600">
        <div className="w-[30%] mr-5 bg-orange-500 ">
          <img src="#" alt="" />
        </div>

        <div className="w-[70%] ">
          <h1 className="text-6xl font-semibold py-3">
            Personalized Chat Coach
          </h1>
          <p className="text-3xl py-5">
            Nimbles &rdquo;Personalized Chat Coach&ldquo; feature keeps track of your
            progress and tailors lessons to your unique needs. Its like having a
            personal language tutor who knows your strengths and challenges,
            guiding you toward fluency with personalized exercises and
            encouragement
          </p>
        </div>
      </motion.div>
    </div>
  );
}
