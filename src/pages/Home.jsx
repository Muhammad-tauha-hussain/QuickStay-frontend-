import React from 'react'
import Hero from '../components/Hero'
import Title from '../components/Title'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonial from '../components/Testimonials'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  return (
    <div className='text-black'>

      <Hero />
      <FeaturedDestination/>
      <ExclusiveOffer />
      <Testimonial />
      <NewsLetter/>
    </div>
  )
}

export default Home