import { BiSolidStar } from 'react-icons/bi';
import Testimonial2 from '../../assets/Testimonial2.png';
import Testimonial3 from '../../assets/Testimonial3.png';

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
        '"Working with ProC opened doors I never knew existed. Their support was invaluable in our partnership journey."',
      avatar: {
        src: Testimonial2,
        alt: 'Testimonial avatar 1',
      },
      name: 'John doe',
      position: 'Director, Global Initiatives',
    },
    {
      numberOfStars: 5,
      quote: `"The guidance from ProC was instrumental in our program's success. Their expertise made all the difference in our approach to international education."`,
      avatar: {
        src: Testimonial3,
        alt: 'Testimonial avatar 2',
      },
      name: 'Jane Smith',
      position: 'Coordinator, Education Hub',
    },
  ],
};

// import { BiSolidStar } from 'react-icons/bi';
// import Testimonial2 from '../../assets/Testimonial2.png';
// import Testimonial3 from '../../assets/Testimonial3.png';

// export const TestimonialSection = (props) => {
//   const { heading, description, testimonials } = {
//     ...Testimonial5Defaults,
//     ...props,
//   };

//   return (
//     <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f9f9f9]">
//       <div className="container">
//         <div className="mb-12 w-full md:mb-18 lg:mb-20">
//           <h1 className="mb-5 text-3xl font-normal md:mb-6 md:text-3xl lg:text-4xl">{heading}</h1>
//           <p className="md:text-md text-sm">{description}</p>
//         </div>
//         <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
//           {testimonials.map((testimonial, index) => (
//             <Testimonial key={index} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Testimonial = ({ testimonial }) => (
//   <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
//     <div className="mb-6 flex md:mb-8">
//       {Array(testimonial.numberOfStars)
//         .fill(null)
//         .map((_, starIndex) => (
//           <BiSolidStar key={starIndex} className="size-6" />
//         ))}
//     </div>
//     <blockquote className="text-md font-normal leading-[1.4] md:text-lg">
//       {testimonial.quote}
//     </blockquote>
//     <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
//       <div>
//         <img
//           src={testimonial.avatar.src}
//           alt={testimonial.avatar.alt}
//           className="size-14 min-h-14 min-w-14 rounded-full object-cover"
//         />
//       </div>
//       <div className="mb-4 md:mb-0">
//         <p className="font-semibold md:text-md text-sm">{testimonial.name}</p>
//         <p className="md:text-md text-sm">{testimonial.position}</p>
//       </div>
//     </div>
//   </div>
// );

// export const Testimonial5Defaults = {
//   heading: 'Customer Testimonials',
//   description: 'ProC transformed our educational experience beyond borders.',
//   testimonials: [
//     {
//       numberOfStars: 5,
//       quote:
//         '"Working with ProC opened doors I never knew existed. Their support was invaluable in our partnership journey."',
//       avatar: {
//         src: Testimonial2,
//         alt: 'Testimonial avatar 1',
//       },
//       name: 'John doe',
//       position: 'Director, Global Initiatives',
//     },
//     {
//       numberOfStars: 5,
//       quote: `"The guidance from ProC was instrumental in our program's success. Their expertise made all the difference in our approach to international education."`,
//       avatar: {
//         src: Testimonial3,
//         alt: 'Testimonial avatar 2',
//       },
//       name: 'Jane Smith',
//       position: 'Coordinator, Education Hub',
//     },
//   ],
// };
