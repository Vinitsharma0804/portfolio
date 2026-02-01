export function ContributeSection() {
    return (
        <section id="where-i-can-contribute">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Where I Can Contribute
        </h2>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Roles and responsibilities where my skills and experience create impact.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              role: 'Software Engineer',
              description:
                'Designing and building scalable, reliable applications with a focus on backend systems, clean code, and performance.',
            },
            {
              role: 'Backend Developer',
              description:
                'Developing server-side logic, RESTful APIs, and database-driven systems that power robust and maintainable applications.',
            },
            {
              role: 'Full-Stack Developer',
              description:
                'Working across backend services and frontend integration to deliver end-to-end features aligned with business needs.',
            },
            {
              role: 'Data Engineer',
              description:
                'Building data pipelines, optimizing database queries, and supporting data-driven systems with reliable data flows.',
            },
            {
              role: 'Data Analyst',
              description:
                'Analyzing structured and unstructured data to uncover insights and support data-driven decision-making.',
            },
          ].map((item) => (
            <div
              key={item.role}
              className="rounded-xl bg-zinc-50 p-6 ring-1 ring-zinc-900/5 dark:bg-zinc-800/50 dark:ring-white/10"
            >
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                {item.role}
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