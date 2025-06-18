import React from 'react';
import { BiSolidStar } from 'react-icons/bi';
import TestimonialImg from '../../assets/Testimonial.png';

export const Testimonial = (props) => {
  const { numberOfStars, quote, avatar, name, position, logo } = {
    ...Testimonial4Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-2xl text-center">
          <div className="mb-6 flex items-center justify-center md:mb-8">
            {Array(numberOfStars)
              .fill(null)
              .map((_, starIndex) => (
                <BiSolidStar key={starIndex} className="size-6" />
              ))}
          </div>
          <blockquote className="text-lg font-normal md:text-2xl ">{quote}</blockquote>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
            <div>
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="size-14 min-h-14 min-w-14 rounded-full object-cover"
              />
            </div>
            <div className="mb-4 md:mb-0">
              <p className="font-semibold text-sm">{name}</p>
              <p className="font-normal text-sm">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonial4Defaults = {
  numberOfStars: 5,
  quote:
    '"Working with ProC transformed our educational outreach and strengthened our community ties across borders."',
  avatar: {
    src: TestimonialImg,
    alt: 'Testimonial avatar 1',
  },
  name: 'Sarah Johnson',
  position: 'Director, Global Initiatives',
  logo: {
    src: 'https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg',
    alt: 'Webflow logo 1',
  },
};
