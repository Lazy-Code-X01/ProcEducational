import Features1 from '../../assets/Features1.png';

export const FeatureSection = (props) => {
  const { heading, description, image } = {
    ...Layout3Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-2xl font-normal md:mb-6 md:text-3xl lg:text-4xl">
              {heading}
            </h1>
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

export const Layout3Defaults = {
  heading: 'Connecting Communities Through Education and Global Partnerships',
  description:
    'At ProC, we believe in the transformative power of education. Our mission is to connect diverse cultures and communities, fostering understanding and collaboration across continents.',
  image: {
    src: Features1,
    alt: 'Relume placeholder image',
  },
};
