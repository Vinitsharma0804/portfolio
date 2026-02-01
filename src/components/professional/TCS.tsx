import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { Heading } from '@/components/Heading'

export function TCS() {
  return (
    <div className="px-6  lg:px-8">
      <div className="mx-auto text-black dark:text-white text-base leading-7 text-gray-700">
        <Heading id="tata-consultancy-services" level={2} className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
        Tata Consultancy Services
        </Heading>
        <span className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">System Engineer</span>
        <div className='flex flex-col items-start justify-start' >
            <p className="mt-6 text-lg m-0 p-0 leading-8">
            Mumbai, India
            </p>
            <p className="text-lg m-0 p-0 leading-8">
            June 2021 - Sept 2022
            </p>
        </div>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8">
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Designed, developed, and maintained dynamic web applications using Java, SQL for backend development, HTML for frontend, and the Struts framework. Demonstrated adaptability by progressively learning and applying new skills along with OOP concepts in real-time.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Collaborated with clients to gather requirements and deliver tailored solutions aligned with business goals.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Conducted comprehensive business analysis to translate user requirements into actionable development plans, increased project efficiency by 10% by applying the Waterfall (hybrid) model for structured, sequential development and thorough documentation at each stage.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Ensured timely delivery via Scrum meetings, using Bugzilla for task tracking and Git for deployments.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Provided high-level support to clients via an e-ticketing system, ensuring efficient resolution of technical issues. Successfully resolved 95% of problems within 5-10 minutes, significantly boosting client satisfaction.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Demonstrated expertise in debugging and problem-solving, improving application performance, stability and achieving a 20% reduction in technical issues and ensuring smoother user experiences.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
