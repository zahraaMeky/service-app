"use client"
import { useEffect, useState } from "react";
import GlobalApi from "../app/api/GlobalApi";
import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList";
import Hero from "@/components/Hero";
import Image from "next/image";
import { CarouselDefault } from "@/components/CarouselDefault";
import Footer from "@/components/Footer";

export default function Home() {
  const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
      getAllBusinessList();
    },[])
  
/**
 * Used to get All Business List
 */
const getAllBusinessList=()=>{
  GlobalApi.getAllBusinessList().then(resp=>{
    setBusinessList(resp.businessLists)
  })
}
  return (
  <>
  <Hero/>
  <CategoryList/>
  <BusinessList businessList={businessList}
      title={'Popular Business'} />
  <CarouselDefault/>
  <Footer/>
  </>
  );
}
