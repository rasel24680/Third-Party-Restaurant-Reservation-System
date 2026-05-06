
import { motion } from 'framer-motion';
import { Search, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Search & Discover',
    description: 'Browse restaurants by cuisine, location, or rating. Filter by price range, features, and availability.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Check Availability',
    description: 'View real-time table availability for your preferred date, time, and party size.',
    icon: Calendar,
  },
  {
    id: '03',
    title: 'Book Instantly',
    description: 'Reserve your table in seconds and receive instant confirmation with all booking details.',
    icon: CheckCircle,
  }
];

export default function AboutRestaurant() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            How TableBliss Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-base md:text-lg"
          >
            Book your perfect dining experience in 3 easy steps
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center px-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                {/* Icon Container with Badge */}
                <div className="relative mb-8">
                  {/* Soft pink background square */}
                  <div className="w-20 h-20 bg-[#FFF0F3] rounded-2xl flex items-center justify-center">
                    <Icon size={32} className="text-[#FF003D]" strokeWidth={2} />
                  </div>
                  
                  {/* Overlapping Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FF003D] text-white rounded-full flex items-center justify-center text-xs font-bold border-[4px] border-white shadow-sm">
                    {step.id}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}