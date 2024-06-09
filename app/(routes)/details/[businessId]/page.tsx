"use client"
import { signIn, useSession } from "next-auth/react"

const BusinessDetail = () => {
    const {data,status}=useSession()
    if(status == "loading"){
        return(<p>Loading........</p>)
    }
    if(status=="unauthenticated"){
        signIn("descope")
    }
  return status=="authenticated" &&(
    <div>
      BusinessDetail
    </div>
  )
}

export default BusinessDetail
