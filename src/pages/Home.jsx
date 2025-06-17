import { Cta } from '../components/Home/CTASection';
import { FeatureSection } from '../components/Home/FeatureSection';
import { FeaturesListSection } from '../components/Home/FeaturesListSection';
import HomeHero from '../components/Home/HomeHero';
import { Testimonial } from '../components/Home/Testimonial';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <FeatureSection />
      <FeaturesListSection />
      <Testimonial />
      <Cta />
    </div>
  );
};

export default Home;
