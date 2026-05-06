import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, UtensilsCrossed } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  //social links Icons and URLs
  const socialLinks = [
    { name: 'Facebook', Icon: FaFacebookF, url: 'https://facebook.com' },
    { name: 'Twitter', Icon: FaTwitter, url: 'https://twitter.com' },
    { name: 'Instagram', Icon: FaInstagram, url: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-[#0D111D] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        
        {/* TableBliss Description & Social */}
        <div className="space-y-6">
          <NavLink to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-[#FF003D] p-1.5 rounded-lg">
              <UtensilsCrossed size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Table<span className="text-[#FF003D]">Bliss</span>
            </span>
          </NavLink>

          <p className="text-gray-400 max-w-xs">
            Connecting food lovers with the best restaurants for seamless table bookings.
          </p>
          
          {/* Updated Social Links Section */}
          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map(({ name, Icon, url }) => (
              <a 
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${name} page`}
                className="w-10 h-10 flex items-center justify-center p-2.5 rounded-lg bg-gray-800 text-white hover:bg-[#FF003D] transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* For Diners */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">For Diners</h4>
          <nav className="flex flex-col gap-3">
            {['Find Restaurants', 'Create Account', 'My Bookings'].map(link => (
              <NavLink 
                key={link}
                to={`/${link.toLowerCase().replace(/ /g, '-')}`}
                className={({ isActive }) => 
                  `text-gray-400 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`
                }
              >
                {link}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* For Restaurants */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">For Restaurants</h4>
          <nav className="flex flex-col gap-3">
            {['List Your Restaurant', 'Owner Dashboard', 'Partner Program'].map(link => (
              <NavLink 
                key={link}
                to={`/restaurants/${link.toLowerCase().replace(/ /g, '-')}`}
                className={({ isActive }) => 
                  `text-gray-400 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`
                }
              >
                {link}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Contact</h4>
          <div className="flex flex-col gap-4 text-gray-400">
            <div className="flex items-center gap-3">
              <Mail size={18} className="flex-shrink-0" />
              <a 
                href="mailto:support@tablebliss.com"
                className="hover:text-white transition-colors"
              >
                support@tablebliss.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="flex-shrink-0" />
              <a 
                href="tel:+1800822531" 
                className="hover:text-white transition-colors"
              >
                +1 800-TABLE-1
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="flex-shrink-0 mt-1" />
              <span>350 Fifth Avenue, New York, NY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-16 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 TableBliss. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(policy => (
              <NavLink 
                key={policy}
                to={`/${policy.toLowerCase().replace(/ /g, '-')}`}
                className="hover:text-gray-300 transition-colors"
              >
                {policy}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;