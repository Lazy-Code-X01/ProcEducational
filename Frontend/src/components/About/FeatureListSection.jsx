import { Button } from '@relume_io/relume-ui';
import { RxChevronRight } from 'react-icons/rx';
import Values1 from '../../assets/Values1.png';
import Values2 from '../../assets/Values2.png';
import Values3 from '../../assets/Values3.png';
import { useNavigate } from 'react-router-dom';

export const FeatureListSection = (props) => {
  const { tagline, heading, description, sections, buttons } = {
    ...Layout239Defaults,
    ...props,
  };

  const navigate = useNavigate();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-3xl">
              <p className="mb-3 font-bold md:mb-4">{tagline}</p>
              <h2 className="mb-5 text-3xl font-normal md:mb-6 md:text-4xl lg:text-5xl">
                {heading}
              </h2>
              <p className="md:text-md text-sm">{description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 overflow-hidden">
            {sections.map((section, index) => {
              const animations = ['fade-up', 'zoom-in', 'fade-left'];
              const animation = animations[index % animations.length];

              return (
                <div
                  key={index}
                  className="flex w-full flex-col items-center text-center overflow-n"
                  data-aos={animation}
                  data-aos-delay={index * 100}
                  data-aos-duration="1000"
                >
                  <div className="rb-6 mb-6 md:mb-8">
                    <img src={section.image.src} alt={section.image.alt} />
                  </div>
                  <h3 className="mb-5 text-2xl font-normal md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {section.heading}
                  </h3>
                  <p className="md:text-md text-sm">{section.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
            {buttons.map((button, index) => {
              const title = button.title.toLowerCase();
              const customStyles =
                title === 'learn'
                  ? 'text-black border border-gray-300 hover:bg-[#f0e8e5]'
                  : title === 'connect'
                    ? 'text-black border border-transparent hover:border-gray-300 bg-transparent'
                    : '';

              return (
                <Button
                  key={index}
                  variant={button.variant || 'primary'}
                  className={`flex gap-2 rounded-full font-semibold px-6 py-3 transition-all duration-200 ease-in-out cursor-pointer text-sm md:text-md ${customStyles}`}
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
    </section>
  );
};

export const Layout239Defaults = {
  tagline: 'Values',
  heading: 'Our Core Values Drive Our Mission',
  description:
    'At ProC, our core values shape everything we do. They guide our commitment to creating equitable educational opportunities and fostering global connections.',
  sections: [
    {
      image: {
        src: Values1,
        alt: 'Relume placeholder image 1',
      },
      heading: 'Equity & Access',
      description: 'We believe in equal access to education for all.',
    },
    {
      image: {
        src: Values2,
        alt: 'Relume placeholder image 2',
      },
      heading: 'Collaboration',
      description: 'Working together enhances the impact of our initiatives.',
    },
    {
      image: {
        src: Values3,
        alt: 'Relume placeholder image 3',
      },
      heading: 'Empowerment',
      description: 'We empower communities to take charge of their futures.',
    },
  ],
  buttons: [
    { title: 'Learn', variant: 'secondary' },
    {
      title: 'Connect',
      variant: 'link',
      size: 'link',
      iconRight: <RxChevronRight />,
    },
  ],
};
