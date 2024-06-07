import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Search } from "lucide-react"
import Image from 'next/image'
const Hero = () => {
    return (
      <section className="flexBetween flex-col w-full h-auto gap-20 py-5  md:gap-28 lg:py-10 lg:flex-row padding-container">
        <div className="flex flex-col flexCenter gap-5 md:w-[50%] w-full">
            <div className="flex flex-col">
                <h2 className="text-[40px] font-bold text-center text-purple-700">Find Home 
                    <span className="text-purple-400"> Services </span> <br/> 
               near you
                </h2>
                <p className="text-xl text-purple-700  text-center">Explore Home Services and Repairs near you</p>
            </div>
            <div className="flex gap-4 items-center  mt-4">
                <Input placeholder="Search" className="rounded-full   md:w-[350px] bg-transparent border-purple-700"/>
                <Button className="bg-purple-400 text-white rounded-full h-[46px]">
                    <Search className="h-4 w-4"/>
                </Button>
            </div>
        </div>
        <div className="md:w-[50%] w-full">
            <Image src="/hero.png" width={500} height={500} alt="hero"/>
        </div>

      </section>
    )
  }
  
  export default Hero
  