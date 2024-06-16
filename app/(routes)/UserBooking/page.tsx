import BookingHistoryList from '@/components/BookingHistoryList'
import React from 'react'

const UserBooking = () => {
  return (
    <div className='padding-container  py-5  lg:py-10 '>
      <h2 className='font-bold text-[20px]'>My Booking</h2>
      <BookingHistoryList/>
    </div>
  )
}

export default UserBooking
