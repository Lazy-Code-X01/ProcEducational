export const AboutHero = (props) => {
  const { heading, description } = {
    ...Header46Defaults,
    ...props,
  };

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28  relative bg-[linear-gradient(to_right,_#ed774d,_#d2b0b0,_#a7c5eb)]"
    >
      <div className="container  relative top-10">
        <div className="w-full max-w-2xl">
          <h1 className="mb-5 text-3xl font-normal md:mb-6 md:text-5xl lg:text-6xl">{heading}</h1>
          <p className="md:text-md text-sm">{description}</p>
        </div>
      </div>
    </section>
  );
};

export const Header46Defaults = {
  heading: 'Our Visionary Mission',
  description:
    'Discover how ProC connects communities through education and global partnerships for a brighter future.',
};
