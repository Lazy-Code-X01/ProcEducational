import Program1 from '../../assets/Programs1.png';

export const FeatureSection = (props) => {
  const { heading, description, image } = {
    ...Layout3Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="rb-5 mb-5 text-3xl font-normal md:mb-6 md:text-3xl lg:text-4xl">
              {heading}
            </h1>
            <p className="md:text-md text-sm">{description}</p>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout3Defaults = {
  heading: 'Empowering Global Learning: Your Pathway to International Education Success',
  description:
    'Our International Education Services provide comprehensive academic planning, engaging workshops, and thorough study abroad preparation. We are dedicated to equipping students with the tools they need to thrive in a global learning environment.',
  image: {
    src: Program1,
    alt: 'Relume placeholder image',
  },
};
