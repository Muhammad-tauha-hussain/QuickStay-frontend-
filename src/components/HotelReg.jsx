import React, { useState, useEffect } from 'react';
import { assets, cities } from '../assets/assets';
import { useAppContext } from '../context/Appcontext';


const HotelRegModal = () => {
  const [isOpen, setIsOpen] = useState(false);

 const {setShowHotelReg} = useAppContext()

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent p-10 bg-opacity-30">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 md:mx-0">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-red-600 z-50"
          onClick={() => setShowHotelReg(flase)}
        >
          &times;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="hidden md:block">
            <img
              src={assets.regImage}
              alt="Hotel registration"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>

          {/* Form */}
          <div className="p-6">
            <form className="space-y-4">
              <h1 className="text-2xl font-semibold text-gray-800 text-center">
                Register Your Hotel
              </h1>

              {/* Hotel Name */}
              <div>
                <label htmlFor="HotelName" className="block text-sm font-medium text-gray-700 mb-1">
                  Hotel Name
                </label>
                <input
                  type="text"
                  id="HotelName"
                  name="HotelName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter hotel name"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter contact number"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter hotel address"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <select
                  id="city"
                  name="city"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <option value="">Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                  Register Hotel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRegModal;
