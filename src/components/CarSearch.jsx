const CarSearch = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Find Your Perfect Ride</h1>
      <p className="text-gray-600 mb-6">Rent the car of your dreams with just a few clicks</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 mb-2">Location</label>
          <input 
            type="text" 
            placeholder="Pick-up location"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Pick-up Date</label>
          <input 
            type="date"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Return Date</label>
          <input 
            type="date"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
      
      <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
        Search Cars
      </button>
    </div>
  );
}; 