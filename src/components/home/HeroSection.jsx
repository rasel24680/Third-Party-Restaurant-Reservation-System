
import { Search, Calendar } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';

const HeroSection = () => {
  return (
    <section className="relative bg-[#0A0710] min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Background Glowing Blobs (Pure CSS) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF003D] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-[180px] opacity-10 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center max-w-7xl mx-auto px-6 pt-24 pb-16 text-center w-full">
        
        {/* Badge */}
        <AnimatedSection delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF003D] animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Over 500 restaurants on TableBliss</span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.2}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Reserve Your Perfect <span className="text-[#FF003D]">Table</span>
            <br /> Tonight
          </h1>
        </AnimatedSection>

        {/* Subheadline */}
        <AnimatedSection delay={0.3}>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Discover top-rated restaurants, check real-time availability, and book your table in seconds.
          </p>
        </AnimatedSection>

        {/* Search Bar */}
        <AnimatedSection delay={0.4} className="w-full max-w-4xl">
          <div className="flex flex-col md:flex-row items-center bg-white p-2 rounded-3xl md:rounded-full shadow-2xl">
            
            {/* Search Input */}
            <div className="flex-1 flex items-center w-full px-4 py-3 md:py-0">
              <Search className="text-gray-400 mr-3 flex-shrink-0" size={20} />
              <input
                type="text"
                placeholder="Search restaurants, cuisine, location..."
                className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 text-lg"
              />
            </div>

            {/* Divider (Hidden on mobile) */}
            <div className="hidden md:block w-px h-8 bg-gray-200 mx-2"></div>

            {/* Date Input */}
            <div className="flex-1 md:max-w-[220px] flex items-center w-full px-4 py-3 md:py-0 border-t md:border-t-0 border-gray-100">
              <Calendar className="text-gray-400 mr-3 flex-shrink-0" size={20} />
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none text-gray-600 text-lg uppercase cursor-pointer"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full md:w-auto mt-2 md:mt-0 bg-[#FF003D] text-white px-8 py-4 rounded-2xl md:rounded-full font-bold text-lg hover:bg-[#e60037] transition-all shadow-md hover:shadow-lg whitespace-nowrap">
              Find Tables
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 bg-[#FF003D] w-full py-8 mt-auto">
        <AnimatedSection delay={0.5}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-white mb-1">500+</span>
              <span className="text-sm md:text-base text-white/90 font-medium">Restaurants</span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-white mb-1">50K+</span>
              <span className="text-sm md:text-base text-white/90 font-medium">Happy Diners</span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-white mb-1">200K+</span>
              <span className="text-sm md:text-base text-white/90 font-medium">Reservations Made</span>
            </div>
            
            <div className="flex flex-col items-center justify-center border-none md:border-l border-white/20">
              <span className="text-3xl md:text-4xl font-extrabold text-white mb-1">4.8<span className="text-2xl">★</span></span>
              <span className="text-sm md:text-base text-white/90 font-medium">Average Rating</span>
            </div>

          </div>
        </AnimatedSection>
      </div>
      
    </section>
  );
};

export default HeroSection;