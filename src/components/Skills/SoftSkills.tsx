import { TrashIcon } from '@heroicons/react/24/outline'
import { Heading } from '../Heading'

const features = [
  {
    name: 'Problem-solving and analytical thinking',
    icon: TrashIcon,
  },{
    name: 'Leadership and mentorship',
    icon: TrashIcon,
  },{
    name: 'Communication and collaboration',
    icon: TrashIcon,
  },
  {
    name: 'Adaptability and continuous learning',
    icon: TrashIcon,
  },
  {
    name: 'Ownership and accountability',
    icon: TrashIcon,
  },
  {
    name: 'Stakeholder management',
    icon: TrashIcon,
  }
]

export function SoftSkills() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Heading id="technical-skills" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Soft Skills
          </Heading>
          <dl className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className=" gap-4 text-base font-semibold leading-7">
                  
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
