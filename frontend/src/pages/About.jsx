import React from 'react'
import Title from './../components/Title';
import { assets } from './../assets/assets';
import NewsLetterBox from './../components/NewsLetterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum perferendis qui dignissimos. Ea, dolor repudiandae vel praesentium quisquam facilis ipsa aut dignissimos quia doloremque, porro sapiente debitis voluptatem quod itaque odio error? Iste, veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, praesentium? Libero culpa velit quae a quam cupiditate, non nemo, cum officia, quos consequatur beatae dolores necessitatibus. Deleniti, debitis! Incidunt ipsum cum iste nulla ad cupiditate.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni repudiandae animi a eligendi ipsam porro consequuntur? Eligendi neque sequi blanditiis autem omnis nemo molestiae adipisci.
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium suscipit et, necessitatibus consequuntur commodi.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem numquam facere. Accusamus, amet fugit.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, veniam neque totam omnis beatae fugiat!</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About