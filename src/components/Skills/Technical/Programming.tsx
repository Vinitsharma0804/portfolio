import Image from 'next/image'
import { Heading } from '../../Heading'
import logoPython from '@/images/logos/python.svg'
import JavaPython from '@/images/logos/java.svg'
import Js from '@/images/logos/js.svg'
import Ts from '@/images/logos/ts.svg'
import HTML from '@/images/logos/html.svg'
import CSS from '@/images/logos/css.svg'

const features = [
  {
    name: 'Python',
    icon: logoPython,
  },{
    name: 'Java',
    icon: JavaPython,
  },{
    name: 'Javascript',
    icon: Js,
  },{
    name: 'Typescript',
    icon: Ts,
  },{
    name: 'HTML',
    icon: HTML,
  },
  {
    name: 'CSS',
    icon: CSS,
  }
]

export function Programming() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Heading id="programming-skills" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Programming Skills
          </Heading>
          <dl className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="flex items-center justify-start gap-4 text-base font-semibold leading-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 dark:bg-emerald-400">
                    <Image alt={feature.name} src={feature.icon} aria-hidden="true" className="h-10 w-10" />
                  </div>
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
