import { motion } from "framer-motion";

export default function One() {
  return (
    <div data-aos="fade-right" className="w-full my-5 flex items-center">
      <motion.div className="flex lg:flex-row flex-col duration-150 hover:shadow-lg cursor-pointer p-4 w-full lg:w-[70%] rounded-xl border border-gray-600">
      
        <div className="lg:w-[30%] hidden lg:flex w-full lg:mr-5 bg-orange-500 ">
          <img src="#" alt="" />
        </div>

        <div className="lg:w-[70%] w-full ">
          <h1 className="lg:text-6xl text-xl font-semibold lg:py-3">Talk Like a Local</h1>
          <p className="lg:text-3xl text-lg lg:py-5">
            Nimble&apos;s &ldquo;Talk Like a Local&rdquo; feature immerses you
            in authentic conversations, guiding you to sound just like a native
            speaker. Practice, learn, and have fun mastering the nuances of a
            new language effortlessly
          </p>
        </div>
      </motion.div>
    </div>
  );
}
