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
            <h2 className="mb-5 text-2xl font-normal text-white text-text-alternative md:mb-6 md:text-3xl lg:text-4xl">
              {heading}
            </h2>
            <p className="text-white text-text-alternative md:text-md">{description}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            {buttons.map((button, index) => {
              const isLearn = button.title.toLowerCase() === 'Learn';
              const isStart = button.title.toLowerCase() === 'Start';

              return (
                <Button
                  key={index}
                  {...button}
                  className={`px-4 py-2 bg-white text-black rounded-full font-semibold flex cursor-pointer ${
                    isLearn
                      ? 'bg-white border-gray-100 text-black'
                      : isStart
                        ? 'border border-gray-300 text-white'
                        : ''
                  }`}
                >
                  {button.title}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img src={image.src} className="size-full object-cover" alt={image.alt} />
          <div className="absolute inset-0 bg-black/50" />
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
