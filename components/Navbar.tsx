"use client"
import React from 'react'
import Image from 'next/image'
import NavbarCard from './NavbarCard'
import Link from 'next/link'
import { SignInButton,SignedOut,UserButton, SignedIn } from '@clerk/nextjs'
import { Button } from './ui/button'


const Navbar = () => {
  return (
   <nav className="navbar ">
      <Link href="/">
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className='flex items-center gap-12  text-base'>
       <NavbarCard/>
      <SignedOut>
      
          <SignInButton>
            <Button className='btn-signin'>Sign In</Button>
          </SignInButton>
          {/* <SignUpButton/> */}
        
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar