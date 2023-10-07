

export default function HomePage() {
  return (
    <div id="home" className="bg-orange-600 mt-3 text-white flex items-center flex-col justify-center h-[600px] ">
      <div className="mb-10 flex items-center justify-center flex-col">
        <h2 className="text-5xl mb-2 font-semibold text-center">Introducing Nimble:<br/>Your Personal AI Companion</h2>
        <p className="text-lg opacity-70">Simplify Your Life with Nimble</p>
      </div>
      <a href="#" className="py-2 px-6 border-2 border-white rounded-lg hover:border-transparent hover:bg-black hover:text-white">Lean More </a>
    </div>
  )
}
