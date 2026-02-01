import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { Heading } from '../../Heading'

const features = [
  {
    name: 'Cross-functional Collaboration',
    icon: CheckBadgeIcon,
  },{
    name: 'Mentoring',
    icon: CheckBadgeIcon,
  },{
    name: 'Swagger',
    icon: CheckBadgeIcon,
  },
  {
    name: 'OpenApi',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Storybook',
    icon: CheckBadgeIcon,
  }
]

export function Collaboration() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Heading id="collaboration-and-documentation" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Collaboration & Documentation
          </Heading>
          <dl className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="flex items-center justify-start gap-4 text-base font-semibold leading-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 dark:bg-emerald-400">
                    <feature.icon aria-hidden="true" className="h-10 w-10 aspect-square" />
                  </div>
                  <span className='w-fit'>
                    {feature.name}
                    </span>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
