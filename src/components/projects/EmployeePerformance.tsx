import { CheckCircleIcon, LinkIcon } from '@heroicons/react/20/solid'
import { Heading } from '@/components/Heading'
import Link from 'next/link'
import { Button } from '../Button'

export function EmployeePerformance() {
  return (
    <div className="px-6 pb:8 lg:pb-16 lg:px-8">
      <div className="mx-auto text-black dark:text-white text-base leading-7 text-gray-700">
        <Heading id="stock-market-prediction" level={2} className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
            Employee Performance & Compensation Analysis
        </Heading>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Interactive Tableau dashboard for workforce performance and satisfaction analysis</h2>
        <Button target='_blank' href="https://github.com/Vinitsharma0804/DataVisualisation" className='flex gap-2 justify-start items-center mt-4' >
        <span className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
          Github
        </span>
        <LinkIcon className="h-4 w-4 aspect-square" />
        </Button>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8">
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Analyzed a 72,000+ record employee dataset spanning 11 years to uncover performance, satisfaction, and training trends using data visualization techniques.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Designed an interactive Tableau dashboard with filters, parameters, and calculated fields to enable branch-, department-, and performance-level drill-down analysis.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Delivered actionable workforce insights by identifying top-performing branches and departments and highlighting key drivers such as employee satisfaction and training.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

