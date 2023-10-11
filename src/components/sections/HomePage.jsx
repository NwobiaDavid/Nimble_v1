import { Link } from "react-scroll";


export default function HomePage() {
  return (
    <div id="home" className=" mt-3 flex items-center justify-center font-nunito h-[600px] ">
      <div className="w-[50%] pr-2">
        <div className="mb-10 flex text-left justify-center flex-col">
          {/* <h2 className="text-7xl mb-2 font-semibold ">Introducing <span className="text-orange-500 font-bold">Nimble</span><br/><span className="text-7xl">Your Personal AI Companion</span> </h2>
          <p className="text-lg opacity-70">Simplify Your Life with Nimble</p> */}
          <h2 className="text-8xl  mb-2 font-semibold" >Learn a Language <span className="text-orange-500 font-bold ">2x Faster</span> with Generative AI</h2>
          <p className="text-xl opacity-70">Nimble is your Personal Language Tutor that&apos;s with you 24/7, teaches you a Language Faster to a state of Proficiency with less Time and Cost</p>
        </div>
        <Link to="/contact" href="#" className="py-2 px-6 border-2 border-black rounded-lg hover:border-transparent hover:bg-black hover:text-white">Sign up</Link>
      </div>
      <div className="w-[50%] bg-orange-600 h-full">

      </div>
    </div>
  )
}
