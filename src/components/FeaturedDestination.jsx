import React from 'react'
import Title from './Title'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Button from './Button'

const FeaturedDestination = () => {
  return (
    <section className="py-12 px-4 md:px-12 lg:px-20 bg-gray-50">
      {/* Section Title */}
      <Title
        heading="Featured Destination"
        paragraph="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
        textAlign="center"
      />

      {/* Hotel Cards Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={index} room={room} />
          // console.log(room.hotel)
        ))}
      </div>
      <div className='flex justify-center items-center mt-20'>
      <Button description={"View All Description"} bgColor={"white"} textColor={"black"}/>
      </div>
    </section>
  )
}

export default FeaturedDestination
