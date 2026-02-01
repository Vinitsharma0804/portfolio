export function ValueSection () {
    return (
        <section id="how-i-add-value">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          How I Add Value
        </h2>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          The strengths, mindset, and approach I bring to every team and project.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'End-to-End Ownership',
              description: 'From understanding requirements to delivering production-ready solutions',
            },
            {
              title: 'Backend Strength',
              description: 'Strong foundation in Java, REST APIs, and relational databases',
            },
            {
              title: 'Problem-Solving Mindset',
              description: 'Focused on fixing root causes, not just symptoms',
            },
            {
              title: 'Cross-Functional Collaboration',
              description: 'Experience working with frontend, QA, cybersecurity, and business teams',
            },
            {
              title: 'Leadership & Mentorship',
              description: 'Led small teams, mentored juniors, and acted as a reliable point of contact',
            },
            {
              title: 'Continuous Learning',
              description: 'Always exploring new technologies and domains to stay relevant and adaptable',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-zinc-50 p-6 ring-1 ring-zinc-900/5 dark:bg-zinc-800/50 dark:ring-white/10"
            >
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
}