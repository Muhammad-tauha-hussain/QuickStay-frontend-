import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StartRating";

const Checkbox = ({ lable, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, lable)}
        className="cursor-pointer"
      />
      <span className="font-light select-none">{lable}</span>
    </label>
  );
};

const RadioButton = ({ lable, selected = false, onChange = () => {} }) => {
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
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Room"];
  const priceRanges = [
    "$0 to $500",
    "$500 to $1000",
    "$1000 to $2000",
    "$2000 to $3000",
  ];
  const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

  const handleRoomTypeChange = (checked, label) => {
    setSelectedRoomTypes((prev) =>
      checked ? [...prev, label] : prev.filter((item) => item !== label)
    );
  };

  const handlePriceRangeChange = (checked, label) => {
    setSelectedPriceRanges((prev) =>
      checked ? [...prev, label] : prev.filter((item) => item !== label)
    );
  };

  const handleSortChange = (label) => {
    setSelectedSortOption(label);
  };
  const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const search = queryParams.get("search")?.toLowerCase() || "";


 const filteredRooms = roomsDummyData
  .filter((room) => {
    const matchesSearch =
      search === "" ||
      room.hotel.name.toLowerCase().includes(search) ||
      room.hotel.city.toLowerCase().includes(search) ||
      room.roomType.toLowerCase().includes(search);
    if (!matchesSearch) return false;

    if (selectedRoomTypes.length > 0 && !selectedRoomTypes.includes(room.roomType)) {
      return false;
    }
    if (selectedPriceRanges.length > 0) {
      const match = selectedPriceRanges.some((range) => {
        const [min, max] = range.replace(/\$/g, "").split(" to ").map(Number);
        return room.pricePerNight >= min && room.pricePerNight <= max;
      });
      if (!match) return false;
    }
    return true;
  })
  .sort((a, b) => {
    if (selectedSortOption === "Price Low to High") return a.pricePerNight - b.pricePerNight;
    if (selectedSortOption === "Price High to Low") return b.pricePerNight - a.pricePerNight;
    if (selectedSortOption === "Newest First") return new Date(b.createdAt) - new Date(a.createdAt);
    return 0;
  });


  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Left Side */}
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>
        {filteredRooms.map((room) => (
          <div
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
            key={room._id}
          >
            <img
              src={room.images[0]}
              alt="hotel room"
              title="View Room Details"
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location icon" />
                <span>{room.hotel.address}</span>
              </div>
              <div className="flex flex-wrap items-center mt-3 mb-4 gap-4">
                {room.amenities.map((item, index) => (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70" key={index}>
                    <img className="w-5 h-5" src={facilityIcons[item]} alt={item} />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl font-medium text-gray-700">
                ${room.pricePerNight} /night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side / Filters */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div className={`flex items-center justify-between px-5 py-2.5 ${openFilters && "border-b"}`}>
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span
              className="hidden lg:block"
              onClick={() => {
                setSelectedRoomTypes([]);
                setSelectedPriceRanges([]);
                setSelectedSortOption("");
              }}
            >
              CLEAR
            </span>
          </div>
        </div>

        <div className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-300`}>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
            {roomTypes.map((room, index) => (
              <Checkbox key={index} lable={room} selected={selectedRoomTypes.includes(room)} onChange={handleRoomTypeChange} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <Checkbox key={index} lable={range} selected={selectedPriceRanges.includes(range)} onChange={handlePriceRangeChange} />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} lable={option} selected={selectedSortOption === option} onChange={handleSortChange} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
