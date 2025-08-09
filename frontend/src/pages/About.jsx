import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (

  <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
    </div>

    <div className='my-10 flex flex-col md:flex-row  gap-16 '>
      <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to our online store, your one-stop destination for premium quality products at prices that truly offer value. We are passionate about delivering an exceptional shopping experience, combining a wide variety of handpicked items with top-notch customer service to ensure every purchase brings you satisfaction and joy.</p>
        <p>From the moment you land on our website to the day your order arrives at your doorstep, our mission is to make shopping seamless, enjoyable, and trustworthy. We believe in building lasting relationships with our customers by offering reliable products, transparent service, and the promise of quality in everything we do</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to provide high-quality products at fair prices while delivering a seamless and enjoyable shopping experience for every customer.</p>
      </div>
    </div>

    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>We are committed to strict quality assurance, ensuring every product meets our high standards before it reaches your hands.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>We strive to make your shopping experience effortless and convenient, with easy navigation, secure payments, and fast delivery right to your doorstep.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer service:</b>
        <p className='text-gray-600'>We pride ourselves on delivering exceptional customer service, offering prompt support and personalized assistance to ensure your satisfaction at every step.</p>
      </div>
      
    </div>

    <NewsletterBox />
  </div>

  )
}

export default About
