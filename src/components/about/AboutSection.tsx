'use client'

export function AboutSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="space-y-16">
          {/* About Section */}
          <section id="about">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              From curiosity to craftsmanship, driven by learning and impact.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                My journey into technology began with curiosity and a desire to solve real problems. Starting my career with limited coding exposure, I quickly adapted to fast-paced environments, learning Java-based development, databases, and enterprise systems while working with global clients.
              </p>
              <p>
                Over the years, I have grown not just as a developer, but as a professional, embracing collaboration, ownership, and continuous learning. From working closely with clients like NSDL to mentoring teammates and leading small engineering teams, I have learned how strong communication and technical clarity drive successful software delivery.
              </p>
              <p>
                Recently, I completed my MSc in Data Analytics to complement my software background. This decision reflects my belief in staying versatile and future-ready, blending software engineering with data, analytics, and problem-solving to build smarter, more impactful systems.
              </p>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Always learning, adapting, and evolving to build better systems and better solutions.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

