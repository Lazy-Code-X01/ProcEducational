import React, { useState, useEffect } from 'react';
import { BiSolidStar, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Testimonial2 from '../../assets/Testimonial2.png';
import Testimonial3 from '../../assets/Testimonial3.png';

export const Testimonials = (props) => {
  const { heading, testimonials } = {
    ...Testimonial5Defaults,
    ...props,
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const goToNext = () => {
    setFadeState('fade-out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setFadeState('fade-in');
    }, 300);
  };

  const goToPrev = () => {
    setFadeState('fade-out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFadeState('fade-in');
    }, 300);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f9f9f9]">
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20" data-aos="fade-up">
          <h1 className="mb-5 text-center text-3xl font-normal md:mb-6 md:text-3xl lg:text-4xl">
            {heading}
          </h1>
        </div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              goToPrev();
            }}
            className="absolute left-0 z-10 p-2 text-gray-600 hover:text-orange-500 transition-colors md:p-4"
            aria-label="Previous testimonial"
          >
            <BiChevronLeft className="size-8 md:size-10" />
          </button>

          <div className={`w-full max-w-2xl transition-opacity duration-300 ${fadeState}`}>
            <Testimonial testimonial={testimonials[currentIndex]} index={currentIndex} />
          </div>

          <button
            onClick={() => {
              setIsAutoPlaying(false);
              goToNext();
            }}
            className="absolute right-0 z-10 p-2 text-gray-600 hover:text-orange-500 transition-colors md:p-4"
            aria-label="Next testimonial"
          >
            <BiChevronRight className="size-8 md:size-10" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setFadeState('fade-out');
                setTimeout(() => {
                  setCurrentIndex(index);
                  setFadeState('fade-in');
                }, 300);
              }}
              className={`size-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ testimonial, index }) => {
  return (
    <div className="mx-auto flex flex-col items-center text-center px-4">
      <div className="mb-6 flex justify-center">
        {Array(testimonial.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <BiSolidStar key={starIndex} className="size-6 text-yellow-400" />
          ))}
      </div>
      <blockquote className="text-lg font-normal leading-relaxed md:text-xl">
        {testimonial.quote}
      </blockquote>
      <div className="mt-8 flex flex-col items-center">
        <img
          src={testimonial.avatar.src}
          alt={testimonial.avatar.alt}
          className="size-14 rounded-full object-cover"
          loading="lazy"
        />
        <div className="mt-4">
          <p className="font-semibold">{testimonial.name}</p>
          {testimonial.position && <p className="text-sm text-gray-600">{testimonial.position}</p>}
        </div>
      </div>
    </div>
  );
};

export const Testimonial5Defaults = {
  heading: 'Testimonials',
  testimonials: [
    {
      numberOfStars: 5,
      quote:
        '"Working with ProC transformed our educational outreach and strengthened our community ties across borders."',
      avatar: {
        src: Testimonial2,
        alt: 'Testimonial avatar 1',
      },
      name: 'Sarah Johnson',
      position: 'Director, Global Initiatives',
    },
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
      quote:
        '"Back in 2014/2015, I was referred to ProC Education Services for help with my master’s admission, and it was one of the best decisions I made. Their support, attention to detail, and genuine care helped me gain admission into a reputable U.S. university. Even years later, I still recommend them to anyone serious about studying abroad."',
      avatar: {
        src: Testimonial2,
        alt: 'Testimonial avatar 1',
      },
      name: 'Fummi A.',
      position: 'M.Sc. Graduate',
    },
    {
      numberOfStars: 5,
      quote:
        '"ProC was a game-changer. They were honest, responsive, and always available to answer my many questions  even late at night! With their help, I secured admission and my F-1 visa without stress. You can trust them."',
      avatar: {
        src: Testimonial2,
        alt: 'Testimonial avatar 1',
      },
      name: 'Blessing A.',
      position: ' First-Year Student',
    },
    {
      numberOfStars: 5,
      quote:
        '"Promise and the ProC team were patient, professional, and truly cared. From my statement of purpose to DS-160 prep, everything was on point. I’m now pursuing my Master’s in Public Health in the U.S. I can’t recommend them enough."',
      avatar: {
        src: Testimonial2,
        alt: 'Testimonial avatar 1',
      },
      name: ' Ifeanyi O.',
      position: 'MPH Candidate',
    },
    {
      numberOfStars: 5,
      quote: `"ProC Education doesn’t offer a one-size-fits-all service  they really got to know me, my goals, and helped tailor my college list and application essays. I got admitted into three U.S. universities and chose one that gave me a scholarship!"`,
      avatar: {
        src: Testimonial3,
        alt: 'Testimonial avatar 2',
      },
      name: ' Tolu O.',
      position: 'Undergraduate Student',
    },
    {
      numberOfStars: 5,
      quote: `When I was lost and overwhelmed with college applications, ProC came through. They didn’t just assist me; they empowered me.  All thanks to their expert guidance and constant support."`,
      avatar: {
        src: Testimonial3,
        alt: 'Testimonial avatar 2',
      },
      name: ' Michael U',
      position: 'International Student',
    },
    {
      numberOfStars: 5,
      quote: `ProC Education Services changed my life! From helping me choose the right school to guiding me through the entire admission and visa process, they were there every step of the way, something I once thought was impossible. Thank you, ProC!`,
      avatar: {
        src: Testimonial3,
        alt: 'Testimonial avatar 2',
      },
      name: ' Chinaza E.',
      position: '',
    },
  ],
};

// import React from 'react';
// import { BiSolidStar } from 'react-icons/bi';
// import TestimonialImg from '../../assets/Testimonial.png';

// export const Testimonial = (props) => {
//   const { numberOfStars, quote, avatar, name, position, logo } = {
//     ...Testimonial4Defaults,
//     ...props,
//   };

//   return (
//     <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
//       <div className="container" data-aos="zoom-in-down" data-aos-duration="1000">
//         <div className="mx-auto w-full max-w-2xl text-center">
//           <div className="mb-6 flex items-center justify-center md:mb-8">
//             {Array(numberOfStars)
//               .fill(null)
//               .map((_, starIndex) => (
//                 <BiSolidStar key={starIndex} className="size-6" />
//               ))}
//           </div>
//           <blockquote className="text-lg font-normal md:text-2xl ">{quote}</blockquote>
//           <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
//             <div>
//               <img
//                 src={avatar.src}
//                 alt={avatar.alt}
//                 className="size-14 min-h-14 min-w-14 rounded-full object-cover"
//               />
//             </div>
//             <div className="mb-4 md:mb-0">
//               <p className="font-semibold text-sm">{name}</p>
//               <p className="font-normal text-sm">{position}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export const Testimonial4Defaults = {
//   numberOfStars: 5,
//   quote:
//     '"Working with ProC transformed our educational outreach and strengthened our community ties across borders."',
//   avatar: {
//     src: TestimonialImg,
//     alt: 'Testimonial avatar 1',
//   },
//   name: 'Sarah Johnson',
//   position: 'Director, Global Initiatives',
//   logo: {
//     src: 'https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg',
//     alt: 'Webflow logo 1',
//   },
// };
