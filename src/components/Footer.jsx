import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Job<span className="text-red-500">Portal</span>
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Connecting talented professionals with top companies. Find your dream job or hire the perfect candidate with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-red-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-red-500 transition-colors">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/companies" className="hover:text-red-500 transition-colors">
                  Browse
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-red-500" />
                <span>support@jobportal.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-red-500" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-red-500" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-all">
                <Facebook size={20} />
              </a>

              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-all">
                <Twi size={20} />
              </a>

              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-all">
                <Linkedin size={20} />
              </a>

              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-all">
                <Github size={20} />
              </a>
            </div>

            <p className="mt-5 text-sm text-gray-400">Stay connected with us for the latest job opportunities.</p>
          </div> */}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} JobPortal. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-500">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-500">
              Help Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
