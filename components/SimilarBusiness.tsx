"use client"
import { useEffect, useState } from "react";
import { Button } from './ui/button'
import { Notebook } from 'lucide-react'
import GlobalApi from '@/app/api/GlobalApi';
import BookingSection from '@/components/BookingSection';
import Image from 'next/image'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SimilarBusiness = ({ business }) => {
  const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
    business&&getBusinessList();
    },[business])

    const getBusinessList=()=>{
      GlobalApi.getBusinessByCategory(business?.category?.name).then(resp=>{
      setBusinessList(resp?.businessLists)
  })
  }
  return business?.name&&(
    <div className='md:pl-10'>
      <BookingSection  business={business}>
        <Button className='bg-purple-400 text-white flex gap-2 w-full'>
          <Notebook/>        
          Book Appointment  
        </Button>
      </BookingSection>
      <div className="hidden md:block">
        <h2 className="font-bold text-lg mt-3 mb-3">Similar Business</h2>
        <div>
        {businessList&&businessList.map((business,index)=>( 
          <Link  href={'/details/'+business.id} className="flex gap-2 mb-2 hover:border border-purple-400
          rounded-lg p-2 cursor-pointer hover:shadow-md">
            <Image src={business.image[0].url}
                  alt={business.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-lg"
            />  
            <div>
              <h2 className="font-bold">{business.name}</h2>
              <h2 className="text-purple-400">{business.contactPerson}</h2>
              <h2 className="text-gray-500">{business.address}</h2>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  )
}

export default SimilarBusiness
