import { motion } from "framer-motion";

export default function One() {
  return (
    <div className="w-full my-5 flex items-center">
      <motion.div className="flex duration-150 hover:shadow-lg cursor-pointer p-4 w-[70%] rounded-xl border border-gray-600">
      
        <div className="w-[30%] mr-5 bg-orange-500 ">
          <img src="#" alt="" />
        </div>

        <div className="w-[70%] ">
          <h1 className="text-6xl font-semibold py-3">Talk Like a Local</h1>
          <p className="text-3xl py-5">
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
