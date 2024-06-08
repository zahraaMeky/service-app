"use client"
import { useEffect, useState } from "react";
import GlobalApi from "../app/api/GlobalApi";
import Image from 'next/image'
import Link from 'next/link'
const CategoryList = () => {
    const [categoryList,setCategoryList]=useState([]);
    useEffect(()=>{
        getCategoryList();
      },[])
    
      /**
       * Used to get All Category List
       */
      const getCategoryList=()=>{
        GlobalApi.getCategory().then(resp=>{
          setCategoryList(resp.categories);
        })
      }
  return (
    <section className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3
    md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {categoryList.length>0?categoryList.map((category,index)=>(
            <Link href={'/search/'+category.name}  key={index} className={`flex flex-col items-center
             justify-center gap-2
             bg-purple-200 p-5 rounded-lg
             cursor-pointer hover:scale-110 transition-all ease-in-out
             `}>
                
                <Image src={category.image.url}
                alt='icon'
                width={35}
                height={35}
                />
                <h2 className='text-purple-700'>{category.name}</h2>
            </Link>
        )):
        // loading effect if until data come from server
            [1,2,3,4,5,6].map((item,index)=>(
                <div key={index} className='h-[120px]
                w-full bg-purple-200 animate-pulse
                rounded-lg'>

                </div>
            ))
        }
    </section>
  )
}

export default CategoryList
