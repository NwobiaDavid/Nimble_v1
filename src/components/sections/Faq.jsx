import Accordion from '../micro/Accordion';

export default function Faq() {
  const accordionItems = [
    {
      title: 'What makes Nimble different from other language learning apps?',
      content: 'Nimble stands out with its immersive, real-time conversations that prioritize speaking and pronunciation practice. Unlike other platforms, Nimble offers extensive speaking exercises, clear cultural insights, and personalized tutoring. We focus on understanding the language, not just translating, ensuring authentic and effective communication.',
    },
    {
      title: 'How does Nimble help with cultural understanding?',
      content: " Nimble's interactive lessons are infused with cultural insights, covering customs, idioms, and social nuances. By learning in the context of real-life situations, users gain a deep understanding of the language and its cultural background, enabling meaningful conversations and connections with native speakers."
    },
    {
      title: ' Is Nimble suitable for beginners?',
      content: "Absolutely! Nimble caters to learners of all levels. Our platform includes beginner-friendly lessons, engaging exercises, and personalized guidance. Whether you're starting from scratch or aiming to enhance your existing language skills, Nimble provides a supportive and tailored learning experience for all."
    },
    {
      title: 'How does Nimble ensure personalized learning?',
      content: ' Nimble offers personalized tutoring and clear, detailed explanations for grammar rules, vocabulary usage, and language constructs. We track your progress, adapting lessons to your proficiency level and learning pace. Our aim is to empower you to confidently apply your knowledge, making language learning both effective and enjoyable.'
    },
    {
      title: ' Can I practice speaking with native speakers on Nimble?',
      content: "Yes! Nimble encourages authentic conversations with native speakers. Through our immersive lessons and interactive exercises, you'll develop the confidence to communicate effectively. Nimble bridges the gap between language learners and native speakers, fostering genuine connections and enhancing your language skills.",
    },
  ];

  return (
   <div id='faqs' className='flex items-center mt-10 flex-col font-nunito '>
    <div data-aos="fade-up" className='lg:w-[20%] w-[90%] flex justify-center items-center p-3 border rounded-xl border-black'>
        <h2 className='text-2xl items-center uppercase  font-bold'>FAQ&apos;s</h2>
    </div>
    <div className="flex items-start py-6 lg:py-16 overflow-hidden justify-center h-full w-full lg:w-[70%] ">
          <Accordion items={accordionItems} />
    </div>
    </div>
  );
}
