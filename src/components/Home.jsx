import React from 'react'

const Home = ({value}) => {
  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
            <h3 className={`${value == 'dark' ? 'text-black font-medium mt-5 md:p-2 bg-green-200  rounded-full p-1':'font-semibold md:p-2 bg-green-200 p-1 rounded-full '}`}>We are on Linkdin <span className='text-sm underline cursor-pointer'>Just take a peek</span></h3>
            <h1 className='md:text-6xl text-4xl text-center font-bold my-3 select-none'>Get Into The Design World <br /> With Critic Designs</h1>
            <h3 className='text-center text-zinc-500 md:text-xl text-sm font-semibold mb-6'>Our goal at Critic Designs is to help you advance in your design career, <br /> and to make lifelong friends along the way.</h3>
            <button className='md:p-2 bg-[#744DFF] p-1 font-normal text-white md:font-medium rounded-md'>Join Discord Community</button>
        
    </div>
  )
}

export default Home