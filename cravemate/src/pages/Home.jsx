function Home() {
  return (
    <div className="min-h-screen block  justify-center items-center">
      <h1 className="text-2xl font-bold">How are you feeling today?</h1>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Happy</button>
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Sad</button>
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">
          Excited
        </button>
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Angry</button>
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Romantic</button>
      </div>
      <div className="how-it-works mt-8">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="text-body">
          Select your current mood and discover content tailored to how you're feeling.
        </p>
      </div>
    </div>
  );
}

export default Home;
