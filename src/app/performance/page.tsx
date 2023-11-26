import Hero from '@/components/hero';
import performanceImg from 'public/images/performance.jpg';
export const PerformancePage = () => {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt='metal and sparks'
      title='Undenaible Performance'
    />
  );
};

export default PerformancePage;
