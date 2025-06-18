import LogoImage from '../assets/logo.png';

const Footer = (props) => {
  const { logo, footerText, columnLinks, footerLinks } = {
    ...Footer7Defaults,
    ...props,
  };

  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-[#f9f9f9f9]">
      <div className="container">
        <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
          <a href={logo.url} className="mb-8">
            <img src={logo.src} alt={logo.alt} className="inline-block" />
          </a>
          {columnLinks.map((column, index) => (
            <ul
              key={index}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-4 md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="font-semibold">
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline decoration-black underline-offset-1">
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const Footer7Defaults = {
  logo: {
    url: '#',
    src: LogoImage,
    alt: 'Logo image',
  },
  columnLinks: [
    {
      links: [
        { title: 'Contact Us', url: '#' },
        { title: 'Our Program', url: '#' },
        { title: 'Blog Insights', url: '#' },
        { title: 'Get Involved', url: '#' },
        { title: 'Consultation', url: '#' },
      ],
    },
  ],
  footerText: '© 2025 ProC Education Services. All rights reserved.',
  footerLinks: [
    { title: 'Privacy Policy', url: '#' },
    { title: 'Terms of Service', url: '#' },
    { title: 'Cookies Settings', url: '#' },
  ],
};
