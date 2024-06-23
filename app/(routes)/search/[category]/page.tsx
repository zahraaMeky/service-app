
"use client"
import GlobalApi from '@/app/api/GlobalApi';
import BusinessList from '@/components/BusinessList';
import React, { useEffect, useState } from 'react'
const page = ({ params }: any) => {
    const [businessList,setBusinessList]=useState([]);
    useEffect(()=>{
        console.log(params);
        params&&getBusinessList()
    },[params])
   
    const getBusinessList=()=>{
        GlobalApi.getBusinessByCategory(params.category).then(resp=>{
        setBusinessList(resp.businessLists)
    })
    }
return (
    <div>
        <BusinessList title={params.category} businessList={businessList} />
    </div>
  )
}

export default page
