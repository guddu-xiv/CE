import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NAV_LINKS, LOGO_URL, COMPANY_NAME } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-7xl",
        scrolled 
          ? "top-2 sm:top-4" 
          : "top-4 sm:top-6"
      )}
    >
      <div className={cn(
        "mx-auto transition-all duration-700 rounded-[2rem] sm:rounded-[3rem] px-4 sm:px-8 py-3 sm:py-4",
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-white/40"
          : "bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
      )}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-5 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-1.5 sm:p-3 rounded-lg sm:rounded-[1.2rem] shadow-xl border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:border-primary/20"
            >
              <img
                src={LOGO_URL}
                alt={COMPANY_NAME}
                className="h-7 sm:h-14 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-base sm:text-3xl md:text-4xl tracking-tighter text-slate-950 leading-none group-hover:text-primary transition-colors duration-300">
                Classport
              </span>
              <span className="text-[6px] sm:text-[11px] md:text-[12px] font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-0.5 sm:mt-1.5 opacity-80">
                Eduventure
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-[12px] font-bold px-3.5 py-2 rounded-full transition-all duration-300 tracking-tight whitespace-nowrap",
                  location.pathname === link.href
                    ? "bg-slate-950 text-white shadow-lg"
                    : scrolled
                      ? "text-slate-600 hover:text-slate-950 hover:bg-slate-100/50"
                      : "text-slate-900 hover:text-slate-950 hover:bg-white/20"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-slate-200">
              <Button asChild className="rounded-full px-6 py-4 text-[12px] font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                <Link to="/enquiry">Enquire Now</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <Button asChild size="sm" className="rounded-full px-4 sm:flex hidden bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
              <Link to="/enquiry">Enquire</Link>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-2xl bg-white/80 backdrop-blur-md text-primary hover:bg-primary/10 border border-slate-100 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="lg:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-white/95 backdrop-blur-3xl shadow-2xl border border-white/40 overflow-hidden rounded-[2rem]"
          >
            <div className="p-5 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "block px-5 py-3 text-base font-bold rounded-xl transition-all",
                    location.pathname === link.href
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full rounded-full py-5 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                  <Link to="/enquiry">School Enquiry</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
