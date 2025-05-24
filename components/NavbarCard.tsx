"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'


const navbarItem = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "MyCompanions",
    href: "/companions"
  },
  {
    label: "MyJourney",
    href: "/my-journey"
  },
]


const NavbarCard = () => {
  const pathname = usePathname()

  return (
    <div className='flex items-center  gap-4'>
      {
        navbarItem.map(({ label, href }) => (


          <Link href={href} key={label} className={cn(pathname === href && 'text-primary font-semibold text-orange-500')}>{label}</Link>
        ))
      }
    </div>
  )
}

export default NavbarCard