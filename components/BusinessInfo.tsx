import React from 'react'
import Image from 'next/image'
import { Clock, Mail, MapPin, Share, User } from 'lucide-react'
import { Button } from './ui/button'

interface Business {
  name: string;
  image: { url: string }[];
  category?: { name: string };
  address: string;
  email: string;
  contactPerson: string;
}

interface BusinessInfoProps {
  business: Business;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ business }) => {
  console.log(business)
  return business?.name && (
    <div className='md:flex gap-4 items-center'>
      <Image 
        src={business.image[0].url}
        alt={business.name}
        width={150}
        height={200}
        className='rounded-full h-[150px] object-cover'
      />
      <div className='md:flex items-center justify-between w-full'>
        <div className='flex flex-col items-baseline gap-3 mt-4 md:mt-0'>
          <h2 className="p-1 bg-purple-200 text-purple-700 rounded-full regular-14 px-3">
            {business?.category?.name}
          </h2>
          <h2 className="text-[40px] font-bold">{business.name}</h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <MapPin />{business.address}
          </h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <Mail />{business.email}
          </h2>
        </div>
        <div className='flex flex-col gap-5 items-end'>
          <Button className='bg-purple-400 text-white'>
            <Share />
          </Button>
          <h2 className='flex gap-2 text-xl text-purple-400'>
            <User />{business.contactPerson}
          </h2>
          <h2 className='flex gap-2 text-xl text-gray-500'>
            <Clock />Available 8:00 AM to 10:PM
          </h2>
        </div>
      </div>
    </div>
  )
}

export default BusinessInfo
