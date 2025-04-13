import React from 'react'

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM4.22 5.22a1 1 0 011.42 0L6.34 6.1a1 1 0 11-1.42 1.42L4.22 6.64a1 1 0 010-1.42zM3 11a1 1 0 100-2H2a1 1 0 100 2h1zm14 0a1 1 0 100-2h1a1 1 0 100 2h-1zM13.66 6.1a1 1 0 111.42-1.42l.7.7a1 1 0 11-1.42 1.42l-.7-.7zM10 6a4 4 0 100 8 4 4 0 000-8zm1 9.93V18a1 1 0 11-2 0v-2.07a6.002 6.002 0 012 0z" />
        </svg>
      ),
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
        {/* Header */}
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">
            Future of support with new shape
          </h2>
          <p className="text-gray-600 text-lg mb-4 md:w-4/5">
            Discuss your goals, determine success metrics, identify problems
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">UX design content strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Development bring</span>
            </div>
          </div>
          <button className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors">
            Get started
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                LEARN MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
