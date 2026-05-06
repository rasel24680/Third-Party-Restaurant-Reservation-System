// src/pages/Home.jsx
import HeroSection from "../components/home/HeroSection";
import AboutRestaurant from "../components/home/AboutRestaurant";
import Testimonials from "../components/home/Testimonials";
import ReservationCTA from "../components/home/ReservationCTA";
import BrowseByCuisine from "../components/home/BrowseByCuisine";
import TopRatedRestaurants from "../components/home/TopRatedRestaurants";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <BrowseByCuisine />
      <TopRatedRestaurants />
      <AboutRestaurant />
      <Testimonials />
      <ReservationCTA />
    </div>
  );
}