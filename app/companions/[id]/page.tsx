import { getCompanion } from '@/lib/action/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import { auth, currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import React from 'react'
import companions from '../page';
import CompanionComponent from "@/components/CompanionComponent";

interface CompanionSessionPageprops {
  params: Promise<{ id: string }>;
}

const CompanionSession = async ({ params }: CompanionSessionPageprops) => {

  const { id } = await params;
  const {name,topic,subject,duration} = await getCompanion(id);
  const user = await auth()
  // sometime use auth instead of currentUser ()
 
console.log("user",user)


  if (!user) redirect('/sign-in');
  if (!companions) redirect('/companions')




  return (
    <main>
      <article className='flex rounded-border justify-between p-6 max-md:flex-col'>


        <div className='flex items-center gap-2'>
          <div className='size-[72px] flex items-center justify-center rounded-lg max-md:hidden' style={{ backgroundColor: getSubjectColor(subject) }}>
            <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <p className='font-bold text-2xl'>{name}</p>
             <div className='subject-badge max-sm:hidden'>
             {subject}
            </div>
            </div>
            <p className='text-lg'>{topic}</p>
          </div>
        </div>
<p className='text-xl max-md:hidden items-start'>{duration}mintues</p>

      </article>
       <CompanionComponent  {...companions}
                companionId={id}
                userName={"User"}
                />
    </main>
  )
}

export default CompanionSession