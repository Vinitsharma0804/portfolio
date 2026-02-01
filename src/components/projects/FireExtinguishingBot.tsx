import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { Heading } from '@/components/Heading'

export function FireExtinguishingBot() {
  return (
    <div className="px-6 lg:px-8 pb:8 lg:pb-16">
      <div className="mx-auto text-black dark:text-white text-base leading-7 text-gray-700">
        <Heading id="fire-extinguishing-autonomous-bot" level={2} className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
          Fire-Extinguishing Autonomous Bot
        </Heading>
        <span className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">A hardware-software project aimed at improving safety in emergency situations.</span>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8">
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Designed an autonomous robot to detect and extinguish fire
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Integrated sensors and actuators for reliable environment sensing
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Implemented simple yet robust control logic for dependable operation
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Tested and refined navigation and fire-extinguishing behavior for consistency
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

