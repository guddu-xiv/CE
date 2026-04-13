import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import { VISA_DATA } from "@/constants/data";
import { FileCheck, CheckCircle2, Info, Phone, Mail, MapPin, Globe, Clock, CreditCard } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GlobalCTA from "@/components/layout/GlobalCTA";

export default function Visa() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 bg-white"
    >
      {/* Hero */}
      <div className="bg-primary py-20 sm:py-48 text-white text-center rounded-b-[2.5rem] sm:rounded-b-[6rem] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1557124816-e9b7d5440de2?auto=format&fit=crop&q=95&w=2400"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-8xl md:text-[11rem] font-black mb-4 sm:mb-10 tracking-tighter leading-[1] sm:leading-none drop-shadow-2xl"
          >
            Visa Support
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-base sm:text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight px-4"
          >
            Hassle-free documentation support for your global educational journey.
          </motion.p>
        </div>
      </div>

      {/* Intro */}
      <Section className="py-16 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 items-center">
          <div className="space-y-6 sm:space-y-12">
            <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-primary/10 text-primary font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] border border-primary/20">
              Expert Guidance
            </div>
            <h2 className="text-3xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[1] sm:leading-[0.9]">Documentation Checklist</h2>
            <p className="text-base sm:text-2xl text-slate-600 leading-relaxed font-medium">
              We provide comprehensive assistance for student and teacher visas. Our specialist team ensures that your documentation is perfect, minimizing the risk of delays or rejections.
            </p>
            <p className="text-sm sm:text-xl text-slate-500 leading-relaxed font-medium">
              Below are the standard documentation requirements for our most popular destinations. Please note that requirements can change, and we recommend contacting us for the most up-to-date checklist.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] sm:rounded-[5rem] -rotate-3 scale-105" />
            <div className="relative rounded-[2.5rem] sm:rounded-[5rem] overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=90&w=1200"
                alt="Visa documentation"
                className="w-full h-auto hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-white/40 max-w-[200px] sm:max-w-[280px] hidden md:block backdrop-blur-xl">
              <p className="text-lg sm:text-xl font-black text-slate-950 tracking-tight leading-tight">100% Documentation Support</p>
              <p className="text-[10px] sm:text-sm text-slate-500 mt-2 sm:mt-3 font-bold uppercase tracking-widest">Expert Guidance</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Checklists */}
      <Section className="bg-slate-50 rounded-[2.5rem] sm:rounded-[5rem] mx-4 sm:mx-6 py-16 sm:py-32">
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6 sm:space-y-10">
            {VISA_DATA.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass rounded-[1.5rem] sm:rounded-[4rem] px-4 sm:px-12 border border-white/40 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700">
                <AccordionTrigger className="text-lg sm:text-3xl font-black py-6 sm:py-12 hover:no-underline hover:text-primary transition-all group/trigger tracking-tighter">
                  <div className="flex items-center gap-3 sm:gap-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover/trigger:opacity-100 transition-opacity" />
                      <div className="relative bg-white p-1 sm:p-2 rounded-lg sm:rounded-2xl shadow-sm border border-slate-200 overflow-hidden shrink-0 group-hover/trigger:scale-110 transition-transform duration-700">
                        <img 
                          src={item.flag} 
                          alt={item.country} 
                          className="w-8 sm:w-16 h-5 sm:h-10 object-cover rounded sm:rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <span>{item.country}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 sm:pb-16">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-16">
                    {/* Left Column: Requirements */}
                    <div className="lg:col-span-2 space-y-6 sm:space-y-12">
                      <div>
                        <h4 className="text-lg sm:text-2xl font-black mb-6 sm:mb-10 flex items-center gap-2 sm:gap-4 text-slate-950 tracking-tight">
                          <CheckCircle2 className="text-primary w-5 sm:w-8 h-5 sm:h-8" />
                          Tourist Visa Requirements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                          {item.tourist.map((doc, idx) => (
                            <div key={idx} className="flex items-start gap-3 sm:gap-5 text-slate-600 bg-white/50 p-4 sm:p-6 rounded-xl sm:rounded-3xl border border-white/40 shadow-sm hover:bg-white transition-all">
                              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-secondary mt-2 sm:mt-3 shrink-0 shadow-lg shadow-secondary/30" />
                              <span className="text-sm sm:text-lg leading-relaxed font-medium">{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {item.notes && (
                        <div className="bg-amber-50/50 p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] border border-amber-100 shadow-sm">
                          <h5 className="text-base sm:text-xl font-black text-amber-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 tracking-tight">
                            <Info className="w-4 sm:w-6 h-4 sm:h-6" />
                            Important Notes
                          </h5>
                          <ul className="space-y-2 sm:space-y-4">
                            {item.notes.map((note, idx) => (
                              <li key={idx} className="text-sm sm:text-lg text-amber-800 flex items-start gap-2 sm:gap-4 font-medium">
                                <span className="mt-1.5 sm:mt-2.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-400 shrink-0" />
                                {note}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.biometric && (
                        <div className="bg-blue-50/50 p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] border border-blue-100 shadow-sm">
                          <h5 className="text-base sm:text-xl font-black text-blue-900 mb-4 flex items-center gap-2 sm:gap-3 tracking-tight">
                            <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                            Biometric Instructions
                          </h5>
                          <p className="text-sm sm:text-lg text-blue-800 leading-relaxed font-medium">{item.biometric}</p>
                        </div>
                      )}

                      {item.special && (
                        <div className="bg-slate-100 p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] border border-slate-200 shadow-sm">
                          <h5 className="text-base sm:text-xl font-black text-slate-900 mb-4 flex items-center gap-2 sm:gap-3 tracking-tight">
                            <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                            Special Instructions
                          </h5>
                          <p className="text-sm sm:text-lg text-slate-700 leading-relaxed font-medium">{item.special}</p>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Contact & Details */}
                    <div className="space-y-6 sm:space-y-8">
                      <div className="glass p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] border border-white/40 space-y-6 sm:space-y-8 shadow-xl">
                        <h5 className="text-lg sm:text-xl font-black text-slate-950 flex items-center gap-3 tracking-tight">
                          <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                          Embassy Details
                        </h5>
                        <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg text-slate-600 font-medium">
                          <p className="flex items-start gap-2 sm:gap-3">
                            <span className="font-black text-slate-950 shrink-0">Addr:</span> {item.address}
                          </p>
                          <p className="flex items-center gap-2 sm:gap-3">
                            <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-primary" /> {item.tel}
                          </p>
                          <p className="flex items-center gap-2 sm:gap-3">
                            <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary" /> {item.email}
                          </p>
                          {item.website && (
                            <p className="flex items-center gap-2 sm:gap-3">
                              <Globe className="w-4 sm:w-5 h-4 sm:h-5 text-primary" /> {item.website}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="glass p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] border border-white/40 space-y-4 sm:space-y-6 shadow-xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-black text-slate-950 tracking-tight">
                            <CreditCard className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                            Fees
                          </div>
                          <span className="text-[10px] sm:text-sm font-black text-primary bg-primary/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/10">{item.fees}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-black text-slate-950 tracking-tight">
                            <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                            Time
                          </div>
                          <span className="text-[10px] sm:text-sm font-black text-slate-500 uppercase tracking-[0.1em] sm:tracking-widest">{item.processing}</span>
                        </div>
                      </div>

                      <Button asChild className="w-full rounded-full py-6 sm:py-10 text-lg sm:text-2xl font-black shadow-xl sm:shadow-2xl sm:shadow-primary/30 transition-all hover:scale-[1.02] bg-primary text-white hover:bg-primary/90">
                        <Link to="/contact">
                          Contact for {item.country} Visa
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {item.jurisdiction && (
                    <div className="mt-8 sm:mt-12 p-6 sm:p-10 bg-slate-100/50 rounded-[1.5rem] sm:rounded-[3rem] border border-slate-200 shadow-sm">
                      <h5 className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">Jurisdiction Info</h5>
                      <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-medium">{item.jurisdiction}</p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <GlobalCTA />
    </motion.div>
  );
}
