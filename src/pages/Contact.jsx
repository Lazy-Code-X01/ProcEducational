import React from 'react';
import { ContactHero } from '../components/Contact/ContactHero';
import { ContactSection } from '../components/Contact/ContactSection';
import { ContactFormSection } from '../components/Contact/ContactFormSection';
import { PatnersLogo } from '../components/Contact/PatnersLogo';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <ContactFormSection />
      <PatnersLogo />
    </div>
  );
};

export default Contact;
