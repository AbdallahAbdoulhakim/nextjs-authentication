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
          <SignInButton>
            <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
              Sign up
            </button>
          </SignUpButton>
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
