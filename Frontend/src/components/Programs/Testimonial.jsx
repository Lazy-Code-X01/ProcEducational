import { BiSolidStar } from 'react-icons/bi';
import Testimonial8 from '../../assets/Testimonial8.jpeg';
import Testimonial7 from '../../assets/Testimonial7.jpg';

export const TestimonialSection = (props) => {
  const { heading, description, testimonials } = {
    ...Testimonial5Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f9f9f9]">
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="mb-5 text-3xl font-normal md:mb-6 md:text-3xl lg:text-4xl">{heading}</h1>
          <p className="md:text-md text-sm">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ testimonial, index }) => {
  const animations = ['fade-up', 'zoom-in', 'fade-up'];
  const animation = animations[index % animations.length];

  return (
    <div
      className="flex h-full max-w-lg flex-col items-start justify-start text-left"
      data-aos={animation}
      data-aos-delay={index * 100}
      data-aos-duration="1000"
    >
      <div className="mb-6 flex md:mb-8">
        {Array(testimonial.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <BiSolidStar key={starIndex} className="size-6 text-yellow-400" />
          ))}
      </div>
      <blockquote className="text-md font-normal leading-[1.4] md:text-lg">
        {testimonial.quote}
      </blockquote>
      <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
        <div>
          <img
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt}
            className="size-14 min-h-14 min-w-14 rounded-full object-cover"
          />
        </div>
        <div className="mb-4 md:mb-0">
          <p className="font-semibold md:text-md text-sm">{testimonial.name}</p>
          <p className="md:text-md text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export const Testimonial5Defaults = {
  heading: 'Customer Testimonials',
  description: 'ProC transformed our educational experience beyond borders.',
  testimonials: [
    {
      numberOfStars: 5,
      quote:
        '"When I was lost and overwhelmed with college applications, ProC came through. They didn’t just assist me; they empowered me.  All thanks to their expert guidance and constant support."',
      avatar: {
        src: Testimonial8,
        alt: 'Testimonial avatar 1',
      },
      name: 'Michael U',
      position: 'International Student',
    },
    {
      numberOfStars: 5,
      quote: `"ProC Education doesn’t offer a one-size-fits-all service  they really got to know me, my goals, and helped tailor my college list and application essays. I got admitted into three U.S. universities and chose one that gave me a scholarship!"`,
      avatar: {
        src: Testimonial7,
        alt: 'Testimonial avatar 2',
      },
      name: 'Tolu O',
      position: 'Undergraduate Student',
    },
  ],
};
