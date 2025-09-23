import React from 'react'
import errorImage from "./../../public/screens/404.jpg"
import Image from 'next/image'

const ErrorPage = () => {
  return (
    <div className='w-full md:[80%] mx-auto px-5 my-5 md:p-0'>
        <Image src={errorImage} alt='404 Not Found ' />
    </div>
  )
}

export default ErrorPage