import { Button } from '@relume_io/relume-ui';
import HomeBg from '../../assets/HomeBg.png';

const HomeHero = (props) => {
  const { heading, description, buttons, image } = {
    ...Header5Defaults,
    ...props,
  };

  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-xl">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-4xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-text-alternative md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
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
  heading: 'Medium length hero heading goes here',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  buttons: [{ title: 'Button' }, { title: 'Button', variant: 'secondary-alt' }],
  image: {
    src: HomeBg,
    alt: 'Home background',
  },
};
