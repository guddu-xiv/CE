import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import { PROGRAMS } from "@/constants/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Cpu, GraduationCap, Languages, Mountain, CheckCircle2 } from "lucide-react";
import GlobalCTA from "@/components/layout/GlobalCTA";

const iconMap: Record<string, any> = {
  Globe,
  Cpu,
  GraduationCap,
  Languages,
  Mountain,
};

export default function Programs() {
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
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=95&w=2400" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-8xl md:text-[11rem] font-black mb-4 sm:mb-10 tracking-tighter leading-[1] sm:leading-none drop-shadow-2xl"
          >
            Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-base sm:text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight px-4"
          >
            Transformative educational experiences designed for the leaders of tomorrow.
          </motion.p>
        </div>
      </div>

      {/* Programs List */}
      <Section className="py-16 sm:py-32">
        <div className="space-y-12 sm:space-y-48">
          {PROGRAMS.map((program, index) => {
            const Icon = iconMap[program.icon];
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-24 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-[2rem] sm:rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/3] group cursor-pointer border border-slate-100"
                  >
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
                  </motion.div>
                </div>
                <div className={`space-y-6 sm:space-y-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-primary/5 w-12 sm:w-24 h-12 sm:h-24 rounded-xl sm:rounded-[2rem] flex items-center justify-center border border-primary/10">
                    <Icon className="text-primary w-6 sm:w-12 h-6 sm:h-12" />
                  </div>
                  <h2 className="text-2xl sm:text-6xl font-black text-slate-950 tracking-tighter leading-[1] sm:leading-[0.9]">{program.title}</h2>
                  <p className="text-base sm:text-2xl text-slate-600 leading-relaxed font-medium">
                    {program.description}
                  </p>
                  <div className="space-y-4 sm:space-y-8 pt-2 sm:pt-4">
                    <h4 className="text-sm sm:text-xl font-black text-slate-950 uppercase tracking-widest">What's Included</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                      {[
                        "Expert-led workshops",
                        "University campus visits",
                        "Cultural site tours",
                        "Safety-first logistics",
                        "Academic certification",
                        "24/7 group support",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 sm:gap-4 text-slate-600">
                          <CheckCircle2 className="text-secondary w-5 sm:w-8 h-5 sm:h-8 shrink-0" />
                          <span className="text-sm sm:text-xl font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 sm:pt-8">
                    <Button asChild size="lg" className="w-full sm:w-fit rounded-full px-6 sm:px-14 py-5 sm:py-10 text-lg sm:text-2xl font-black shadow-xl sm:shadow-2xl sm:shadow-primary/30 hover:scale-105 transition-all bg-primary text-white hover:bg-primary/90">
                      <Link to="/enquiry">Enquire for School</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <GlobalCTA />
    </motion.div>
  );
}
