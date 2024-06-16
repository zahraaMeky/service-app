"use client"
import { useEffect, useState } from "react";
import moment from 'moment'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "./ui/button";
import GlobalApi from "@/app/api/GlobalApi";
import { useSession } from "next-auth/react";
import { toast } from 'sonner';

const BookingSection = ({children,business}) => {
    const [date, setDate] = useState(new Date())
    const [timeSlot,setTimeSlot]=useState([]);
    const [selectedTime,setSelectedTime]=useState();
    const [bookedSlot,setBookedSlot]=useState([]);
    const {data}= useSession()

    useEffect(()=>{
        getTime();
       
    },[])
    useEffect(()=>{
        date&&BusinessBookedSlot();
       
    },[date])

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
  
        setTimeSlot(timeList)
      }
   
    const saveBooking = () => {
        GlobalApi.CreateNewBooking(
            business.id,
            moment(date).format('DD-MMM-yyyy') ,
            selectedTime,
            data.user.email,
            data.user.name
        )
        .then((resp) => {
            console.log(resp);
            if (resp) {
                setDate();  // Resetting date state
                setSelectedTime();  // Resetting selectedTime state
                toast("Service booked successfully!");
            }
        })
        .catch((e) => {
            toast("Error while creating booking");
        });
    }
    
    const isSlotBooked =(time) => {
        return bookedSlot.find(item => item.time == time)
    };
    

    const BusinessBookedSlot=()=>{
        GlobalApi.BusinessBookedSlot(business.id,moment(date).format('DD-MMM-yyyy')).then(resp=>{
        setBookedSlot(resp?.bookings)
    })
    }
            
  return (
    <div>
        <Sheet>
            <SheetTrigger asChild>
            {children}
            </SheetTrigger>
            <SheetContent className="overflow-auto">
                <SheetHeader>
                <SheetTitle>Book an Service</SheetTitle>
                <SheetDescription>
                Select Date and Time slot to book an service
                <div className="flex flex-col items-baseline gap-5">
                    <h2 className="mt-5 font-bold">Select Date</h2>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </div>
                <h2 className="my-5 font-bold">Select TIme Slot</h2>
                <div className='grid grid-cols-3 gap-3'>
                    {timeSlot.map((item, index) => (
                        <Button 
                            key={index}
                            disabled={isSlotBooked(item.time)}
                            variant="outline"
                            className={`border rounded-full 
                                p-2 px-3 hover:bg-purple-400
                                 hover:text-white
                                 ${selectedTime==item.time&&'bg-purple-400 text-white'}`}
                                onClick={()=>setSelectedTime(item.time)}

                        >
                            {item.time}
                        </Button>
                    ))}

                </div>
                </SheetDescription>
                </SheetHeader>
                <SheetFooter className="mt-5">
                    <SheetClose asChild>
                        <div className="flex gap-5">
                            <Button className="bg-purple-700 text-white">Cancel</Button>
                            <Button className="bg-purple-400 text-white"
                             disabled={!(selectedTime&&date)}
                             onClick={()=>saveBooking()}


                            >Book</Button>

                        </div>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
  

    </div>
  )
}

export default BookingSection

