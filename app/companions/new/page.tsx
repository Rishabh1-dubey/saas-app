import CompanionFrom from '@/components/CompanionFrom'
import React from 'react'

const page = () => {
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className='w-2/3  gap-4 flex  flex-col' >
        <h1 className='mb-2'> Companion Buiulder</h1>
        <CompanionFrom/>
      </article>

    </main>
  )
}

export default page