import Link from 'next/link'
import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
const Start: React.FC = () => {
  return (
    <div className="lg:w-2/3 w-full mx-auto my-10">
      <div className="flex flex-col lg:flex-row justify-start items-center space-x-0 lg:space-x-4">
        <div
          className="w-full lg:w-80 flex flex-col border-2 border-transparent
          justify-center items-center space-y-2 sm:items-start"
        >
          <h4 className="font-medium text-gray-800">Make a difference</h4>
          <h1 className="text-4xl font-medium">
            Fundraise <br /> for...
          </h1>
        </div>
        <Link
          href={'/'}
          className="w-full lg:w-80 flex flex-col border-2 border-transparent
          justify-center items-center space-y-4 rounded-lg hover:border-[#FF005C]
          transition-all duration-300 ease-in-out cursor-pointer mt-4 lg:mt-0"
        >
          <img
            src="https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVuZHJhaXNlJTIwZm9yJTIwbWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="health"
          />
          <h4 className="text-xl font-medium">Medical</h4>
        </Link>
        <Link
          href={'/'}
          className="w-full lg:w-80 flex flex-col border-2 border-transparent
          justify-center items-center space-y-4 rounded-lg hover:border-[#FF005C]
          transition-all duration-300 ease-in-out cursor-pointer mt-4 lg:mt-0"
        >
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVuZHJhaXNlJTIwZm9yJTIwZWR1Y2F0aW9ufGVufDB8fDB8fHww"
            alt="education"
          />
          <h4 className="text-xl font-medium">Education</h4>
        </Link>
        <Link
          href={'/'}
          className="w-full lg:w-80 flex flex-col border-2 border-transparent
          justify-center items-center space-y-4 rounded-lg hover:border-[#FF005C]
          transition-all duration-300 ease-in-out cursor-pointer mt-4 lg:mt-0"
        >
          <img
            src="https://images.unsplash.com/photo-1581059686229-de26e6ae5dc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVtZXJnZW5jeSUyMGZ1bmRyYWlzZSUyMG5hdHVyYWwlMjBkaXNhc3RlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="education"
          />
          <h4 className="text-xl font-medium">Emergency</h4>
        </Link>
      </div>
    </div>
  )
}
export default Start
