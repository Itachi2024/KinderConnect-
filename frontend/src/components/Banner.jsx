import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 items-center'>

            {/* ------- Left Side ------- */}
            <div className='flex-1 text-center md:text-left py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    Book Appointment
                </h2>
                <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white mt-4'>
                    with Child Psychiatrists
                </p>
                <button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                    className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>
                    Create account
                </button>
            </div>

            {/* ------- Right Side (YouTube Video) ------- */}
            <div className='relative w-full md:w-[400px] lg:w-[450px] aspect-video rounded-lg overflow-hidden shadow-lg'>
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/Gkk5QlqnXpU?autoplay=1&loop=1&mute=1&playlist=Gkk5QlqnXpU"
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

        </div>
    )
}

export default Banner
