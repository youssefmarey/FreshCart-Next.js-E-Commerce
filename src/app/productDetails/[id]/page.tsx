import getSingleProduct from '@/app/apis/singleProudct'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const productDetails = async ({params}: {params:{id:string}}) => {
  const {id} = await params

  const data = await getSingleProduct(id)

 
  
  return (
    <div className='w-full md:w-[80%] mx-auto my-10 flex md:flex-row flex-col items-center'>
     
      <div className='w-full md:w-1/3'>
      <Image width={500} height={500} src={data.imageCover} alt={data.category.name} />
      </div>
      <div className='w-full md:w-2/3 m-10 ps-10'>
      <h2 className='text-2xl text-green-500 font-bold' > {data.title} </h2>
      <p className='mt-5'> {data.description} </p>
      <p className='mt-5'> {data.category.name} </p>

      <div className="flex my-5 justify-between w-full items-center">
                    <p>{data.price} EGP</p>
                    <p>{data.ratingsAverage} <i className="fa-solid fa-star text-yellow-300"></i> </p>
                  </div>
      <Button variant="default" className='w-full'>Add To Cart</Button>
      </div>
    </div>
  )
}

export default productDetails