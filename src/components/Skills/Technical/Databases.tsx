import { TrashIcon } from '@heroicons/react/24/outline'
import { Heading } from '../../Heading'
import Image from 'next/image'
import mysql from '@/images/logos/mysql.svg'
import oracle from '@/images/logos/oracle.svg'
import postgres from '@/images/logos/postgres.svg'
import mongodb from '@/images/logos/mongodb.svg'

const features = [
  {
    name: 'MySql',
    icon: mysql,
  },{
    name: 'OracleSql',
    icon: oracle,
  },{
    name: 'PostgreSql',
    icon: postgres,
  },{
    name: 'MongoDB',
    icon: mongodb,
  }
]

export function Databases() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Heading id="databases" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Databases
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
