//solutions nimble is providing

export default function Features() {
//   const solutions = [
//     {
//       image: 'https://ssss.com',
//       header: 'Talk Like a Local',
//       text: 'Nimbles "Talk Like a Local" feature immerses you in authentic conversations, guiding you to sound just like a native speaker. Practice, learn, and have fun mastering the nuances of a new language effortlessly',
//     },
//     {
//       image: 'https://ssss.com',
//       header: 'Level-Up Language Quests',
//       text: 'Nimbles "Level-Up Language Quests" turn learning into an epic adventure. Achieve goals, earn rewards, and progress through challenging quests, making language learning a fun and rewarding experience',
//     },
//     {
//       image: 'https://ssss.com',
//       header: 'Personalized Chat Coach',
//       text: 'Nimbles "Personalized Chat Coach" feature keeps track of your progress and tailors lessons to your unique needs. Its like having a personal language tutor who knows your strengths and challenges, guiding you toward fluency with personalized exercises and encouragement',
//     },
//   ];

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
    <div className="h-[300px] font-nunito mt-10 py-8 flex justify-center items-center ">
      <ul className="w-full grid gap-6 grid-cols-3 justify-around">
        {features.map((item) => (
          <li key={item.header} className="flex py-5 px-3 shadow-lg rounded-lg">
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
          </li>
        ))}
      </ul>
    </div>
  );
}
