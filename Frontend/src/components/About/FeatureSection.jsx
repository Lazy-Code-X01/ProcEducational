import React from 'react';
import Feature1 from '../../assets/AboutFeature1.png';

export const FeatureSection = (props) => {
  const { heading, description, image, subHeadings } = {
    ...Layout6Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="rb-5 mb-5 text-2xl font-normal leading-[1.2] md:mb-6 md:text-3xl lg:text-4xl">
              {heading}
            </h1>
            <p className="mb-6 md:mb-8 text-md md:text-md">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-md font-normal leading-[1.4] md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="md:text-md text-sm">{subHeading.description}</p>
                </div>
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

export const Layout6Defaults = {
  heading: 'Meet Our Founder: A Visionary in Education and Global Connectivity',
  description:
    'Promise C. Ezeh, MHIT, is the driving force behind ProC Education Services. With a passion for bridging communities, she empowers individuals through innovative educational solutions.',
  subHeadings: [
    {
      title: 'Visionary Leader',
      description:
        "Promise's commitment to education fosters global connections and enriches communities across continents.",
    },
    {
      title: 'Global Connector',
      description:
        'She champions cultural exchange and collaboration, creating opportunities for all learners.',
    },
  ],
  image: {
    src: Feature1,
    alt: 'Relume placeholder image',
  },
};
