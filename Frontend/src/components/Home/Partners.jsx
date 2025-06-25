import Partner1 from '../../assets/Partner1.png';
import Partner3 from '../../assets/Partner3.png';

export const Partners = (props) => {
  const { heading, logos } = {
    ...Logo1Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20 bg-[#f9f9f9]">
      <div className="container">
        <h1 className="mx-auto mb-6 w-full max-w-lg text-center text-3xl font-normal leading-[1.2] md:mb-8 md:text-md md:leading-[1.2]">
          {heading}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-2 pt-4 md:pt-2">
          {logos.map((logo, index) => (
            // <a href={logo.href}>
            <img key={index} src={logo.src} alt={logo.alt} className="max-h-20 md:max-h-24" />
            // </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Logo1Defaults = {
  heading: 'Partners',
  logos: [
    { src: Partner1, alt: 'Instagram logo 2', href: 'https://www.instagram.com/proceduservices/' },
    { src: Partner3, alt: 'Instagram logo 2', href: 'https://www.instagram.com/proceduservices/' },
  ],
};
