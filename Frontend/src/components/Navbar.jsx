import { useEffect, useState } from 'react';
import { Button, useMediaQuery } from '@relume_io/relume-ui';
import { AnimatePresence, motion } from 'framer-motion';
import LogoImage from '../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const { logo, navLinks, buttons } = {
    ...Navbar1Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 991px)');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="relume"
      className={`fixed top-0 z-[999] w-full border-b border-border-primary transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/70 shadow-md' : 'bg-white'
      } lg:min-h-18 lg:px-[5%]`}
    >
      <div className="container mx-auto flex items-center justify-between px-[5%] py-2 lg:px-0">
        {/* Left Section: Logo + Nav Links */}
        <div className="flex items-center gap-8">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} className="h-15 w-auto" />
          </a>
          <div className="hidden lg:flex items-center gap-6 ">
            {navLinks.map((navLink, index) => (
              <a
                key={index}
                onClick={() => navigate(navLink.url)}
                className={`text-base font-medium cursor-pointer transition-colors duration-200 ${
                  location.pathname === navLink.url
                    ? 'text-[#E65F27] font-extrabold'
                    : 'text-gray-700 hover:text-[#E65F27]'
                }`}
              >
                {navLink.title}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {buttons.map((button, index) => {
            const isStart = button.title.toLowerCase() === 'start';
            const isLearn = button.title.toLowerCase() === 'learn';

            return (
              <Button
                key={index}
                {...button}
                className={`px-6 py-2 rounded-full font-medium cursor-pointer transition-all duration-300  ${
                  isStart
                    ? 'bg-[#E65F27] text-white'
                    : isLearn
                      ? 'border border-gray-500 text-gray-700 hover:bg-[#f0e8e5]'
                      : ''
                }`}
                onClick={() => navigate('/contact')}
              >
                {button.title}
              </Button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black block"
            animate={isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'}
            variants={topLineVariants}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black block"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            variants={middleLineVariants}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black block"
            animate={isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'}
            variants={bottomLineVariants}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="close"
            animate="open"
            exit="close"
            variants={{
              open: { height: '100vh' },
              close: { height: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden px-[5%] lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 pt-6">
              {navLinks.map((navLink, index) => (
                <a
                  key={index}
                  onClick={() => {
                    navigate(navLink.url);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-lg cursor-pointer transition-colors duration-200 ${
                    location.pathname === navLink.url
                      ? 'text-[#E65F27] font-semibold'
                      : 'text-gray-700 hover:text-[#E65F27]'
                  }`}
                >
                  {navLink.title}
                </a>
              ))}
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  {...button}
                  className={`w-full ${
                    button.title.toLowerCase() === 'start' ? 'bg-[#E65F27] text-white' : ''
                  }`}
                  onClick={() => {
                    navigate('/contact');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;

// Default Props
export const Navbar1Defaults = {
  logo: {
    url: '/',
    src: LogoImage,
    alt: 'Logo image',
  },
  navLinks: [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: '/about' },
    { title: 'Programs', url: '/programs' },
    { title: 'Contact', url: '/contact' },
  ],
  buttons: [
    { title: 'Learn', variant: 'secondary', size: 'sm' },
    { title: 'Start', size: 'sm' },
  ],
};

// Animation Variants
const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: '1.5rem',
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
