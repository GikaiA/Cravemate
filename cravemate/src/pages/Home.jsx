import MoodPicker from "./components/MoodPicker";

function Home() {
  return (
    <div className="max-h-screen block  justify-center items-center">
      <h1 className="text-2xl font-bold">How are you feeling today?</h1>
      <MoodPicker/>
      {/* <div className="grid grid-cols-2 gap-4">
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Happy</button>
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Sad</button>
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">
          Excited
        </button>
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Angry</button>
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Romantic</button>
      </div> */}
      <div className="how-it-works mt-8">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="text-body text-xl">
          Select your current mood and discover content tailored to how you're feeling.
        </p>
        <div className="flex justify-around items-center">
          <div className="block text-center">
            <h3 className="text-body">
             1
            </h3>
            <p>This is Step 1</p>
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="block text-center">
              <h3 className="text-body">
               2
              </h3>
              <p>This is Step 2</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="block text-center">
              <h3 className="text-body">
               3
              </h3>
              <p>This is Step 3</p>
            </div>
          </div>
        </div>
        <p>this is the next section</p>
      </div>
    </div>
  );
}

export default Home;
