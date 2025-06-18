export const ProgramHero = (props) => {
  const { heading, description } = {
    ...Header49Defaults,
    ...props,
  };

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 relative bg-gradient-to-r from-[#92B2E3] via-[#DADADA] to-[#E65F27]"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-5 md:grid-cols-2  lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-3xl font-normal md:text-4xl lg:text-6xl">{heading}</h1>
          </div>
          <div>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header49Defaults = {
  heading: 'Our Programs',
  description:
    'At ProC Education Services, we offer a range of programs designed to enhance educational opportunities and foster global connections. From international education consulting to sister city partnerships, our initiatives empower communities for a brighter future.',
};
