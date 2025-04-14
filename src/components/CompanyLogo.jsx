import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="w-full overflow-hidden bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-10">
        {/* Text Section */}
        <div className="sm:w-[300px] w-full shrink-0 px-6 border-l-4 border-blue-500 text-gray-700 font-semibold text-lg sm:text-base">
          Proud partner at <br /> Hubspot & Segment
        </div>

        {/* Logos Marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="mx-6 h-8 w-32 sm:w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogo
