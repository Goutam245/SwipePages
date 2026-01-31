import { motion } from "framer-motion";
import { Star, MapPin, Phone, Mail, Shield, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ink text-white py-16 px-4 md:px-6 lg:px-8">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-ct-green">Canberra</span> Tutoring
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              Helping Canberra students achieve academic excellence since 2018. 
              Personalized tutoring that builds confidence and delivers results.
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-ct-yellow text-ct-yellow" />
                  ))}
                </div>
                <span className="text-sm">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
                <Shield className="w-4 h-4 text-ct-green" />
                <span className="text-sm">WWC Verified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
                <Award className="w-4 h-4 text-ct-yellow" />
                <span className="text-sm">ACT Accredited</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="tel:+61261234567" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  (02) 6123 4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@canberratutoring.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  hello@canberratutoring.com.au
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Canberra, ACT
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#book" className="hover:text-white transition-colors">Book Assessment</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Maths Tutoring</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">English Tutoring</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2025 Canberra Tutoring. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
