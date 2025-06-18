import VisionIcon from '../../assets/VisionIcon.png';
import About3 from '../../assets/About3.png';

export const FeatureSection3 = (props) => {
  const { icon, heading, description, image } = {
    ...Layout24Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img src={icon.src} className="size-8" alt={icon.alt} />
            </div>
            <h3 className="mb-5 text-2xl font-normal leading-[1.2] md:mb-6 md:text-3xl lg:text-4xl">
              {heading}
            </h3>
            <p className="md:text-md">{description}</p>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout24Defaults = {
  icon: {
    src: VisionIcon,
    alt: 'Relume logo',
  },
  heading: 'Our Vision: Uniting Students, Cities, and Educators for a Brighter Future',
  description:
    'At ProC, we envision a world where education transcends borders, fostering understanding and cooperation among diverse communities. By connecting students, cities, and educators globally, we aim to cultivate an informed and inclusive society.',
  image: {
    src: About3,
    alt: 'Relume placeholder image',
  },
};
