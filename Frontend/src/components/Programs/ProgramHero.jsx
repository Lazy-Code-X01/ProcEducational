export const ProgramHero = (props) => {
  const { heading, description } = {
    ...Header49Defaults,
    ...props,
  };

  return (
    <section
      id="relume"
      className="px-[5%] py-25 md:py-24 lg:py-28 text-center text-white relative bg-[linear-gradient(to_left,_#92B2E3,_#E65F27)]"
    >
      <div className="container max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
        <div className="inline-block border-t-4 border-white mb-6 w-16"></div>
        {/* <div className="grid grid-cols-1 items-start gap-x-12 gap-y-5 md:grid-cols-2  lg:gap-x-20 lg:gap-y-16"> */}
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">{heading}</h1>

        <p className="md:text-md ">{description}</p>
        {/* </div> */}
      </div>
    </section>
  );
};

export const Header49Defaults = {
  heading: 'Our Programs',
  description:
    'ProC Education Services enhances learning through global programs, from education consulting to sister city partnerships, empowering communities worldwide.',
};
