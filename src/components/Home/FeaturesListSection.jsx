import { Button } from '@relume_io/relume-ui';
import { RxChevronRight } from 'react-icons/rx';
import Education from '../../assets/Edu.png';
import Global from '../../assets/Global.png';
import Design from '../../assets/Design.png';

export const FeaturesListSection = (props) => {
  const { tagline, heading, description, sections, buttons } = {
    ...Layout237Defaults,
    ...props,
  };

  return (
    <section id="relume" className="bg-[#f9f9f9] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-2xl">
              <p className="mb-3 font-bold md:mb-4">{tagline}</p>
              <h2 className="mb-5 text-2xl font-normal md:mb-6 md:text-3xl lg:text-5xl">
                {heading}
              </h2>
              <p className="md:text-md text-medium from-neutral-600">{description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div key={index} className="flex w-full flex-col items-center text-center">
                <div className="rb-5 mb-5 md:mb-6">
                  <img src={section.icon.src} className="size-6" alt={section.icon.alt} />
                </div>
                <h3 className="mb-5 text-2xl font-normal md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                  {section.heading}
                </h3>
                <p className="text-sm">{section.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            {buttons.map((button, index) => {
              const isLearnmore = button.title.toLowerCase() === 'Learn More';
              const isContact = button.title.toLowerCase() === 'Contact';

              return (
                <Button
                  key={index}
                  {...button}
                  className={`px-4 py-2 rounded-full font-semibold flex cursor-pointer ${
                    isLearnmore
                      ? 'bg-white border-gray-100 text-black'
                      : isContact
                        ? 'border border-white text-black-700'
                        : ''
                  }`}
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

export const Layout237Defaults = {
  tagline: 'Services',
  heading: 'Explore Our Comprehensive Educational Services',
  description:
    'At ProC, we offer a range of services designed to foster educational growth and global connections. Our expertise ensures that communities can thrive through innovative partnerships and programs.',
  sections: [
    {
      icon: {
        src: Education,
        alt: 'Relume logo 1',
      },
      heading: 'International Education Consulting',
      description:
        'We guide institutions in enhancing their educational offerings and student experiences.',
    },
    {
      icon: {
        src: Global,
        alt: 'Relume logo 2',
      },
      heading: 'Sister City & Global Exchange Facilitation',
      description: 'We connect cities to foster cultural exchanges and mutual growth.',
    },
    {
      icon: {
        src: Design,
        alt: 'Relume logo 3',
      },
      heading: 'Program Design & Implementation',
      description: 'Our team crafts tailored programs that meet unique community needs.',
    },
  ],
  buttons: [
    { title: 'Learn More', variant: 'secondary' },
    {
      title: 'Contact',
      variant: 'link',
      size: 'link',
      iconRight: <RxChevronRight />,
    },
  ],
};
