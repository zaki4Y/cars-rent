import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingSteps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAvailabilityError, setShowAvailabilityError] = useState(false);

  // Sample car data - in a real app, this would come from your backend
  const availableCars = [
    {
      id: 1,
      name: "Tesla Model 3",
      isAvailable: false,
      bookedUntil: "2024-04-20"
    },
    {
      id: 2,
      name: "BMW i4",
      isAvailable: true,
      bookedUntil: null
    },
    // Add more cars as needed
  ];

  const steps = [
    {
      id: 1,
      title: "Choose Your Car",
      description: "Select from our wide range of vehicles",
      icon: "🚗",
      estimatedTime: "5-10 mins",
      requirements: ["Valid driver's license", "Age 21+"]
    },
    {
      id: 2,
      title: "Pick-up Location",
      description: "Choose your preferred pick-up location",
      icon: "📍",
      estimatedTime: "2-3 mins",
      requirements: ["Address verification", "Valid ID"]
    },
    {
      id: 3,
      title: "Book & Pay",
      description: "Secure your booking with easy payment",
      icon: "💳",
      estimatedTime: "3-5 mins",
      requirements: ["Credit card", "Booking confirmation"]
    }
  ];

  const handleStepComplete = (stepId) => {
    if (stepId === 1 && selectedCar) {
      // Check car availability when completing the first step
      const car = availableCars.find(c => c.id === selectedCar);
      if (!car?.isAvailable) {
        setShowAvailabilityError(true);
        return;
      }
    }

    setShowAvailabilityError(false);
    if (stepId === steps.length) {
      setIsCompleted(true);
    } else {
      setActiveStep(stepId + 1);
    }
  };

  const handleCarSelection = (carId) => {
    setSelectedCar(carId);
    setShowAvailabilityError(false);
  };

  return (
    <section className="py-16 bg-black/[0.96]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
        <div className="w-full max-w-3xl mx-auto mb-12 flex justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center
                ${step.id <= activeStep ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                {step.id}
              </div>
              {index < steps.length - 1 && (
                <div className={`h-1 w-24 mx-2
                  ${step.id < activeStep ? 'bg-blue-500' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step) => (
            <motion.div 
              key={step.id} 
              className={`text-center p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer relative group
                ${activeStep === step.id ? 'bg-blue-50 scale-105' : 'bg-white'}
                ${step.id < activeStep ? 'bg-green-50' : ''}`}
              onClick={() => setActiveStep(step.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: step.id * 0.2 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              <div className="hidden group-hover:block absolute top-full left-0 w-full bg-white p-4 shadow-lg rounded-lg mt-2 z-10">
                <h4 className="font-semibold mb-2">Additional Information</h4>
                
                {/* Add car selection UI for the first step */}
                {step.id === 1 && (
                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Select a Car:</h5>
                    <div className="space-y-2">
                      {availableCars.map((car) => (
                        <div 
                          key={car.id}
                          className={`p-2 rounded cursor-pointer transition-colors
                            ${selectedCar === car.id ? 'bg-blue-100' : 'hover:bg-gray-100'}
                            ${!car.isAvailable ? 'opacity-50' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCarSelection(car.id);
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <span>{car.name}</span>
                            {!car.isAvailable && (
                              <span className="text-red-500 text-sm">
                                Booked until {car.bookedUntil}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Availability Error Message */}
                    {showAvailabilityError && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 text-red-500 text-sm"
                      >
                        This car is not available right now. Please select another vehicle.
                      </motion.div>
                    )}
                  </div>
                )}

                <p className="text-sm text-gray-500 mb-2">
                  Estimated time: {step.estimatedTime}
                </p>
                <div className="mt-3">
                  <h5 className="font-medium mb-1">Requirements:</h5>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {step.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                {step.id === activeStep && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStepComplete(step.id);
                    }}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Complete Step
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-2">🎉 All Steps Completed!</h3>
            <p>Your booking is ready to be processed.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BookingSteps;
