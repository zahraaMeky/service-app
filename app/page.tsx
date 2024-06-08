import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero/>
  <CategoryList/>
  <BusinessList  title={'Popular Business'}/>
  </>
  );
}
