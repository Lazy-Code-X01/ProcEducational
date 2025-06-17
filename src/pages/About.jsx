import { AboutHero } from '../components/About/AboutHero';
import { FeatureListSection } from '../components/About/FeatureListSection';
import { FeatureSection } from '../components/About/FeatureSection';
import { FeatureSection2 } from '../components/About/FeatureSection2';
import { FeatureSection3 } from '../components/About/FeatureSection3';
import { FeatureSection4 } from '../components/About/FeatureSection4';

const About = () => {
  return (
    <div>
      <AboutHero />
      <FeatureSection />
      <FeatureSection2 />
      <FeatureSection3 />
      <FeatureSection4 />
      <FeatureListSection />
    </div>
  );
};

export default About;
