export const AboutHero = (props) => {
  const { heading, description } = {
    ...Header46Defaults,
    ...props,
  };

  return (
    <section className="relative text-center px-[5%] py-24 md:py-32 bg-[linear-gradient(to_left,_#92B2E3,_#E65F27)] text-white">
      <div className="container max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
        <div className="inline-block border-t-4 border-white mb-6 w-16"></div>
        <h1 className="text-5xl font-bold mb-4">{heading}</h1>
        <p className="text-md">{description}</p>
      </div>
    </section>
  );
};

export const Header46Defaults = {
  heading: 'Our Visionary Mission',
  description:
    'Discover how ProC connects communities through education and global partnerships for a brighter future.',
};
