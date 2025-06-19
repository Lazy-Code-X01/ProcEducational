import React from 'react';
import { Button } from '@relume_io/relume-ui';

export const Cta = (props) => {
  const { heading, description, buttons } = {
    ...Cta13Defaults,
    ...props,
  };

  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-[#f9f9f9]">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <h1 className="text-3xl font-normal md:text-4xl lg:text-5xl">{heading}</h1>
        <div>
          <p className="md:text-md text-md">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || 'primary'}
                className={`
                  cursor-pointer transition-all duration-200 ease-in-out
                  ${button.title.toLowerCase() === 'book a consultation' ? 'bg-[#E65F27] text-white border border-transparent hover:border-[#E65F27]' : ''}
                  ${button.title.toLowerCase() === 'learn more' ? '!border !border-gray-300 text-black hover:bg-[#E65F27] hover:text-white' : ''}
                  rounded-full font-semibold
                `}
                {...button}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Cta13Defaults = {
  heading: 'Your Future Starts Here',
  description:
    "Unlock your potential with our expert guidance in education and global partnerships. Let's work together to create opportunities that bridge cultures and communities.",
  buttons: [{ title: 'Book a Consultation' }, { title: 'Learn More', variant: 'secondary' }],
};
