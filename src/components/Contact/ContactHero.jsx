import { Button } from '@relume_io/relume-ui';
import Contact1 from '../../assets/Contact1.png';

export const ContactHero = (props) => {
  const { tagline, heading, description, buttons, image } = {
    ...Header65Defaults,
    ...props,
  };

  return (
    <section id="relume" className="relative px-[5%] py-26  md:py-24 lg:py-28">
      <div className="container relative flex flex-col items-center z-10  text-center">
        <p className="mb-3 text-white font-bold text-text-alternative md:mb-4">{tagline}</p>
        <h1 className="mb-5 text-3xl text-white font-nomral text-text-alternative md:mb-6 md:text-4xl lg:text-5xl">
          {heading}
        </h1>
        <p className="text-text-alternative text-white md:text-md text-sm">{description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant || 'primary'}
              className={`
                  ${button.title.toLowerCase() === 'submit' ? 'bg-white text-black border-gray-300' : ''}
                  ${button.title.toLowerCase() === 'inquire' ? '  !text-white' : ''}
                  rounded-full cursor-pointer flex font-semibold md:text-md text-sm
                `}
              {...button}
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0" />
      </div>
    </section>
  );
};

export const Header65Defaults = {
  tagline: 'Connect',
  heading: 'Get in Touch',
  description: 'We’re here to answer your questions and help you explore our educational services.',
  buttons: [
    {
      title: 'Submit',
    },
    {
      title: 'Inquire',
      variant: 'secondary-alt',
    },
  ],
  image: {
    src: Contact1,
    alt: 'Relume placeholder image',
  },
};
