import { Button } from '@relume_io/relume-ui';
import { RxChevronRight } from 'react-icons/rx';
import About4 from '../../assets/About4.png';
import { useNavigate } from 'react-router-dom';

export const FeatureSection4 = (props) => {
  const { tagline, heading, description, buttons, image } = {
    ...Layout1Defaults,
    ...props,
  };

  const navigate = useNavigate();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f9f9f9f9]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20 overflow-hidden">
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="mb-3 font-bold md:mb-4">{tagline}</p>
            <h1 className="rb-5 mb-5 text-2xl font-normal md:mb-6 md:text-3xl lg:text-4xl">
              {heading}
            </h1>
            <p className="md:text-md text-sm">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || 'primary'}
                  className={`
                    flex gap-2 rounded-full font-semibold text-sm px-6 py-3 transition-all duration-200 ease-in-out cursor-pointer
                  ${button.title.toLowerCase() === 'learn more' ? '  text-black border border-gray-300 hover:bg-[#f0e8e5]' : ''}
                  ${button.title.toLowerCase() === 'join us' ? '  text-black border border-transparent hover:border-gray-300 bg-transparent' : ''}
                  rounded-full flex font-semibold md:text-md text-sm
                `}
                  {...button}
                  onClick={() => navigate('/contact')}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout1Defaults = {
  tagline: 'Our',
  heading: 'Empowering Communities Through Education and Partnerships',
  description:
    'ProC Education Services was established to ensure that every individual has access to quality education and the opportunities that come with it. By fostering global connections, we aim to create a world where learning knows no boundaries.',
  buttons: [
    { title: 'Learn More', variant: 'secondary' },
    {
      title: 'Join Us',
      variant: 'link',
      size: 'link',
      iconRight: <RxChevronRight />,
    },
  ],
  image: {
    src: About4,
    alt: 'Relume placeholder image',
  },
};
