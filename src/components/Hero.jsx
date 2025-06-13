import React from 'react';

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen pt-[64px] bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/src/assets/heroImage.png')" }}
    >
      <div className="h-full w-full  flex items-center justify-start px-4 md:px-20 py-10">
        <div className="max-w-4xl space-y-6 pt-20">
          <p className="text-sm sm:text-base md:text-lg font-light inline-block px-4 py-2 rounded-full bg-[#49B9FF]">
            The Ultimate Hotel Experience
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Discover Your Perfect Gateway Destination
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-light max-w-2xl">
            Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
          </p>

          <form className="bg-white text-gray-600 rounded-lg p-4 sm:p-6 flex flex-col md:flex-row md:items-end gap-4 sm:gap-6 shadow-lg w-full max-w-4xl">
            {/* Destination */}
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="destinationInput" className="flex items-center gap-2 text-sm font-medium mb-1">
                <span>📍</span> Destination
              </label>
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className="rounded border border-gray-300 px-3 py-2 text-sm outline-none"
                placeholder="Type here"
                required
              />
            </div>

            {/* Check In */}
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="checkIn" className="flex items-center gap-2 text-sm font-medium mb-1">
                <span>📅</span> Check In
              </label>
              <input
                id="checkIn"
                type="date"
                className="rounded border border-gray-300 px-3 py-2 text-sm outline-none"
              />
            </div>

            {/* Check Out */}
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="checkOut" className="flex items-center gap-2 text-sm font-medium mb-1">
                <span>📅</span> Check Out
              </label>
              <input
                id="checkOut"
                type="date"
                className="rounded border border-gray-300 px-3 py-2 text-sm outline-none"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col w-full md:w-24">
              <label htmlFor="guests" className="text-sm font-medium mb-1">Guests</label>
              <input
                min={1}
                max={4}
                id="guests"
                type="number"
                className="rounded border border-gray-300 px-3 py-2 text-sm outline-none"
                placeholder="1"
              />
            </div>

            {/* Search Button */}
            <button className="w-full md:w-auto bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm hover:bg-gray-800 transition">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
