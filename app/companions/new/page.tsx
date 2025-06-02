
import CompanionFrom from '@/components/CompanionFrom'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'



const NewCompanion =async() => {

  const {userId} = await auth()

  if(!userId) redirect('/sign-in')

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className='h-screen gap-4 flex  flex-col' >
        <h1 className='w-[700px]'> Companion Builder</h1>
        <CompanionFrom />
      </article>

    </main>
  )
}

export default NewCompanion