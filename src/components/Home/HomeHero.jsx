import { Button } from '@relume_io/relume-ui';
import HomeBg from '../../assets/HomeBg.png';

const HomeHero = (props) => {
  const { heading, description, buttons, image } = {
    ...Header5Defaults,
    ...props,
  };

  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10 top-20">
        <div className="flex max-h-[90rem] min-h-svh items-center py-26 md:py-24 lg:py-28">
          <div className="max-w-xl ">
            <h1 className="mb-5 text-4xl font-normal text-text-alternative text-white md:mb-6 md:text-4xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-text-alternative text-white text-sm md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || 'primary'}
                  className={`
                               ${button.title.toLowerCase() === 'book' ? 'bg-[#ffff] text-black' : ''}
                               ${button.title.toLowerCase() === 'learn' ? '!text-white' : ''}
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
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>
    </section>
  );
};

export default HomeHero;

export const Header5Defaults = {
  heading: 'Education: Bridging Cultures, Connecting Communities',
  description:
    'At ProC, we harness the power of education to foster connections across continents. Join us in creating opportunities that transcend borders and enrich lives.',
  buttons: [{ title: 'Book' }, { title: 'Learn', variant: 'secondary-alt' }],
  image: {
    src: HomeBg,
    alt: 'Home background',
  },
};
