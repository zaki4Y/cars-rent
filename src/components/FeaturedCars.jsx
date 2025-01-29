import CarCard from './CarCard';

const FeaturedCars = () => {
  const cars = [
    {
      name: "Tesla Model 3",
      pricePerDay: 90,
      image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2070&auto=format&fit=crop",
      seats: 5,
      fuelType: "Electric",
      transmission: "Auto"
    },
    {
      name: "Mercedes-Benz C-Class",
      pricePerDay: 85,
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1935&auto=format&fit=crop",
      seats: 5,
      fuelType: "Hybrid",
      transmission: "Auto"
    },
    {
      name: "BMW 5 Series",
      pricePerDay: 95,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
      seats: 5,
      fuelType: "Gasoline",
      transmission: "Auto"
    }
  ];

  return (
    <section className="section-padding glass-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Cars</h2>
          <p className="section-description">Choose from our selection of premium vehicles</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
