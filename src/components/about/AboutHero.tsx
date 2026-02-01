'use client'

import Link from 'next/link'

export function AboutHero() {
  return (
    <div className="relative isolate w-full">
     

      <div className="w-full">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto  gap-x-14 lg:mx-0 lg:flex lg:items-center">
            <div className="relative w-full max-w-xl lg:shrink-0">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
                A software engineer driven by curiosity, ownership, and continuous learning.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:max-w-md">
                I am a software engineer with 3+ years of hands-on experience building scalable web applications, APIs, and data-driven solutions. My work spans enterprise fintech systems, product-focused development, and data analytics, always with one goal in mind: creating technology that delivers real-world impact.
              </p>
              
              {/* Contact links */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">LinkedIn:</span>
                  <Link
                    href="https://www.linkedin.com/in/vinits0804/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    Connect with me
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email:</span>
                  <Link
                    href="mailto:vinits0804@gmail.com"
                    className="text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    vinits0804@gmail.com
                  </Link>
                </div>
              </div>

              
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  {/* <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div> */}
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt="First Image"
                        src={'profile/profile1.png'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src={'profile/profile2.png'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src={'profile/profile3.png'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src={profile/profile4.png}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

