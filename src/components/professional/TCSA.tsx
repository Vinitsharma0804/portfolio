import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { Heading } from '@/components/Heading'


export function TCSA() {
  return (
    <div className="px-6  lg:px-8">
      <div className="mx-auto text-black dark:text-white text-base leading-7 text-gray-700">
        <Heading id="" level={2} className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
        Tata Consultancy Services
        </Heading>
        <span className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Assistant System Engineer</span>
        <div className='flex flex-col items-start justify-start' >
            <p className="mt-6 text-lg m-0 p-0 leading-8">
            Mumbai, India
            </p>
            <p className="text-lg m-0 p-0 leading-8">
            June 2021 - April 2022
            </p>
        </div>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8">
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Completed structured onboarding and knowledge transfer (KT) sessions covering Java, SQL, HTML, Struts, OOP principles, application architecture, and enterprise support processes.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Set up and configured local development environments in coordination with the Build/DevOps team, gaining exposure to CI/CD pipelines, deployment workflows, and Git-based version control.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Participated in client meetings to understand business processes, stakeholder expectations, and requirement analysis techniques in real-world enterprise environments.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Assisted in business and functional analysis, converting requirements into technical specifications and design documentation using a hybrid Waterfall methodology with structured, phase-wise deliverables.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Supported application maintenance and production support, performing root cause analysis, debugging Java-based applications, and resolving issues within defined SLA timelines.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Implemented fixes and enhancements for Change Requests (CRs) and Fix / Trouble Reports (FTRs) while adhering to coding standards and documentation practices.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}