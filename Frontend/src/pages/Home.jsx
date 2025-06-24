import { Partners } from '../components/Home/Partners';
import { Cta } from '../components/Home/CTASection';
import { FeatureSection } from '../components/Home/FeatureSection';
import { FeaturesListSection } from '../components/Home/FeaturesListSection';
import HomeHero from '../components/Home/HomeHero';
import { Testimonials } from '../components/Home/Testimonial';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <FeatureSection />
      <FeaturesListSection />
      <Testimonials />
      <Cta />
      <Partners />
    </div>
  );
};

export default Home;
