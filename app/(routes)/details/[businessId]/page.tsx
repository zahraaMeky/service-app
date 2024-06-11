"use client"
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react"
import GlobalApi from "@/app/api/GlobalApi";
import BusinessInfo from "@/components/BusinessInfo";
import BusinessDescription from "@/components/BusinessDescription";
import SimilarBusiness from "@/components/SimilarBusiness";

const BusinessDetail = ({params}) => {
    const {data,status}=useSession()
    const [businessDetails,setBusinessDetails]=useState([]);

    console.log(params.businessId)
    const checkUserAuthenticated =()=>{
        if(status == "loading"){
          return(<p>Loading........</p>)
        }
        if(status=="unauthenticated"){
            signIn("descope")
        }

      }
   
      useEffect(()=>{
        checkUserAuthenticated();
        },[])  

    useEffect(()=>{
      params&&BusinessDetailsByID();
      },[params])
    
    const BusinessDetailsByID=()=>{
       GlobalApi.getBusinessByID(params.businessId).then(resp=>{
        setBusinessDetails(resp.businessList);
      })
    }
    return status=='authenticated'&&businessDetails&&(
    <div className="py-8 md:py-20 padding-container">
      <BusinessInfo business = {businessDetails}/>
      <div className="grid grid-cols-3 mt-16">
        <div className="col-span-3 md:col-span-2 order-last md:order-first">
          <BusinessDescription business = {businessDetails}/>
        </div>
        <div>
          <SimilarBusiness business = {businessDetails}/>
        </div>
      </div>
    </div>
  )
}

export default BusinessDetail
