'use client'
import { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { data } = useSession();

  useEffect(() => {}, [data]);

  return (
    <nav className="flexBetween max-container padding-container py-5 relative z-30 shadow-sm">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={180} height={100} />
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
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <Image
                  src={data.user.image || "/default-avatar.png"}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/UserBooking">My Booking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button className="bg-purple-400 text-white" onClick={() => signIn("descope")}>
            Login / Sign Up
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
