import React from 'react'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Career', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

  return (
    <footer className="bg-gray-100 text-gray-700 mt-20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1 mb-6">
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-80"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
              <span className="text-xl font-semibold ml-1">The Next Design</span>
            </div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h4 className="text-base font-medium mb-3 capitalize">{title}</h4>
                  <ul className="space-y-2 text-sm">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} className="hover:text-black transition">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} codetutorbd.com</p>
          <p>Created by Md Al Mamun</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
