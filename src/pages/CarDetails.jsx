import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import Loader from "../components/Loader";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = React.useState(null);
  const currency = import.meta.env.VITE_CURRENCY;

  const handleSubmit = async (e)=>{
    e.preventDefault();
    alert("Booking Successful!");
  }

  useEffect(() => {
    // Fetch car details using the id
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);
  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
      >
        <img src={assets.arrow_icon} alt="" className="rotate-180 opacity-65" />
        Back to all Cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/*left car Image Section*/}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-auto object-cover md:max-h-100 mb-6 rounded-xl shadow-md"
          />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} • {car.year}
              </p>
            </div>
            <hr className="border-borderColor my-6" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: assets.users_icon,
                  text: `${car.seating_capacity} Seats`,
                },
                { icon: assets.fuel_icon, text: `${car.fuel_type}` },
                { icon: assets.car_icon, text: `${car.transmission}` },
                { icon: assets.location_icon, text: `${car.location}` },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-light p-4 rounded-lg"
                >
                  <img src={item.icon} alt="" className="h-5 mb-2" />
                  {item.text}
                </div>
              ))}
            </div>
            {/* Description Section */}
            <div>
              <h1 className="text-xl font-medium mb-3">Description</h1>
              <p className="text-gray-500">{car.description}</p>
            </div>
            {/* Features Section */}
            <div>
              <h1 className="text-xl font-medium mb-3">Features</h1>
              <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {[
                  "360 camera",
                  "Backup Sensor",
                  "Cruise Control",
                  "Sunroof",
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-500">
                    <img src={assets.check_icon} alt="" className="h-4 mr-2" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          {/*right car details section*/}
          <form onSubmit={handleSubmit} className="shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500">
            <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
              {currency} {car.pricePerDay}{" "}
              <span className="text-base text-gray-400 font-normal">
                Per Day
              </span>
            </p>
            <hr className="border-borderColor my-6" />
            <div className="flex flex-col gap-2">
              <label htmlFor="pickup-date">Pickup Date</label>
              <input
                type="date"
                className="border border-borderColor px-3 py-2 rounded-lg "
                required
                id="pickup-date"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="return-date">Return Date</label>
              <input
                type="date"
                className="border border-borderColor px-3 py-2 rounded-lg "
                required
                id="return-date"
                
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dull text-white py-3 font-medium cursor-pointer rounded-xl transition-all"
            >
              Book Now
            </button>
            <p className="text-center text-sm">No credit card required to reserve</p>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
