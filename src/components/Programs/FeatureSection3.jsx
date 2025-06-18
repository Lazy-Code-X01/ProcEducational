import Program3 from '../../assets/Programs3.png';

export const FeatureSection3 = (props) => {
  const { heading, description, image } = {
    ...Layout90Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-2xl font-normal leading-[1.2] md:text-3xl lg:text-4xl">{heading}</h3>
          <p className="md:text-md">{description}</p>
        </div>
        <img src={image.src} className="w-full object-cover" alt={image.alt} />
      </div>
    </section>
  );
};

export const Layout90Defaults = {
  heading: 'Empowering Your Vision: Expert Grant Writing and Program Implementation Services',
  description:
    'Navigating the complexities of grant writing can be daunting. Our team provides tailored support to help you secure funding and successfully implement your programs. With our expertise, you can focus on what truly matters—making a difference in your community.',
  image: {
    src: Program3,
    alt: 'Relume placeholder image',
  },
};
