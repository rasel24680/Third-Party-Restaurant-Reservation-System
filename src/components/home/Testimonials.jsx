import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Food Enthusiast",
    comment: "TableBliss made booking our anniversary dinner effortless. The instant confirmation gave me peace of mind, and the restaurant was perfect!",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Frequent Diner",
    comment: "I love being able to filter by cuisine and see real-time availability. No more calling around to find a table on a busy Friday night.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Local Guide",
    comment: "The interface is incredibly intuitive. I've discovered so many hidden gems in my city just by browsing their curated lists.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Diners Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-base md:text-lg"
          >
            Join thousands of happy customers booking with TableBliss
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#FF003D] text-[#FF003D]" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Initial Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#FFF0F3] text-[#FF003D] flex items-center justify-center font-bold text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}