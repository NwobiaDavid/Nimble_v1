export default function PageThree() {
  return (
    <div className="flex flex-col items-center justify-center h-[720px]  ">
      <div className="flex p-3 mb-16 border border-black w-[23%] items-center justify-center rounded-md text-3xl font-semibold ">
        <h2>What does Nimble do?</h2>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 text-lg gap-8">
        <div className="border-2 border-black h-[260px] flex flex-col  justify-center text-white rounded-2xl p-3 text-center bg-orange-500">
          <h2 className="text-5xl font-semibold px-3 pb-5">
            Effortless <br /> Scheduling
          </h2>
          <p>
            Let Nimble take care of your schedule, adapting to your habits and
            preferences effortlessly.
          </p>
        </div>

        <div className=" h-[260px] flex flex-col  justify-center text-center rounded-2xl p-3 ">
          <h2 className="text-5xl font-semibold px-3 pb-5">
            Streamlined Communication
          </h2>
          <p>
            Manage emails, social media, and content creation seamlessly with
            Nimble.
          </p>
        </div>

        <div className=" h-[260px] flex flex-col  justify-center text-center rounded-2xl p-3 ">
          <h2 className="text-5xl font-semibold px-3 pb-5">
            Personalized
            <br />
            Tracking
          </h2>
          <p>
            Monitor your diet, workouts, and sleep patterns effortlessly with
            Nimble&apos;s tracking capabilities
          </p>
        </div>

        <div className="border-2 border-black h-[260px] flex flex-col  justify-center rounded-2xl p-3 text-center">
          <h2 className="text-5xl font-semibold px-3 pb-5">
            Language Learning Support
          </h2>
          <p>
            Practice languages with Nimble acting as your friendly learning
            partner
          </p>
        </div>

        <div className="border-2 border-black h-[260px] flex flex-col  justify-center rounded-2xl p-3 bg-black text-white text-center">
          <h2 className="text-5xl font-semibold px-3 pb-5">
          Efficient Memory Recall
          </h2>
          <p>
          Retrieve past conversations and quotes for natural, engaging interactions
          </p>
        </div>


      </div>
    </div>
  );
}
