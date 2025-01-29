const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">CarRental</a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-primary-light">Home</a>
            <a href="/cars" className="text-white hover:text-primary-light">Cars</a>
            <a href="/about" className="text-white hover:text-primary-light">About</a>
            <a href="/contact" className="text-white hover:text-primary-light">Contact</a>
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition duration-200">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 