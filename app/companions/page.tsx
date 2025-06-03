import CompanionCard from '@/components/CompanionCard';
import SeachInput from '@/components/SeachInput';
import SubjectFilters from '@/components/SubjectFilters';
import { getAllCompanions } from '@/lib/action/companion.actions';
import { getSubjectColor } from '@/lib/utils';


const companions = async ({ searchParams }: SearchParams) => {

  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : ''
  const topic = filters.topic ? filters.topic : ''

  const companions = await getAllCompanions({ subject, topic });


  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companion Library</h1>
        <div className='flex gap-2'>
          <SeachInput/>
          <SubjectFilters/>
        </div>
      </section>

      <section className='companions-grid'>
    
        {companions.map((companion:any) => (
          <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />
        ))}
      </section>
    </main>
  )
}

export default companions