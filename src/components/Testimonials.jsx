import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe", 
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg", 
    text: "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "She had a last view back on the of her hometown Bookmarksgrove, the headline.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "They responded to my requests quickly. The team is professional and truly cares.",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + itemsPerSlide >= testimonials.length ? 0 : prev + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - itemsPerSlide < 0
        ? testimonials.length - itemsPerSlide
        : prev - itemsPerSlide
    );
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What our happy client say</h2>
        <p className="text-gray-600">Things that make it the best place to start trading</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="text-center bg-white p-6 rounded-lg shadow-md flex flex-col"
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, starIndex) => (
                <span key={starIndex} className="text-blue-600">★</span>
              ))}
            </div>
            <h3 className="font-semibold text-xl mb-2">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
          aria-label="Previous"
        >
          {/* Left Arrow SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
          aria-label="Next"
        >
          {/* Right Arrow SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
