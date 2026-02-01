import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { Heading } from '@/components/Heading'

export function LNT() {
  return (
    <div className="w-full">
      <div className="text-black dark:text-white text-base leading-7 text-gray-700">
        <Heading id="larsen-and-toubro" level={2} className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
        Larsen and Toubro
        </Heading>
        <span className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Intern (Software Engineer)</span>
        <div className='flex flex-col items-start justify-start' >
            <p className="mt-6 text-lg m-0 p-0 leading-8">
            Mumbai, India
            </p>
            <p className="text-lg m-0 p-0 leading-8">
            May 2017 - June 2012
            </p>
        </div>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8">
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Assisted in designing and building integrated hardware-software systems under senior engineer guidance.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Developed and tested system-level components to ensure correct interaction between software and hardware layers.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Supported debugging, validation, and functional testing activities.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Participated in design reviews and technical documentation to support maintainable solutions.
              </span>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}
