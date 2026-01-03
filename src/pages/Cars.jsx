import React from "react";
import Title from "../components/Title";
import { assets, dummyCarData } from "../assets/assets";
import { useState } from "react";
import CarCards from "../components/CarCards";

const Cars = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title
          title="Available Cars"
          subtitle="Explore our extensive fleet of vehicles available for rent."
        />

        <div className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <img
            src={assets.search_icon}
            alt="search icon"
            className="w-4.5 h-4.5 mr-2"
          />
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            type="text"
            placeholder="Search model by make model or features"
            className="h-full w-full outline-none text-gray-500"
          />
          <img
            src={assets.filter_icon}
            alt="filter icon"
            className="w-4.5 h-4.5 ml-2"
          />
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p className="text-gray-500 px-20 mx-auto">Showing {dummyCarData.length} cars</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
        {dummyCarData.map((car,index)=>(
          <div key={index}>
            <CarCards cars={car} />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Cars;
