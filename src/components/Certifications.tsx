import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { Heading } from '@/components/Heading'

export function Certifications() {
  return (
    <div className="px-6 lg:px-8 pb:8 lg:pb-16">
      <div className="mx-auto text-black dark:text-white text-base leading-7 text-gray-700">
      <span className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Training & Certifications</span>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8">
            <li className="flex items-center gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-8 w-8 flex-none text-emerald-600" />
              <span className="mt-2 text-md font-bold tracking-tight text-black dark:text-white sm:text-xl">Spring Boot 3 Essential Training, 2025</span>
            </li>
            <li className="flex items-center gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-8 w-8 flex-none text-emerald-600" />
              <span className="mt-2 text-md font-bold tracking-tight text-black dark:text-white sm:text-xl">Learning GitHub Actions Event-Driven Automation for Your Codebase, 2025</span>
            </li>
            <li className="flex items-center gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-8 w-8 flex-none text-emerald-600" />
              <span className="mt-2 text-md font-bold tracking-tight text-black dark:text-white sm:text-xl">MongoDB Aggregation Pipeline: Advanced Data Analysis and Manipulation, 2025</span>
              
            </li>
            <li className="flex items-center gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-8 w-8 flex-none text-emerald-600" />
              <span className="mt-2 text-md font-bold tracking-tight text-black dark:text-white sm:text-xl">SQL for Data Science, 2020</span>
              
            </li>
            <li className="flex items-center gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-8 w-8 flex-none text-emerald-600" />
              <span className="mt-2 text-md font-bold tracking-tight text-black dark:text-white sm:text-xl">Programming Foundations with JavaScript, HTML and CSS, 2020</span>
               
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

