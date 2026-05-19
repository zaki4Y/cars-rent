export const carsData = [
  {
    id: 1,
    slug: "tesla-model-3",
    name: "Tesla Model 3",
    type: "Electric",
    price: 90,
    image: "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 5,
    fuelType: "Electric",
    features: ["Autopilot", "360° Camera", "Wireless Charging", "15\" Touchscreen", "OTA Updates"],
    description: "The future of driving, available today. Zero emissions, full performance.",
    specs: { engine: "Dual Motor AWD", horsepower: "346 HP", "0-60": "4.2s", range: "358 mi", drivetrain: "AWD", topSpeed: "145 mph" }
  },
  {
    id: 2,
    slug: "mercedes-benz-s-class",
    name: "Mercedes-Benz S-Class",
    type: "Luxury",
    price: 150,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606016159991-dfe08f1a2205?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1935&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 5,
    fuelType: "Hybrid",
    features: ["Massage Seats", "Night Vision", "Executive Package", "Burmester 4D Sound", "Rear-Axle Steering"],
    description: "The benchmark of luxury sedans. Unmatched refinement and technology.",
    specs: { engine: "3.0L I6 Turbo Hybrid", horsepower: "429 HP", "0-60": "4.9s", range: "N/A", drivetrain: "AWD", topSpeed: "130 mph" }
  },
  {
    id: 3,
    slug: "bmw-m4",
    name: "BMW M4",
    type: "Sports",
    price: 180,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 4,
    fuelType: "Gasoline",
    features: ["M Performance", "Carbon Roof", "Sport Exhaust", "M Carbon Bucket Seats", "Adaptive M Suspension"],
    description: "Track-bred performance meets everyday usability. Pure driving excitement.",
    specs: { engine: "3.0L I6 Twin-Turbo", horsepower: "503 HP", "0-60": "3.8s", range: "N/A", drivetrain: "RWD", topSpeed: "180 mph" }
  },
  {
    id: 4,
    slug: "porsche-911-gt3",
    name: "Porsche 911 GT3",
    type: "Sports",
    price: 250,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580274455133-7d4537987cb4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "PDK",
    seats: 2,
    fuelType: "Gasoline",
    features: ["Track Mode", "Carbon Ceramic Brakes", "PDK", "Rear-Axle Steering", "Swan-Neck Wing"],
    description: "A naturally aspirated masterpiece. The purest 911 experience.",
    specs: { engine: "4.0L Flat-6 NA", horsepower: "502 HP", "0-60": "3.2s", range: "N/A", drivetrain: "RWD", topSpeed: "197 mph" }
  },
  {
    id: 5,
    slug: "range-rover-velar",
    name: "Range Rover Velar",
    type: "SUV",
    price: 140,
    image: "https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606016159991-dfe08f1a2205?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 5,
    fuelType: "Diesel",
    features: ["Terrain Response", "Meridian Sound", "Panoramic Roof", "Air Suspension", "Pixel LED Headlights"],
    description: "Sleek design meets go-anywhere capability. Luxury without compromise.",
    specs: { engine: "3.0L I6 Diesel", horsepower: "296 HP", "0-60": "6.1s", range: "N/A", drivetrain: "AWD", topSpeed: "143 mph" }
  },
  {
    id: 6,
    slug: "audi-rs7",
    name: "Audi RS7",
    type: "Sports",
    price: 200,
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 5,
    fuelType: "Gasoline",
    features: ["V8 Twin-Turbo", "Sport Differential", "Carbon Package", "Matrix LED", "Dynamic All-Wheel Steering"],
    description: "The supercar sedan. Brutal power wrapped in elegant design.",
    specs: { engine: "4.0L V8 Twin-Turbo", horsepower: "591 HP", "0-60": "3.5s", range: "N/A", drivetrain: "AWD", topSpeed: "190 mph" }
  },
  {
    id: 7,
    slug: "bmw-x7",
    name: "BMW X7",
    type: "SUV",
    price: 160,
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606016159991-dfe08f1a2205?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 7,
    fuelType: "Gasoline",
    features: ["7 Seats", "Sky Lounge", "Executive Drive", "Bowers & Wilkins Sound", "Panoramic Glass Roof"],
    description: "The ultimate luxury family SUV. Space, power, and prestige.",
    specs: { engine: "4.4L V8 Twin-Turbo", horsepower: "523 HP", "0-60": "4.7s", range: "N/A", drivetrain: "AWD", topSpeed: "155 mph" }
  },
  {
    id: 8,
    slug: "lamborghini-huracan",
    name: "Lamborghini Huracán",
    type: "Supercar",
    price: 300,
    image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596906828303-8f8e2dfa5c9e?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 2,
    fuelType: "Gasoline",
    features: ["V10 Engine", "Corsa Mode", "Carbon Interior", "Magnetic Ride", "ANIMA Drive Mode"],
    description: "Italian fury on four wheels. An experience that defies description.",
    specs: { engine: "5.2L V10 NA", horsepower: "631 HP", "0-60": "2.9s", range: "N/A", drivetrain: "AWD", topSpeed: "202 mph" }
  },
  {
    id: 9,
    slug: "mercedes-amg-gt",
    name: "Mercedes-AMG GT",
    type: "Sports",
    price: 220,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580274455133-7d4537987cb4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 2,
    fuelType: "Gasoline",
    features: ["Biturbo V8", "Race Mode", "AMG Dynamics", "Carbon Fiber Driveshaft", "AMG Performance Exhaust"],
    description: "Handcrafted AMG performance. A grand tourer with a racing soul.",
    specs: { engine: "4.0L V8 Biturbo", horsepower: "577 HP", "0-60": "3.1s", range: "N/A", drivetrain: "RWD", topSpeed: "197 mph" }
  },
  {
    id: 10,
    slug: "rolls-royce-cullinan",
    name: "Rolls-Royce Cullinan",
    type: "Luxury",
    price: 400,
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1632548260498-b7246fa466ea?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606016159991-dfe08f1a2205?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 5,
    fuelType: "Gasoline",
    features: ["Starlight Headliner", "Champagne Cooler", "Viewing Suite", "Magic Carpet Ride", "Bespoke Audio"],
    description: "The pinnacle of automotive luxury. Nothing else comes close.",
    specs: { engine: "6.75L V12 Twin-Turbo", horsepower: "563 HP", "0-60": "4.8s", range: "N/A", drivetrain: "AWD", topSpeed: "155 mph" }
  },
  {
    id: 11,
    slug: "ferrari-f8-tributo",
    name: "Ferrari F8 Tributo",
    type: "Supercar",
    price: 350,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596906828303-8f8e2dfa5c9e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 2,
    fuelType: "Gasoline",
    features: ["Twin-Turbo V8", "Dynamic Enhancer", "Carbon Seats", "Side Slip Control", "Ferrari Telemetry"],
    description: "A tribute to Ferrari's V8 legacy. Exhilarating in every sense.",
    specs: { engine: "3.9L V8 Twin-Turbo", horsepower: "710 HP", "0-60": "2.9s", range: "N/A", drivetrain: "RWD", topSpeed: "211 mph" }
  },
  {
    id: 12,
    slug: "bentley-flying-spur",
    name: "Bentley Flying Spur",
    type: "Luxury",
    price: 280,
    image: "https://images.unsplash.com/photo-1632548260498-b7246fa466ea?q=80&w=2071&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1632548260498-b7246fa466ea?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 5,
    fuelType: "Gasoline",
    features: ["Mulliner Driving", "Naim Audio", "Rear Entertainment", "Rotating Display", "All-Wheel Steering"],
    description: "British craftsmanship at its finest. Power delivered with grace.",
    specs: { engine: "6.0L W12 Twin-Turbo", horsepower: "626 HP", "0-60": "3.7s", range: "N/A", drivetrain: "AWD", topSpeed: "207 mph" }
  },
  {
    id: 13,
    slug: "aston-martin-db12",
    name: "Aston Martin DB12",
    type: "Sports",
    price: 260,
    image: "https://images.unsplash.com/photo-1596906828303-8f8e2dfa5c9e?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1596906828303-8f8e2dfa5c9e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580274455133-7d4537987cb4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 4,
    fuelType: "Gasoline",
    features: ["Twin-Turbo V8", "Handcrafted Interior", "Adaptive Dynamics", "B&O Premium Audio", "Carbon Fiber Roof"],
    description: "The world's first super tourer. Beauty with breathtaking performance.",
    specs: { engine: "4.0L V8 Twin-Turbo", horsepower: "671 HP", "0-60": "3.5s", range: "N/A", drivetrain: "RWD", topSpeed: "208 mph" }
  },
  {
    id: 14,
    slug: "mclaren-720s",
    name: "McLaren 720S",
    type: "Supercar",
    price: 380,
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596906828303-8f8e2dfa5c9e?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 2,
    fuelType: "Gasoline",
    features: ["Carbon Monocoque", "Proactive Chassis", "Dihedral Doors", "Variable Drift Control", "Folding Display"],
    description: "Engineering artistry. Lighter, faster, more thrilling than anything before.",
    specs: { engine: "4.0L V8 Twin-Turbo", horsepower: "710 HP", "0-60": "2.8s", range: "N/A", drivetrain: "RWD", topSpeed: "212 mph" }
  },
  {
    id: 15,
    slug: "mercedes-benz-c-class",
    name: "Mercedes-Benz C-Class",
    type: "Sedan",
    price: 85,
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1935&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 5,
    fuelType: "Hybrid",
    features: ["MBUX System", "Ambient Lighting", "Air Suspension", "Burmester Sound", "Digital Light"],
    description: "The intelligent choice. Premium comfort with cutting-edge technology.",
    specs: { engine: "2.0L I4 Turbo Hybrid", horsepower: "255 HP", "0-60": "5.9s", range: "N/A", drivetrain: "RWD", topSpeed: "130 mph" }
  },
  {
    id: 16,
    slug: "bmw-5-series",
    name: "BMW 5 Series",
    type: "Sedan",
    price: 95,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 5,
    fuelType: "Gasoline",
    features: ["iDrive 8", "Driving Assistant", "Harman Kardon", "Laserlight", "Executive Lounge Seating"],
    description: "The executive sedan perfected. Dynamic yet composed.",
    specs: { engine: "3.0L I6 Turbo", horsepower: "335 HP", "0-60": "5.3s", range: "N/A", drivetrain: "RWD", topSpeed: "155 mph" }
  },
  {
    id: 17,
    slug: "porsche-cayenne",
    name: "Porsche Cayenne",
    type: "SUV",
    price: 170,
    image: "https://images.unsplash.com/photo-1606016159991-dfe08f1a2205?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606016159991-dfe08f1a2205?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 5,
    fuelType: "Gasoline",
    features: ["Sport Chrono", "Air Suspension", "Bose Surround", "Rear-Axle Steering", "Porsche Active Suspension"],
    description: "The sports car among SUVs. Performance that defies its size.",
    specs: { engine: "4.0L V8 Twin-Turbo", horsepower: "434 HP", "0-60": "4.7s", range: "N/A", drivetrain: "AWD", topSpeed: "164 mph" }
  },
  {
    id: 18,
    slug: "jaguar-f-type",
    name: "Jaguar F-Type",
    type: "Sports",
    price: 190,
    image: "https://images.unsplash.com/photo-1580274455133-7d4537987cb4?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1580274455133-7d4537987cb4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596906828303-8f8e2dfa5c9e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop"
    ],
    transmission: "Auto",
    seats: 2,
    fuelType: "Gasoline",
    features: ["Supercharged V8", "Active Exhaust", "Adaptive Dynamics", "Meridian Sound", "Configurable Dynamics"],
    description: "British elegance with a wild heart. The last of the great GTs.",
    specs: { engine: "5.0L V8 Supercharged", horsepower: "575 HP", "0-60": "3.5s", range: "N/A", drivetrain: "AWD", topSpeed: "186 mph" }
  },
];

export const carTypes = [...new Set(carsData.map(c => c.type))].sort();

export const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: '$50 – $100/day', value: '50-100' },
  { label: '$101 – $200/day', value: '101-200' },
  { label: '$201+', value: '201-9999' },
];

export function getCarById(id) {
  return carsData.find(c => c.id === Number(id));
}

export function getCarBySlug(slug) {
  return carsData.find(c => c.slug === slug);
}
