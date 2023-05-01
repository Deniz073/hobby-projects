import TestimonialCard from "./TestimonialCard"
import data from "./data.json"

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What others think about me"
      className="py-10 mt-5 sm:py-32 "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Testimonials</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            See what others think about me
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
          
        </div>
      </div>
    </section>

  )
}
