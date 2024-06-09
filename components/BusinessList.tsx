import Image from 'next/image'
import Link from 'next/link'
import { Button } from "./ui/button";
const BusinessList = ({businessList,title}) => {
   
  return (
    <section className="mt-5 padding-container">
      <h2 className="medium-14 text-purple-700">{title}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 gap-6 mt-5'>
      {businessList.length>0?businessList.map((business,index)=>(
            <Link href={'/search/'+business.name}  key={index} className='shadow-md 
            rounded-lg hover:shadow-lg cursor-pointer
             hover:shadow-purple-400
             hover:scale-105 transition-all ease-in-out'>
                
                <Image src={business.image[0].url}
                alt='icon'
                width={500}
                height={200}
                className="h-[150px] md:h-[200px] object-cover rounded-lg"
                />  
                <div className="flex flex-col items-baseline p-3 gap-1">
                  <h2 className="p-1 bg-purple-200 text-purple-700 rounded-full regular-14 px-2">{business.category.name}</h2>
                  <h2 className="font-bold text-lg">{business.name}</h2>
                  <h2 className="text-purple-400">{business.contactPerson}</h2>
                  <h2 className="text-gray-500 text-sm">{business.address}</h2>
                  <Button className="bg-purple-700 text-white rounded-lg mt-3">Book Now</Button>
                </div>          
            </Link>
        )):
        // loading effect if until data come from server
            [1,2,3,4,5,7,8].map((item,index)=>(
                <div key={index} className='h-[300px]
                w-full bg-purple-200 animate-pulse
                rounded-lg'>

                </div>
            ))
        }
      </div>
    </section>
  )
}

export default BusinessList
