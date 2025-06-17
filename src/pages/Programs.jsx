import React from 'react';
import { ProgramHero } from '../components/Programs/ProgramHero';
import { FeatureSection } from '../components/Programs/FeatureSection';
import { FeatureSection2 } from '../components/Programs/FeatureSection2';
import { FeatureSection3 } from '../components/Programs/FeatureSection3';
import { CTASection } from '../components/Programs/CTASection';
import { TestimonialSection } from '../components/Programs/Testimonial';

const Programs = () => {
  return (
    <div>
      <ProgramHero />
      <FeatureSection />
      <FeatureSection2 />
      <FeatureSection3 />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Programs;
