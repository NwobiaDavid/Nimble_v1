import Form from "../micro/Form";


export default function Contact() {
  return (
    <div id="contact" data-aos="fade-up" className="flex flex-col lg:h-[300px] font-nunito items-center text-center justify-center">
      <div className="bg-orange-500 rounded-3xl w-full lg:w-[70%] h-[80%] flex flex-col items-center justify-center ">
        <div className="pb-0 lg:pb-5">
          <h2 className=" text-xl lg:text-4xl p-2 font-semibold">Sign up to be the first person to get notified once the app is released</h2>
          <p className="text-lg lg:text-xl opacity-80 font-bold">coming soon...</p>
        </div>
        <div className="w-full ">
          <Form />
        </div>
      </div>
    </div>
  )
}
