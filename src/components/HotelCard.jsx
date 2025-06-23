import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room }) => {
  // console.log(room);
  
  return (
    <Link
      to={'/rooms/' + room._id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-full max-w-sm"
    >
      <img
        src={room.images[0]}
        alt="Hotel"
        className="w-full h-52 object-cover"
      />

      <div className="p-4 space-y-3">
        {/* Title and Rating */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-800">{room.hotel.name}</h1>
          <p className="flex items-center gap-1 text-yellow-500 text-sm">
            <img src={assets.starIconOutlined} alt="star" className="w-4 h-4" />
            4.5
          </p>
        </div>

        {/* Location */}
        <p className="flex items-center gap-2 text-sm text-gray-500">
          <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
          Main Road 123 Street, 23 Colony
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-base font-semibold text-black">
            ${room.pricePerNight}
            <span className="text-sm font-normal text-gray-600"> /night</span>
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
