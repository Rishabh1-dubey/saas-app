
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getUserCompanions, getUserSessions } from '@/lib/action/companion.actions'
import Image from 'next/image'
import CompantionList from '@/components/CompantionList'
import companions from '../companions/page'

const MyJourney = async () => {

  const user = await currentUser()

  if (!user) redirect('/sign-in')

  const companion = await getUserCompanions(user.id)
  const sessionHistory = await getUserSessions(user.id)
  return (
    <main className='min-lg:w-3/4'>


      <section className='flex justify-between gap-4 max-sm:flex-col items-center'>
        <div className='flex gap-4 items-center'>
          <Image src={user.imageUrl} alt={user.firstName!} className='rounded-xl' width={110} height={110} />
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-2xl'>{user.firstName} {user.lastName}</h1>
            <p className='text-sm text-muted-foreground'>{user.emailAddresses[0].emailAddress}</p>
          </div>
        </div>

        <div className='flex gap-4'>
          <div className='border border-black rounded-lg p-3 gap-2 flex flex-col h-fit'>
            <div className='flex gap-2 items-center'>
              <Image src="/icons/check.svg" alt='checkmark' width={22} height={22} />
              <p className='text-2xl font-bold'>{sessionHistory.length}</p>
            </div>
            <div>Lession Complete</div>
          </div>

          <div className='border border-black rounded-lg p-3 gap-2 flex flex-col h-fit'>
            <div className='flex gap-2 items-center'>
              <Image src="/icons/cap.svg" alt='checkmark' width={22} height={22} />
              <p className='text-2xl font-bold'>{companion.length}</p>
            </div>
            <div>Session Created</div>
          </div>
        </div>
      </section>
      <Accordion type="multiple">
        <AccordionItem value="recent">
          <AccordionTrigger className='text-2xl font-bold'>Recent Sessions</AccordionTrigger>
          <AccordionContent>
            <CompantionList title='Recent Sessions' companions={sessionHistory} />
          </AccordionContent>
        </AccordionItem>
        {/* ------------------------------------- companions components ------------------ */}
        <AccordionItem value="companions">
          <AccordionTrigger className='text-2xl font-bold'>My Companions {`(${companions.length})`}</AccordionTrigger>
          <AccordionContent>
            <CompantionList title=' My Companions' companions={companion} />
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    </main>
  )
}

export default MyJourney