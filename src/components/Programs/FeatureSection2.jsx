import Program2 from '../../assets/Programs2.png';

export const FeatureSection2 = (props) => {
  const { heading, description, image, subHeadings } = {
    ...Layout197Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f9f9f9]">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-3xl font-normal leading-[1.2] md:mb-6 md:text-3xl lg:text-4xl">
              {heading}
            </h3>
            <p className="mb-6 md:mb-8 md:text-md text-sm">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-md  font-semibold leading-[1.4] md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="md:text-md text-sm">{subHeading.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout197Defaults = {
  heading: 'Empowering Communities Through Sister City Partnerships and Global Engagement',
  description:
    'Our Sister City Partnerships foster meaningful connections between communities across the globe. We specialize in proposal drafting and engagement facilitation to ensure successful collaborations.',
  image: {
    src: Program2,
    alt: 'Relume placeholder image',
  },
  subHeadings: [
    {
      title: 'Engagement Strategies',
      description: 'Facilitating dialogue and collaboration for impactful community partnerships.',
    },
    {
      title: 'Proposal Development',
      description:
        'Crafting tailored proposals to secure funding and support for your initiatives.',
    },
  ],
};
