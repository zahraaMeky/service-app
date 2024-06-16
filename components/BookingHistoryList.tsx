"use client"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from 'next/image'
import GlobalApi from "@/app/api/GlobalApi";
import { Calendar, Clock, MapIcon, MapPin, User } from "lucide-react";
const BookingHistoryList = () => {
    const {data}=useSession()
    const [bookingHistory,setBookingHistory]=useState([]);

    useEffect(()=>{
        data&&GetUserBookingHistory();
      },[data])
    
    const GetUserBookingHistory=()=>{
        GlobalApi.GetUserBookingHistory(data?.user?.email).then(resp=>{
            setBookingHistory(resp.bookings);
        })
      }
  return (
    <div className="grid grid-cols-1  md:grid-cols-2">
      {bookingHistory.map((booking, index) => (
        <div key={index} className="flex  gap-4 rounded-lg p-4  border mb-5">

        {booking?.businessList?.name &&
            <Image src={booking.businessList.image[0].url}
                    alt='icon'
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
            />
        }
        <div className="flex flex-col gap-2">
            <h2 className="font-bold">{booking?.businessList?.name}</h2>
            <h2  className="flex  gap-2 text-purple-400"><User/>{booking?.businessList?.contactPerson}</h2>
            <h2 className="flex  gap-2 text-gray-500"><MapPin className="text-purple-400"/>{booking?.businessList?.address}</h2>
            <h2 className="flex  gap-2 text-gray-500">
                Service on : <Calendar className="text-purple-400"/>
                <span className="text-black">{booking.date}</span>
            </h2>
            <h2 className="flex  gap-2 text-gray-500">
            Service on : <Clock className="text-purple-400"/>
                <span className="text-black">{booking.time}</span>
            </h2>

        </div>
        </div>
                    
        ))}
    </div>
  )
}

export default BookingHistoryList
