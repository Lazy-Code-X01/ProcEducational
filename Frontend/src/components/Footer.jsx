import { useLocation, useNavigate } from 'react-router-dom';
import LogoImage from '../assets/logo.png';

const Footer = (props) => {
  const { logo, footerText, columnLinks } = {
    ...Footer7Defaults,
    ...props,
  };

  const navigate = useNavigate();
  const location = useLocation();

  const isSpecialPage =
    location.pathname === '/contact' ||
    location.pathname === '/about' ||
    location.pathname === '/' ||
    location.pathname === '/programs';
  const footerBgClass = isSpecialPage ? 'bg-[#f9f9f9]' : 'bg-white text-black';

  return (
    <footer id="relume" className={`${footerBgClass} py-10 px-4`}>
      <div className="mx-auto w-full max-w-screen-md text-center">
        <a href={logo.url} className="inline-block mb-6">
          <img src={logo.src} alt={logo.alt} className="mx-auto h-12 w-auto" />
        </a>

        <ul className="mb-6 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
          {columnLinks[0].links.map((link, index) => (
            <li
              key={index}
              className="text-md font-medium text-gray-700 hover:text-black cursor-pointer"
            >
              <a onClick={() => navigate(link.url)}>{link.title}</a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500">{footerText}</p>
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
        { title: 'Contact Us', url: '/contact' },
        { title: 'Our Program', url: '/programs' },
        { title: 'Consultation', url: '/contact' },
      ],
    },
  ],
  footerText: '© 2025 ProC Education Services. All rights reserved.',
};
