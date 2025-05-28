import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>Start Learning your way</div>
      <h2 className='text-3xl font-bold'>
        BUild and Personlize Learning Companion
      </h2>
      <p>Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.</p>
      <Image src="images/cta.svg" alt='cta' width={362} height={232} />
      <Button className='btn-primary bg-orange-500 '>
        <Image className="" src="icons/plus.svg" alt='plus' width={12} height={12} />
        <Link href="/companions/new">
          <p className=''>Build a New Companion</p></Link>

      </Button>
    </section>
  )
}

export default CTA