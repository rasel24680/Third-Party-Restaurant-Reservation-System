import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Eye,
  EyeOff,
  UtensilsCrossed,
  ArrowRight,
  ChefHat,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("diner");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      return setError("All fields are required");
    }

    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="bg-red-500 p-2 rounded-lg">
              <UtensilsCrossed className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Table<span className="text-red-500">Bliss</span>
            </span>
          </div>

          <p className="text-gray-600 text-sm">
            Join TableBliss to start booking tables.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded-lg text-sm text-center mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setRole("diner")}
              className={`p-3 rounded-xl border-2 flex items-center gap-2 font-medium ${
                role === "diner"
                  ? "border-red-500 bg-red-50 text-red-600"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              <User size={18} />
              Diner
            </button>

            <button
              type="button"
              onClick={() => setRole("owner")}
              className={`p-3 rounded-xl border-2 flex items-center gap-2 font-medium ${
                role === "owner"
                  ? "border-red-500 bg-red-50 text-red-600"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              <ChefHat size={18} />
              Owner
            </button>
          </div>

      {/* Full Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white border text-gray-500 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF003D]/20 focus:border-[#FF003D] transition-all"
                placeholder="John Doe"
              />
            </div>
          </div>
            {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white border text-gray-500 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF003D]/20 focus:border-[#FF003D] transition-all"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-[#FF003D]/20 focus:border-[#FF003D] transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-[#FF003D]/20 focus:border-[#FF003D] transition-all"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-3 text-gray-600"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Create Account <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-600 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google */}
        <button className="w-full border border-gray-300 py-2 rounded-xl flex items-center justify-center gap-2 text-gray-800">
          <FcGoogle size={20} />
          Sign up with Google
        </button>

        {/* Login */}
        <p className="text-center text-sm mt-5 text-gray-700">
          Already have an account?{" "}
          <Link to="/signin" className="text-red-500 font-semibold">
            Login
          </Link>
        </p>

       <p className="text-center text-xs mt-3 text-gray-500">
        By signing up, you agree to our <span className="text-red-500">Terms of Service</span> and <span className="text-red-500">Privacy Policy</span>
        </p> 
      </motion.div>
    </div>
  );
}