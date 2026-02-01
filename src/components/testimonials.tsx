import Link from "next/link"

const featuredTestimonial = {
    body: `Managing Vinit at InSolutions Global Ltd was a genuinely positive experience, and I thoroughly enjoyed working with him. From a technical standpoint, Vinit consistently demonstrated strong proficiency in Java, SQL, HTML, and the Struts framework. He was quick to adapt to new technologies, learning Spring Boot on the job and applying it effectively by developing well-designed and efficient APIs. He also completed Angular training and performed very well. Vinit approached every challenge and development task with confidence and a problem-solving mindset, often coming up with thoughtful and unique solutions. Beyond development work, he paid close attention to documentation, ensuring that both team and client-facing documents were clear, accurate, and useful. What truly stood out was Vinit's attitude and teamwork. He was a dependable team player and naturally became a go-to person for junior members. He mentored several employees and also took on the responsibility of leading a small team as a reporting manager, handling it with maturity and ownership. Vinit was well respected not only within our team but also across other teams he collaborated with. Given his adaptability, strong work ethic, and collaborative nature, I would highly recommend Vinit for any technical role. He would be a valuable addition to any organization.`,
    author: {
      name: 'Mandar Rane',
      handle: 'Senior manager at In-Solutions Global',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/C5603AQGs268shIe6hA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1646989361790?e=1771459200&v=beta&t=FzfFVy6gl8Q8tYDSvB3j_K9svYVOp7F88IScQgJSehc',
      linkedIn: "https://www.linkedin.com/in/mandar-rane-74306216/"
    },
  }
  const testimonials = [
    [
      [
        {
          body: 'I had the pleasure of working with Vinit and consistently found him to be a skilled, reliable, and motivated professional. He has a strong technical skillset, with hands-on experience in Java, Spring Boot, databases, and Angular, and has worked effectively on building and maintaining robust applications. Vinit learns new concepts quickly and applies them efficiently, even when working with new technologies or complex requirements. He is a great team player-collaborative, respectful, and always willing to support others. His positive attitude and problem-solving mindset make him a valuable addition to any team. I confidently recommend Vinit for any technical position and believe he will be an asset wherever he works.',
          author: {
            name: 'Narendra Chaudhari',
            handle: 'Technical Lead at In-solutions Global',
            imageUrl:
              'https://media.licdn.com/dms/image/v2/C4E03AQFvf4UtOcLxsQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1571765335154?e=1771459200&v=beta&t=dgrVOuOM5oTpc3QnMoURzwCuDUQZZjm6KpHT6qdQo5s',
            linkedIn: "https://www.linkedin.com/in/narendra-chaudhari-5b353611b/"
            },
        },
        {
            body: 'I had the opportunity to work with Vinit in our previous organization, and he consistently impressed me with his strong full‑stack development skills. He has solid hands‑on experience with Java, Spring Boot, Angular, Python, SQL, MongoDB, and HTML/CSS, and he applies them effectively to deliver clean, reliable solutions. Vinit learns quickly, takes ownership of his tasks, and collaborates well with the team. His problem‑solving mindset and ability to handle both backend and frontend responsibilities make him a valuable asset on any project. I highly recommend Vinit for any Full Stack Developer role-he brings skill, dedication, and a positive attitude to every assignment.',
            author: {
              name: 'Saurabh Kumar',
              handle: 'Senior at Tata Consultancy Services',
              imageUrl:
                'https://media.licdn.com/dms/image/v2/D4D03AQHSWosOzxbpwQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692303909911?e=1771459200&v=beta&t=5SzqABthDdRRyXsml1H2NbyVdZgNeEWcdyVsM98yUBc',
              linkedIn: 'https://www.linkedin.com/in/saurabh-kumar--/'
            },
          },
        // More testimonials...
        {
            body: `Vinit Sharma and I worked together in the same company, and he has always been one of the most dependable developers in the team. As a Full Stack / Java Developer, he has a strong grip on backend development, API integrations, and database handling, while also contributing effectively to the front end. He takes complete ownership of his work, ensures quality delivery, and is always willing to help teammates whenever needed. His attitude, consistency, and technical skills make him stand out. I highly recommend Vinit for any organization looking for a skilled and responsible developer.`,
            author: {
              name: 'Akshay Shetty',
              handle: 'Collegue at In-Solutions Global',
              imageUrl:
                'https://media.licdn.com/dms/image/v2/C4E03AQHaqtx4F3C2ZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649953264947?e=1771459200&v=beta&t=IMw14lIOWZbHjLtN-Z2o93x6fHmH-Hd_cvwEQSGg2FQ',
              linkedIn: 'https://www.linkedin.com/in/akshay-shetty-01389b237/',
            },
          },
        {
            body: 'I had the pleasure of working with Vinit Sharma at TCS on enterprise-level Java backend services for NSDL. He consistently demonstrated a strong technical foundation, a sharp grasp of complex systems, and a clear understanding of end-to-end backend development. Within a year, Vinit showed impressive growth-progressing from a junior developer to confidently guiding and supporting new team members. He takes ownership of his work, collaborates well with others, and brings both technical maturity and leadership potential to the team.',
            author: {
              name: 'Deshna Shah',
              handle: 'Collegue at Tata Consultancy Services',
              imageUrl:
                'https://media.licdn.com/dms/image/v2/D4E03AQHxpn949alorg/profile-displayphoto-shrink_400_400/B4EZOYsp4JHwAk-/0/1733433664638?e=1771459200&v=beta&t=3YXFAhK9FuKv8gCiAeHoSUPiBqM5TS-FFTHqVyNpB00',
              linkedIn: "https://www.linkedin.com/in/deshna-shah-48031a147/",

            },
          },
        // More testimonials...
      ],
      [
        {
          body: 'I worked with Vinit at Tata Consultancy Services on enterprise Java applications for a fintech client, and he consistently demonstrated strong technical skills and ownership. He quickly adapted to complex systems, contributed to backend and full-stack development, and was particularly effective at debugging production issues and addressing root causes. Vinit is a dependable and collaborative team member who communicates well with both technical teams and clients. His growth, professionalism, and willingness to support others made him a valued part of the team, and I would confidently recommend him for software engineering roles.',
          author: {
            name: 'Cibin Chandrashekar',
            handle: 'Collegue at Tata Consultancy Services',
            imageUrl:
              'https://media.licdn.com/dms/image/v2/D4E03AQGLLxVV_8OQ-w/profile-displayphoto-scale_400_400/B4EZoHgBAfIUAk-/0/1761062428259?e=1771459200&v=beta&t=Ta6hT_VXn9bLipuv354JxB7yBr-ZTKsI_j95yYuqTU8',
            linkedIn: "https://www.linkedin.com/in/cibin-chandrasekhar/"
            },
        },
        {
            body: 'I worked closely with Vinit Sharma at InSolutions Global Ltd for nearly two years and was consistently impressed by his ability to quickly adapt, solve complex problems, and deliver high-quality solutions. He rapidly picked up Spring Boot, designed reliable APIs, supported junior developers, and collaborated effectively across teams. Vinit also went beyond his role by proactively assisting with production and database-related issues, making him a dependable and valued team member. Vinit is a dedicated, technically sound, and collaborative professional, and I would gladly recommend him for roles that require strong development skills, ownership, and teamwork.',
            author: {
              name: 'Harshal Meher',
              handle: 'Collegue at In-Solutions Global',
              imageUrl:
                'https://media.licdn.com/dms/image/v2/C4E03AQEtGQKLwfEXPw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1652786053304?e=1771459200&v=beta&t=0Jvzxn5j8kdlKMLYTjYCjiXeuoD6THv36s3GKJlOMSM',
              linkedIn: 'https://www.linkedin.com/in/harshal-meher-9a272b1bb/',

            },
          }
        // More testimonials...
      ],
      [
        {
          body: 'I worked with Vinit at TCS. He consistently demonstrated strong technical expertise, sound judgment, and a structured approach to his work. He is professional, dependable, and well respected within the team. I would confidently recommend him for any technical position.',
          author: {
            name: 'Umme Farwa',
            handle: 'Collegue at Tata Consultancy Services',
            imageUrl:
              'https://media.licdn.com/dms/image/v2/D4D03AQEWb5gOhqcEXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702114164892?e=1771459200&v=beta&t=XI2Y1hCi0XgvzmzxtQiBJSyEqo2yIfwWG6LrtnoSIZc',
            linkedIn: "https://www.linkedin.com/in/umme-farwa-6365a8236/"
            },
        },
        {
            body: `A Brilliant Mentor and Technical Lead. I had the pleasure of reporting to Vinit Sharma when I first started my career in the tech industry. As a newcomer, I was fortunate to have him as my Reporting Officer. He is an incredibly patient and helpful mentor who took the time to guide me through the learning curve when I had limited technical knowledge.. Beyond his leadership skills, his technical expertise is top-tier. He has a deep understanding of Java, API development, and HTML, along with various other supporting languages. He doesn't just solve problems; he explains the 'why' behind them, which helped me grow significantly as a developer. I highly recommend Vinit Sharma for any leadership or senior engineering role, he is a true asset to any team.`,
            author: {
              name: 'Akash Hatkar',
              handle: 'Collegue at In-Solutions Global',
              imageUrl:
                'https://media.licdn.com/dms/image/v2/D5603AQF4n8M2aPoCsQ/profile-displayphoto-shrink_400_400/B56ZUN_9oQHsAg-/0/1739696633740?e=1771459200&v=beta&t=idsg2Ygs-U0KNZKvv3MhP0NXlnzLDgsT4StGyw4PbN8',
              linkedIn: 'https://www.linkedin.com/in/akash-hatkar-334b95125/',
            },
          },
          {
            body: 'Vinit is one of the hardest working persons I came across. Highly talented and helping. I was lucky to get an opportunity to work with him. Learnt a lot from him in the field of software development. Wishing him luck for his future endeavours!',
            author: {
              name: 'Prakruti Yadav',
              handle: 'Collegue at Tata Consultancy Services',
              imageUrl:
                'https://media.licdn.com/dms/image/v2/D4D03AQGvGZrYFJvC2w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711947500480?e=1771459200&v=beta&t=ucBXaa6BMiF4hiogdnvdWGg-3JRIN8JFluIpH5wbDSA',
              linkedIn: "https://www.linkedin.com/in/prakruti-yadav/"
              },
          }
        // More testimonials...
      ],
    ],
  ]
  
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  
export function Testimonials() {
    return (
      <div className="relative isolate pb-32 w-full px-0 mx-0">
        <div className="px-6 lg:px-8 w-full max-w-none">
          <div className="text-start">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-emerald-600 dark:text-emerald-400">Testimonials</h2>
            <p className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              Words from some of the amazing people I've worked with
            </p>
          </div>
          <div className=" grid grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-1 xl:mx-0 xl:grid-flow-col xl:grid-cols-3 w-full max-w-none">
            <figure className="rounded-2xl p-4 shadow-lg bg-[#71717a10] dark:bg-[#71717a40] ring-1 ring-gray-200 dark:ring-gray-600 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="text-lg font-semibold leading-7 tracking-tight border-emerald-600 dark:border-emerald-400 sm:text-xl sm:leading-8">
                <p>{`${featuredTestimonial.body}`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                  alt=""
                  src={featuredTestimonial.author.imageUrl}
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="flex-auto">
                  <Link href={featuredTestimonial.author.linkedIn} target="_blank" className="font-semibold sm:text-lg text-black dark:text-white">{featuredTestimonial.author.name}</Link>
                  <div className="text-black dark:text-white">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8',
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl p-2 shadow-lg bg-[#71717a10] dark:bg-[#71717a40] ring-1 ring-gray-200 dark:ring-gray-600 ring-gray-900/5"
                      >
                        <blockquote className="border-emerald-600 dark:border-emerald-400">
                          <p>{`${testimonial.body}`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                  alt=""
                  src={testimonial.author.imageUrl}
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                          <div>
                            <Link target="_blank" href={testimonial.author.linkedIn} className="font-semibold text-black dark:text-white">{testimonial.author.name}</Link>
                            <div className="text-black dark:text-white">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  