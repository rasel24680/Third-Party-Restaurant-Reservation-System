// src/components/home/TopRatedRestaurants.jsx

import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const restaurants = [
  {
    id: 1,
    name: "Sakura Garden",
    category: "Japanese",
    price: "$$$$",
    rating: 4.9,
    reviews: 215,
    location: "Brooklyn, New York",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    description:
      "An immersive Japanese dining experience featuring fresh sushi, sashimi, and traditional hot pot dishes.",
    tags: ["WiFi", "Private Dining", "Omakase Menu"],
  },
  {
    id: 2,
    name: "Prime Cut Steakhouse",
    category: "American",
    price: "$$$$",
    rating: 4.8,
    reviews: 412,
    location: "Midtown, New York",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    description:
      "New York’s premier steakhouse, serving USDA Prime dry-aged beef and exceptional seafood.",
    tags: ["Valet Parking", "Private Dining", "Wine Cellar"],
  },
  {
    id: 3,
    name: "La Bella Italia",
    category: "Italian",
    price: "$$$",
    rating: 4.7,
    reviews: 342,
    location: "Manhattan, New York",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    description:
      "Authentic Italian cuisine crafted with imported ingredients and family recipes.",
    tags: ["WiFi", "Parking", "Outdoor Seating"],
  },
  {
    id: 4,
    name: "Spice of India",
    category: "Indian",
    price: "$$",
    rating: 4.6,
    reviews: 289,
    location: "Queens, New York",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    description:
      "Experience the vibrant world of Indian cuisine with rich curries and tandoor dishes.",
    tags: ["WiFi", "Takeaway", "Vegan Options"],
  },
  {
    id: 5,
    name: "Le Petit Bistro",
    category: "French",
    price: "$$$",
    rating: 4.5,
    reviews: 178,
    location: "Upper West Side, New York",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    description:
      "A charming French bistro offering classic Parisian dishes in an intimate atmosphere.",
    tags: ["WiFi", "Wine Bar", "Romantic Setting"],
  },
  {
    id: 6,
    name: "Aegean Blue",
    category: "Mediterranean",
    price: "$$$",
    rating: 4.4,
    reviews: 167,
    location: "Battery Park, New York",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
    description:
      "Mediterranean seafood restaurant with panoramic waterfront views.",
    tags: ["Waterfront View", "Outdoor Terrace", "Seafood Bar"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function TopRatedRestaurants() {
  return (
    <section className="bg-[#f5f7fa] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Top Rated Restaurants
            </h2>
            <p className="mt-2 text-slate-500">
              Discover our highest-rated dining experiences
            </p>
          </div>

          <button className="font-medium text-rose-500 hover:text-rose-600">
            View all →
          </button>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {restaurants.map((restaurant) => (
            <motion.div
              key={restaurant.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="h-52 w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">
                  {restaurant.category}
                </span>

                <span className="absolute right-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">
                  {restaurant.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    {restaurant.name}
                  </h3>

                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={15} fill="currentColor" />
                    <span className="text-sm font-medium text-slate-700">
                      {restaurant.rating}
                    </span>
                    <span className="text-xs text-slate-400">
                      ({restaurant.reviews})
                    </span>
                  </div>
                </div>

                <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={14} />
                  {restaurant.location}
                </div>

                <p className="mb-4 line-clamp-2 text-sm text-slate-500">
                  {restaurant.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {restaurant.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}