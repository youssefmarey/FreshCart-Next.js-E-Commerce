import getAllCategories from '@/app/apis/allCategores';
import React from 'react'
import SwiperCategory from '../SwiperCategory/SwiperCategory';
import { category } from '@/types/category.type';

const CategorySlide = async () => {

    const data: category[] = await getAllCategories()

   
    
  return (
    <div className='mb-5'>
        <SwiperCategory categories={data}/> 
    </div>
  )
}

export default CategorySlide