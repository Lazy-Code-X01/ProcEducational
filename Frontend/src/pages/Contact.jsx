import React from 'react';
import { ContactHero } from '../components/Contact/ContactHero';
import { ContactSection } from '../components/Contact/ContactSection';
import { ContactFormSection } from '../components/Contact/ContactFormSection';
import { SocialsLogo } from '../components/Contact/SocialsLogo';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <ContactFormSection />
      <SocialsLogo />
    </div>
  );
};

export default Contact;
