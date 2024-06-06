import Link from "next/link"
import Image from 'next/image';
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui/button"
const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container py-5 relative z-30">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={180} height={100}/>
      </Link>
      <ul className="hidden lg:flex gap-12 h-full">
        {NAV_LINKS.map((link) => (
            <li key={link.key}>
                <Link
                href={link.href}
                className="cursor-pointer regular-16  text-purple-700 flexCenter pb-1.5 hover:font-bold hover:text-purple-400 transition-all"
                >
                {link.label}
                </Link>
            </li>
            ))}
      </ul>
      <div className="flexCenter">
      <Button className="bg-purple-400 text-white">Get Started</Button>
      </div>
    </nav>
  )
}

export default Navbar
