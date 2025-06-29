import { Button } from '@relume_io/relume-ui';
import { RxChevronRight } from 'react-icons/rx';
import About2 from '../../assets/About2.png';

import { useNavigate } from 'react-router-dom';

export const FeatureSection2 = (props) => {
  const { heading, description, tagline, buttons, image } = {
    ...Layout89Defaults,
    ...props,
  };

  const navigate = useNavigate();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f9f9f9]">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-bold md:mb-4">{tagline}</p>
            <h3 className="text-2xl font-normal leading-[1.2] md:text-3xl lg:text-5xl">
              {heading}
            </h3>
          </div>
          <div>
            <p className="md:text-md text-md" data-aos="fade-down" data-aos-duration="1000">
              {description}
            </p>
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
        </div>
        <img src={image.src} className="w-full object-cover" alt={image.alt} />
      </div>
    </section>
  );
};

export const Layout89Defaults = {
  tagline: 'Empower',
  heading: 'Our Mission: Transforming Education and Communities',
  description:
    'At ProC, our mission is to empower communities through education, cultural exchange, and meaningful partnerships. We believe that by fostering connections between diverse cultures, we can create opportunities for growth and understanding. Together, we strive to build a more inclusive and informed world.',
  image: {
    src: About2,
    alt: 'Relume placeholder image',
  },
  buttons: [
    { title: 'Learn More', variant: 'secondary' },
    {
      title: 'Join Us',
      variant: 'link',
      size: 'link',
      iconRight: <RxChevronRight />,
    },
  ],
};
