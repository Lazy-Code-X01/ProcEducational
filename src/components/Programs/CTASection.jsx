import { Button } from '@relume_io/relume-ui';
import Program4 from '../../assets/Programs4.png';

export const CTASection = (props) => {
  const { heading, description, buttons, image } = {
    ...Cta41Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">
        <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-2xl">
            <h2 className="mb-5 text-3xl font-normal text-white text-text-alternative md:mb-6 md:text-3xl lg:text-4xl">
              {heading}
            </h2>
            <p className="text-white md:text-md text-sm text-text-alternative md:text-md">
              {description}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || 'primary'}
                className={`
                  ${button.title.toLowerCase() === 'learn' ? ' text-black !bg-white border-gray-300' : ''}
                  ${button.title.toLowerCase() === 'start' ? '  !text-white' : ''}
                  rounded-full flex font-semibold md:text-md text-sm
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
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>
    </section>
  );
};

export const Cta41Defaults = {
  heading: 'Explore Our Educational Programs',
  description:
    'Unlock opportunities for growth through our diverse educational programs and partnerships designed for all.',
  buttons: [
    { title: 'Learn', variant: 'primary' },
    { title: 'Start', variant: 'secondary-alt' },
  ],
  image: {
    src: Program4,
    alt: 'Relume placeholder image',
  },
};
