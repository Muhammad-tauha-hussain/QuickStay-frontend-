import React from 'react';
import { useNavigate } from "react-router-dom";
import { assets } from '../assets/assets';


const CallToActionBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-900 text-white text-center py-18 rounded-xl mt-10 mb-10 px-4 md:px-16 lg:px-24 xl:px-32">
      <h2 className="text-2xl font-bold">Ready to Book Your Next Stay?</h2>
      <p className="mt-2">Explore thousands of verified listings across Pakistan.</p>

      {/* Wrapper to center the button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate("/rooms")}
          className="flex items-center justify-center cursor-pointer gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all"
        >
          Browse Hotels
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-3.5 invert group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>
    </section>
  );
};

export default CallToActionBanner;