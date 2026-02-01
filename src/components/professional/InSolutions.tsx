import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { Heading } from '@/components/Heading'

export function InSolutions() {
  return (
    <div className="px-6  lg:px-8">
      <div className="mx-auto text-black dark:text-white text-base leading-7 text-gray-700">
        <Heading id="in-solutions-global" level={2} className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400">
          In-Solutions Global Ltd
        </Heading>
        <span className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Software Engineer</span>
        <div className='flex flex-col items-start justify-start' >
            <p className="mt-6 text-lg m-0 p-0 leading-8">
            Mumbai, India
            </p>
            <p className="text-lg m-0 p-0 leading-8">
            Sept 2022 - Aug 2024
            </p>
        </div>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8">
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
                Developed web applications with a focus Java, SQL, using Agile methodologies, delivered reliable solutions for business requirements and increased efficiency by 15%.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Led development of REST APIs with Spring, enhancing data flow and system integration, got frontend exposure in Angular and Typescript through on-the-job learning and training. Improved existing standards of APIs leading to increase in a APIs usage by 25%.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Implemented version control and deployment processes with Git, ensuring smooth release cycles and supporting DevOps practices.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Integrated seamlessly into cross-functional teams like QA, project management and gained foundational secure coding knowledge through collaboration with the Cyber Security team during quarterly inspections.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Supervised two employees, mentored junior staff, and supported hiring and onboarding to ensure team alignment with project goals.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
