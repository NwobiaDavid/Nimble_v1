//solutions nimble is providing
import {motion} from 'framer-motion'

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
        type: "spring",
        delay: 0.5,
        staggerChildren: 0.4
      }
    }
  }

  const childrenVar = {
    hidden: {
      opacity: 0,
      y: '-10vh'
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  const features = [
    {
      image: '',
      header: 'Do you hate limited speaking practice in language apps?',
      text: 'Nimble delivers immersive, real-time conversations that focus on speaking and pronunciation. Unlike other platforms, Nimble offers extensive speaking exercises, ensuring confident communication in your target language. Experience interactive learning where you talk, listen, and truly communicate, enhancing your language skills effectively.',
    },
    {
      image: '',
      header:
        'Do you find the lack of cultural context frustrating in language learning apps?',
      text: 'Say goodbye to cultural confusion with Nimble! Our interactive lessons provide cultural insights, guiding you to understand not just the language, but also customs, idioms, and social nuances. Nimble ensures authentic, meaningful conversations by immersing you in the language and culture, connecting you effortlessly with native speakers',
    },
    {
      image: '',
      header:
        'Tired of translation exercises without proper explanations in language apps?',
      text: 'Nimble prioritizes understanding over translation. We offer clear explanations for grammar, vocabulary, and language constructs, empowering confident application. With personalized tutoring, grasp language intricacies and communicate effectively, making learning with Nimble a transformative experience.',
    },
  ];
  return (
    <div className="h-[300px] font-nunito mt-16 py-8 flex justify-center items-center ">
      <motion.ul variants={featuresVar} initial="hidden" animate="visible" className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around">
        {features.map((item) => (

          <motion.div variants={childrenVar} key={item.header} className="flex cursor-pointer py-5 px-3 shadow-lg rounded-lg">
            <div className="pr-1">
              <img
                className="w-[50px] bg-orange-500 h-[50px] "
                src={item.image}
                alt={item.header}
              />
            </div>
            <div>
              <h2 className="text-2xl py-2 font-bold ">{item.header}</h2>
              <p className="text-xl opacity-90 ">{item.text}</p>
            </div>
          </motion.div>

        ))}
      </motion.ul>
    </div>
  );
}
