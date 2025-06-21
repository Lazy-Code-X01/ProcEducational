// import { useNavigate } from 'react-router-dom';
// import LogoImage from '../assets/logo.png';

// const Footer = (props) => {
//   const { logo, footerText, columnLinks } = {
//     ...Footer7Defaults,
//     ...props,
//   };

//   const navigate = useNavigate();

//   return (
//     <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-[#fff]">
//       <div className="container">
//         <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
//           <a href={logo.url} className="mb-8">
//             <img src={logo.src} alt={logo.alt} className="inline-block" />
//           </a>
//           {columnLinks.map((column, index) => (
//             <ul
//               key={index}
//               className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-4 md:justify-center md:justify-items-start"
//             >
//               {column.links.map((link, linkIndex) => (
//                 <li key={linkIndex} className="font-semibold cursor-pointer">
//                   <a onClick={() => navigate(link.url)}>{link.title}</a>
//                 </li>
//               ))}
//             </ul>
//           ))}
//         </div>
//         <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8">
//           <p className="mt-8 md:mt-0">{footerText}</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// export const Footer7Defaults = {
//   logo: {
//     url: '#',
//     src: LogoImage,
//     alt: 'Logo image',
//   },
//   columnLinks: [
//     {
//       links: [
//         { title: 'Contact Us', url: '/contact' },
//         { title: 'Our Program', url: '/programs' },
//         { title: 'Consultation', url: '/contact' },
//       ],
//     },
//   ],
//   footerText: '© 2025 ProC Education Services. All rights reserved.',
// };

import { useNavigate } from 'react-router-dom';
import LogoImage from '../assets/logo.png';

const Footer = (props) => {
  const { logo, footerText, columnLinks } = {
    ...Footer7Defaults,
    ...props,
  };

  const navigate = useNavigate();

  return (
    <footer id="relume" className="bg-white py-10 px-4">
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
