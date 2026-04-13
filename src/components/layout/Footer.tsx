import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { COMPANY_NAME, LOGO_URL, NAV_LINKS, CONTACT_INFO } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="bg-[#fcfbf8] text-slate-600 pt-16 pb-8 border-t border-bone/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            <Link to="/" className="flex items-center gap-3 sm:gap-5 group">
              <div className="bg-white p-2 sm:p-3 rounded-xl sm:rounded-[1.2rem] shadow-md border border-bone/50 group-hover:scale-105 group-hover:shadow-xl transition-all duration-500">
                <img
                  src={LOGO_URL}
                  alt={COMPANY_NAME}
                  className="h-8 sm:h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl sm:text-3xl tracking-tighter text-slate-950 leading-none group-hover:text-primary transition-colors duration-300">
                  Classport
                </span>
                <span className="text-[8px] sm:text-[11px] font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-1 sm:mt-1.5 opacity-80">
                  Eduventure
                </span>
              </div>
            </Link>
            <p className="text-base sm:text-lg leading-relaxed font-medium text-slate-600 max-w-sm">
              Empowering students through global exposure and experiential learning. Boarding Bright Future.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bone/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"><Facebook size={18} /></a>
              <a href="https://instagram.com/guddu.xiv" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bone/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bone/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"><Twitter size={18} /></a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bone/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-950 font-bold text-sm uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm font-semibold hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-950 font-bold text-sm uppercase tracking-widest mb-8">Programs</h4>
            <ul className="space-y-4">
              <li><Link to="/programs" className="text-sm font-semibold hover:text-primary transition-colors duration-300">International Tours</Link></li>
              <li><Link to="/programs" className="text-sm font-semibold hover:text-primary transition-colors duration-300">STEM Innovation</Link></li>
              <li><Link to="/programs" className="text-sm font-semibold hover:text-primary transition-colors duration-300">University Exposure</Link></li>
              <li><Link to="/programs" className="text-sm font-semibold hover:text-primary transition-colors duration-300">Cultural Immersion</Link></li>
              <li><Link to="/programs" className="text-sm font-semibold hover:text-primary transition-colors duration-300">Leadership Camps</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-950 font-bold text-sm uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-sm font-semibold">
                <div className="w-10 h-10 rounded-xl bg-bone/30 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="pt-2">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-4 text-sm font-semibold">
                <div className="w-10 h-10 rounded-xl bg-bone/30 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <a href={`tel:${CONTACT_INFO.phone}`} className="pt-2 hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex gap-4 text-sm font-semibold">
                <div className="w-10 h-10 rounded-xl bg-bone/30 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="pt-2 hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bone/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 text-[12px] font-bold uppercase tracking-widest opacity-80">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center md:text-left">
            <p>Â© {new Date().getFullYear()} {COMPANY_NAME}.</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-950 text-white shadow-xl shadow-slate-900/10 hover:scale-105 hover:shadow-slate-900/20 transition-all duration-300 cursor-default border border-slate-800">
            <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">Developer</span>
            <div className="w-1 h-1 rounded-full bg-secondary animate-pulse" />
            <span className="text-[11px] font-black tracking-widest text-slate-50">Guddu Sharma</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
