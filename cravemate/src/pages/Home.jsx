function Home() {
  return (
    <div className="min-h-screen block  justify-center items-center">
      <h1 className="text-2xl font-bold">How are you feeling today?</h1>
      <div classname="flex flex-col gap-3">
        <button className="bg-blue-500 text-white rounded-md p-2">Happy</button>
        <button className="bg-blue-500 text-white rounded-md p-2">Sad</button>
        <button className="bg-blue-500 text-white rounded-md p-2">
          Excited
        </button>
        <button className="bg-blue-500 text-white rounded-md p-2">Angry</button>
        <button className="bg-blue-500 text-white rounded-md p-2">Romantic</button>
      </div>
    </div>
  );
}

export default Home;
