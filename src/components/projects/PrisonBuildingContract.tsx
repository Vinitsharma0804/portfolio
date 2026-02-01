import { CheckCircleIcon, LinkIcon } from '@heroicons/react/20/solid'
import { Heading } from '@/components/Heading'
import { Button } from '../Button'

export function PrisonBuildingContract() {
  return (
    <div className="px-6 pb:8 lg:pb-16 lg:px-8">
      <div className="mx-auto text-black dark:text-white text-base leading-7 text-gray-700">
        <Heading id="prison-building-contract" level={2} className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
          MongoDB Data Processing
        </Heading>
        <span className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">A hands-on NoSQL data processing and analytics project.</span>
        <Button target='_blank' href="https://github.com/Vinitsharma0804/MongoDB" className='flex gap-2 justify-start items-center mt-4' >
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
              Set up and configured MongoDB environments
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Designed aggregation pipelines using $match, $project, $group, $sort, and $count
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Transformed large datasets into structured, meaningful outputs
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Focused on efficient querying and performance optimization
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

