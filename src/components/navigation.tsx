import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  //UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import Link from "next/link";

export default function Navigation() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <Image
          src="/globe.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          width={24}
          height={24}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 space-x-4">
        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </SignedOut>
        {/* <UserButton /> */}
        <SignedIn>
          <SignOutButton />
          <Link href="/user-profile">Profile</Link>
        </SignedIn>

        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/">About</NavbarLink>
        <NavbarLink href="/">Services</NavbarLink>
        <NavbarLink href="/">Pricing</NavbarLink>
        <NavbarLink href="/">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
