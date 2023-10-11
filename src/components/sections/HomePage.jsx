import { Link } from "react-scroll";


export default function HomePage() {
  return (
    <div id="home" className=" mt-3 h-[600px] " >
      <div  className="  flex items-center h-full justify-center font-nunito ">
        <div className="w-[50%] pr-2">
          <div className="mb-5 flex text-left justify-center flex-col">
            {/* <h2 className="text-7xl mb-2 font-semibold ">Introducing <span className="text-orange-500 font-bold">Nimble</span><br/><span className="text-7xl">Your Personal AI Companion</span> </h2>
            <p className="text-lg opacity-70">Simplify Your Life with Nimble</p> */}
            <h2 className="text-8xl  mb-2 font-semibold" >Learn a Language <span className="text-orange-500 font-bold ">2x Faster</span> with Generative AI</h2>
            <p className="text-xl opacity-70">Nimble is your Personal Language Tutor that&apos;s with you 24/7, teaches you a Language Faster to a state of Proficiency with less Time and Cost <span className="text-orange-500 ">learn more</span> </p>
          </div>
          <div className="flex items-center">
            <Link to="/contact" className="w-[20%]" >
            <button className=" w-full duration-200 font-semibold py-2 border-2 border-black rounded-lg hover:border-transparent hover:bg-black hover:text-white">Sign up</button>
            </Link>
            <p className="text-sm ml-5 font-bold opacity-40 ">
            Practicing with a native speaker like &ldquo;Nimble&rdquo; enables people to learn a new language 2x faster due to <br /> instant feedback, authentic input, and cultural immersion.</p>
          </div>
      
          </div>
        <div className="w-[50%] bg-orange-600 h-full">
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
