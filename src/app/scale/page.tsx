import Hero from '@/components/hero';
import scaleImg from 'public/images/scale.jpg';

const ScalePage = () => {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt='dirty warehouse'
      title='Scale to Fit Your Needs'
    />
  );
};
export default ScalePage;
