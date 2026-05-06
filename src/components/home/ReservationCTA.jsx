import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ReservationCTA() {
  return (
    <section className="max-w-8xl bg-white mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#FF003D] to-[#f70909e7] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
      >
        
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left text-white max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Own a Restaurant?
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            Join TableBliss and reach thousands of hungry diners. Managing bookings has never been easier.
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="flex-shrink-0">
          <Link
            to="/restaurants/list-your-restaurant"
            className="bg-white text-[#C2113A] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2 group"
          >
            List Your Restaurant
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
      </motion.div>
    </section>
  );
}