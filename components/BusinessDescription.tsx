import React from 'react'
import Image from 'next/image'

interface Business {
  name: string;
  about?: string;
  image?: { url: string }[];
}

interface BusinessDescriptionProps {
  business: Business;
}

const BusinessDescription: React.FC<BusinessDescriptionProps> = ({ business }) => {
  if (!business?.name) return null;
  
  return (
    <div>
      <h2 className='font-bold text-[25px]'>Description</h2>
      <p className="text-lg text-gray-600 mt-4">
        {business.about ? business.about : 'No description available.'}
      </p>
      <h2 className='font-bold text-[25px] mt-8'>Gallery</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
        {business?.image?.map((item, index) => (
          <Image
            src={item?.url}
            key={index}
            alt={business.name}
            width={700}
            height={200}
            className='rounded-lg'
          />
        ))}
      </div>
    </div>
  )
}

export default BusinessDescription
