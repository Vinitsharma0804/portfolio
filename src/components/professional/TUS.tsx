
import { Heading } from '@/components/Heading'

export function TUS() {
  return (
    <div className="w-full py-8">
      <div className="text-black dark:text-white text-base leading-7 text-gray-700">
        <Heading id="msc-data-analytics" level={2} className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
        MSc in Data Analytics
        </Heading>
        <span className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Technological University of The Shannon</span>
        <div className='flex items-start justify-start gap-8 mt-4' >
            <p className="text-lg m-0 p-0 leading-8">
            Sept 2024 - Sept 2025
            </p>
            <div className='border h-full min-h-8 border-white' />
            <p className="text-lg m-0 p-0 leading-8">
            Overall Score : <strong>73.94%</strong>
            </p>
        </div>
      </div>
    </div>
  )
}
