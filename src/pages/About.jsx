import React from "react";
import MissionSection from "../components/Mission";
import FeatureHighlights from "../components/FeatureHighlights";
import TeamSection from "../components/TeamSection";


import CallToActionBanner from "../components/CallToActionBanner";
import { assets } from "../assets/assets";

const About = () => (
  <div className="pt-28 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-white">
    {/* Top Section with Image + Text */}
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mb-20">
      {/* Text Content */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-playfair mb-4">
          About QuickStay
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Quick Stay is designed to make your travel experience smooth and effortless. 
          Whether you're traveling for business, leisure, or family trips, we offer a wide 
          selection of verified accommodations across Pakistan.
          <br /><br />
          Our goal is to help you find the perfect place with ease, at the best prices — and with complete peace of mind. 
          Backed by a passionate team and powerful tech, we aim to be your go-to travel partner.
        </p>
      </div>

      {/* Image Side */}
      <div className="flex-1">
        <img
          src={assets.aboutImg}
          alt="About Quick Stay"
          className="w-full max-w-[500px] h-auto rounded-xl shadow-lg object-cover mx-auto"
        />
      </div>
    </div>

    {/* Sections Below */}
    <MissionSection />
    <FeatureHighlights />
    <TeamSection />
    <CallToActionBanner />
  </div>
);

export default About;