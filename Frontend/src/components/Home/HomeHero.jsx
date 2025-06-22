import { Button } from '@relume_io/relume-ui';
import HomeBg from '../../assets/HomeBg.png';
import { useNavigate } from 'react-router-dom';

const HomeHero = (props) => {
  const { heading, description, buttons, image } = {
    ...Header5Defaults,
    ...props,
  };

  const navigate = useNavigate();

  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10 top-20">
        <div className="flex max-h-[90rem] min-h-svh items-center py-30 md:py-24 lg:py-28">
          <div className="max-w-xl " data-aos="fade-up" data-aos-duration="1000">
            <h1 className="mb-5 text-4xl  font-normal text-text-alternative text-white md:mb-6 md:text-4xl lg:text-5xl leading-13">
              {heading}
            </h1>
            <p className="max-w-md text-text-alternative text-white text-sm md:text-md leading-6">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => {
                const isBook = button.title.toLowerCase() === 'book';
                const isLearn = button.title.toLowerCase() === 'learn';

                return (
                  <Button
                    key={index}
                    variant={button.variant || 'primary'}
                    className={`
                      rounded-full font-semibold transition-all duration-200 ease-in-out cursor-pointer
                      ${isBook ? 'bg-white text-black border border-transparent hover:border-black' : ''}
                      ${isLearn ? 'border border-white text-white hover:bg-white hover:text-black' : ''}
                    `}
                    {...button}
                    onClick={() => navigate('/contact')}
                  >
                    {button.title}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
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
