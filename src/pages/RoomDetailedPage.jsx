import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StartRating";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";


const RoomDetailedPage = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);


  console.log(room);


  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* room details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">({room.roomType})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>
        {/* address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location icon" />
          <p>{room.hotel.address}</p>
        </div>

        {/*Image div*/}
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
          <div>
            <img src={mainImage} alt="image" className="rounded-2xl" />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {room.images.map((image, index) => (
              <img onClick={() => setMainImage(image)} key={index} src={image} alt="image" className={`h-40 w-40 object-cover rounded-2xl ${mainImage === image ? " outline-4 outline-orange-400" : ""}`} />
            ))}
          </div>
        </div>

        {/* hotel aminities div */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:items-start py-8 border-t border-gray-200 mt-8">
          {/* Left Column */}
          <div className="md:w-2/3">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700"
                >
                  <img
                    className="w-5 h-5"
                    src={facilityIcons[item]}
                    alt={item}
                  />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 text-left md:text-right mt-6 md:mt-0">
            <p className="text-xl font-bold text-gray-900">
              ${room.pricePerNight}
              <span className="text-sm font-normal text-gray-500"> /night</span>
            </p>
          </div>
        </div>


        {/* form div */}
        <div className="mt-8 flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 px-6 bg-white p-6 rounded-xl shadow-lg">
          {/* Check-In */}
          <div className="flex flex-col w-full md:w-auto items-center md:border-r md:pr-6 border-gray-300">
            <label htmlFor="Check-In" className="mb-1 text-sm font-medium text-gray-700">
              Check-In
            </label>
            <input
              type="date"
              id="Check-In"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col w-full md:w-auto items-center md:border-r md:px-6 border-gray-300">
            <label htmlFor="Check-Out" className="mb-1 text-sm font-medium text-gray-700">
              Check-Out
            </label>
            <input
              type="date"
              id="Check-Out"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col w-full md:w-auto items-center md:px-6">
            <label htmlFor="Guests" className="mb-1 text-sm font-medium text-gray-700">
              Guests
            </label>
            <input
              type="number"
              id="Guests"
              min="1"
              placeholder="1"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <div className="flex items-end">
            <button className="cursor-pointer px-16 py-3 mt-4 md:mt-0 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md">
              Check Availability
            </button>
          </div>
        </div>

        {/* some qualities of the room */}
        <div className="px-6 py-10 mt-16 space-y-6">
          {/* Clean & Safe Stay */}
          <div className="flex gap-5">
            <span>
              <img src={assets.homeIcon} alt="Home Icon" className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Clean & Safe Stay</h1>
              <p className="text-sm text-gray-600">A well-maintained and hygienic space just for you.</p>
            </div>
          </div>

          {/* Enhanced Cleaning */}
          <div className="flex gap-5">
            <span>
              <img src={assets.badgeIcon} alt="Badge Icon" className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Enhanced Cleaning</h1>
              <p className="text-sm text-gray-600">This host follows Staybnb's strict cleaning standards.</p>
            </div>
          </div>

          {/* Excellent Location */}
          <div className="flex gap-5">
            <span>
              <img src={assets.locationIcon} alt="Location Icon" className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Excellent Location</h1>
              <p className="text-sm text-gray-600">90% of guests rated the location 5 stars.</p>
            </div>
          </div>

          {/* Smooth Check-In */}
          <div className="flex gap-5">
            <span>
              <img src={assets.heartIcon} alt="Heart Icon" className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Smooth Check-In</h1>
              <p className="text-sm text-gray-600">100% of guests gave check-in a 5-star rating.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300"></div>

          {/* Description */}
          <div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Guests will be allocated on the ground floor according to availability.
              You get a comfortable two-bedroom apartment that has a true city feeling.
              The price quoted is for two guests; at the guest slot please mark the number of
              guests to get the exact price for groups. The guests will be allocated ground
              floor according to availability.
            </p>
          </div>
        </div>




      </div>
    )
  );
};

export default RoomDetailedPage;