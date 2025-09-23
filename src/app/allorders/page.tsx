import React from 'react'
import { getUserOrders } from '../apis/getUserOrders'
import { CartItem, Order, Orders } from '@/types/order.type';
import Image from 'next/image';

const AllOrders = async () => {

  const data: Orders = await getUserOrders()

  

  return (
    <div className='w-full md:w-[80%] px-5 md:px-0 mx-auto my-10 ' >
      <div className="allOrders">
        {data.map(function(order: Order , idx:number){return <div key={idx} className='p-5 rounded-2xl bg-slate-100 mb-5'>
              <div className="flex border-b-[1px] border-green-700/35 pb-5 ">
                {order.cartItems.map(function(item:CartItem , idx: number) {return <div key={idx}  className='w-1/6 ms-4'>
                  <Image src={item.product.imageCover} alt={item.product.title} width={200} height={200} className='w-full rounded-2xl' />
                  <h1 className='line-clamp-1 mt-2 text-center' >{item.product.title}</h1>
                </div> })}
              </div>

              <div className='p-5'>
                <h2 className='text-lg text-green-700 font-mono text-center ' >Payment Method Type: {order.paymentMethodType}</h2>
                <h2 className='text-lg mt-2 text-green-700 font-mono text-center' >Total Order Price: {order.totalOrderPrice} EGP </h2>
              </div>

        </div> })}
      </div>
    </div>
  )
}

export default AllOrders