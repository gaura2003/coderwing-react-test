import React from 'react'
import Navbar from './Navbar'
import Categories from './Categories'
import banner from '../../assets/banner.png'
import arrow from '../../assets/right-arrow.png'
import Products from './Products'
import Tag from './Tag'
import Button from './Button'
import CategoryBrowse from './CategoryBrowse'
import Features from './Features'
import Footer from './Footer'


function Home() {
    const Category= [
        {
            title:'Women\'s Fashion',
            icon : arrow
        },
        {
            title:'Men\'s Fashion',
            icon : arrow
        },
        {
            title:'Electronics'
        },
        {
            title:'Home & Lifestyle'
        },
            {
            title:'Medicine'
        },
        {
            title:'Sports & Outdoor'
        },
        {
            title:'Baby\'s & Toys'
        },
        {
            title:'Groceries & Pets'
        },
        {
            title:'Health & Beauty'
        },
       
    ];
  return (
    <>
    <Navbar />
    <div className='mt-24 px-24 py-5'>
       <div className='flex gap-16'>
       <Categories Categories={Category} />
       <img src={banner} alt="" className='w-3/5' />
       </div>
       <div>
        <Tag name={"Today's Deals"} />
        <Products />
        <Button text={"View All Products"} style={"bg-red-500 text-white mx-auto px-12 py-2 rounded-md"}  />
       </div>
       <div>
        <Tag name={"Categories"} />
        <CategoryBrowse />
       </div>
       <div>
        <Tag name={"This Month"} />
        <Products />
       </div>
        <Features/>
    </div>
        <Footer />
    </>
  )
}

export default Home