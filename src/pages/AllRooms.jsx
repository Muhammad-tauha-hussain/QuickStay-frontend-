import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StartRating";


const Checkbox = ({lable, selected = false, onChange = () => { } }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked , lable)}
        className="cursor-pointer"
      />
      <span className="font-light select-none">{lable}</span>
    </label>
  ); 
};
const RadioButton = ({lable, selected = false, onChange = () => { } }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(lable)}
        className="cursor-pointer"
      />
      <span className="font-light select-none">{lable}</span>
    </label>
  ); 
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);
  // const [selectedRooms, setSelectedRooms] = useState([]);
  // const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  // const [selectedSortOption, setSelectedSortOption] = useState("");

  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Room",
  ];
  const priceRanges = [
    "$0 to $500",
    "$500 to $1000",
    "$1000 to $2000",
    "$2000 to $3000",
  ];
  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* left side   */}
      <div>
        {/* text */}
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>
        {roomsDummyData.map((room) => (
          <div
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
            key={room._id}
          >
            <img
              src={room.images[0]}
              alt="hotel room images"
              title="View Room Details"
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2 ">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-playfair cursor-poinetr"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating/>
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="lcation icon" />
                <span>{room.hotel.address}</span>
              </div>
              {/* room amenities */}
              <div className="flex flex-wrap items-center mt-3 mb-4 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
                    key={index}
                  >
                    <img
                      className="w-5 h-5"
                      src={facilityIcons[item]}
                      alt={item}
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              {/* room price per night */}
              <p className="text-xl font-medium text-gray-700">
                ${room.pricePerNight} /night
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Right side || filters */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        {/* filter header */}
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${
            openFilters && "border-b"
          }`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>

        {/* filter options */}
        <div
          className={`${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-300`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
             {roomTypes.map((room, index) => (
              <Checkbox
                key={index}
                lable={room}
              />
              ))}
          </div>
          {/* price filter */}
                    <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
             {priceRanges.map((Range, index) => (
              <Checkbox
                key={index}
                lable={`$ ${Range}`}
              />
              ))}
          </div>
       
          {/* low to high filters */}
               <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">
              Sort By
            </p>
             {sortOptions.map((option, index) => (
              <RadioButton
                key={index}
                lable={option}
              />
              ))}
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default AllRooms;