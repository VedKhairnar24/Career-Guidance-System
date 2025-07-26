
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareerPathSelector from '@/components/CareerPathSelector';

const CareerFinder = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Career Path
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Use our advanced filters to discover the perfect career path and graduation course tailored to your unique profile
          </p>
        </div>
      </div>

      <CareerPathSelector />
      
      <Footer />
    </div>
  );
};

export default CareerFinder;
