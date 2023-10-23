import { motion } from 'framer-motion';

export default function Three() {
  return (
    <div data-aos="fade-right" className="w-full my-5 flex items-center">
      <motion.div className="flex lg:flex-row flex-col duration-150 hover:shadow-lg cursor-pointer p-4 lg:w-[70%] rounded-xl border border-gray-600">
        
        <div className="lg:w-[30%]  hidden lg:flex w-full lg:mr-5 bg-orange-500 ">
          <img src="#" alt="" />
        </div>

        <div className="lg:w-[70%] w-full ">
          <h1 className="lg:text-6xl text-xl font-semibold lg:py-3">
            Personalized Chat Coach
          </h1>
          <p className="lg:text-3xl text-lg lg:py-5">
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
