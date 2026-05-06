import { motion } from "framer-motion";

const cuisines = [
  { id: 1, name: "Italian", places: "1 places", emoji: "🍝" },
  { id: 2, name: "Japanese", places: "1 places", emoji: "🍣" },
  { id: 3, name: "French", places: "1 places", emoji: "🥐" },
  { id: 4, name: "Indian", places: "1 places", emoji: "🍛" },
  { id: 5, name: "American", places: "1 places", emoji: "🥩" },
  { id: 6, name: "Mediterranean", places: "1 places", emoji: "🫙" },
  { id: 7, name: "Contemporary", places: "", emoji: "🍽️" }, 
  { id: 8, name: "European", places: "", emoji: "🥗" },    
];

export default function BrowseByCuisine() {
  return (
    <section className="max-w-8xl mx-auto px-6 py-6  bg-[#f5f7fa]">
      {/* Title Section */}
      <div className="mb-8 text-left">
        <h2 className="text-[28px] font-bold text-gray-900 mb-1 tracking-tight">
          Browse by Cuisine
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Explore restaurants by your favorite cuisine type
        </p>
      </div>

      {/* Grid container for the cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {cuisines.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-6 px-2 bg-white border border-gray-100 rounded-[20px] hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group"
          >
            {/* Emoji Icon with subtle hover bounce */}
            <div className="text-3xl mb-3 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
              {item.emoji}
            </div>

            {/* Content */}
            <h3 className="text-[14px] font-semibold text-gray-900 mb-1 text-center">
              {item.name}
            </h3>
            
            {/* Render 'places' only if it exists in the data */}
            <div className="h-4">
              {item.places && (
                <p className="text-[13px] text-gray-400">
                  {item.places}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}