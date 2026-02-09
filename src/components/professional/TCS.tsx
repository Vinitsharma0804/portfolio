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
            April 2022 - Sept 2022
            </p>
        </div>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8">
          <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Led end-to-end development, enhancement, and support of enterprise web applications using Java, SQL, HTML, and the Struts framework, ensuring scalable, maintainable, and business-aligned solutions.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Played a central role in client-facing engagements, independently gathering and analyzing requirements, proposing technical solutions, and delivering customized implementations aligned with business objectives.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Owned the design and execution of complex Change Requests (CRs), including backend logic enhancements, database query optimization, and performance improvements.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Actively participated in Agile/Scrum ceremonies, sprint planning, daily stand-ups, and retrospectives, ensuring accurate estimations, risk mitigation, and on-time delivery.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Coordinated across QA, Build/DevOps, and Project Management teams to manage deployments, resolve defects, and ensure smooth release cycles.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Mentored junior engineers through technical guidance, code reviews, and debugging support, improving overall code quality and team efficiency.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Created and maintained technical and functional documentation such as design specifications, release notes, and knowledge base articles to support long-term maintainability and onboarding.
              </span>
            </li>
            <li className="flex gap-x-3 w-full">
              <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" />
              <span>
              Consistently met tight deadlines while maintaining application stability, performance, and high client satisfaction.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}