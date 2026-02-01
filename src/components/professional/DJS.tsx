
import { Heading } from '@/components/Heading'

export function DJS() {
  return (
    <div className="w-full py-8">
      <div className="text-black dark:text-white text-base leading-7 text-gray-700">
        <Heading id="be-electronics" level={2} className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
        B.E. - Electronics and Telecommunication
        </Heading>
        <span className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">D. J. Sanghvi College of Engineering</span>
        <div className='flex items-start justify-start gap-8 mt-4' >
            <p className="text-lg m-0 p-0 leading-8">
            Aug 2018 - May 2021
            </p>
            <div className='border h-full min-h-8 border-white' />
            <p className="text-lg m-0 p-0 leading-8">
            CGPA : <strong>8.27/10</strong>
            </p>
        </div>
      </div>
    </div>
  )
}
