"use client"
import { SignIn, useUser } from '@clerk/nextjs'

export default function Page() {

const user = useUser()
console.log("users check", user)

return <main className='flex items-center justify-center'>
    <SignIn />
  </main>
}