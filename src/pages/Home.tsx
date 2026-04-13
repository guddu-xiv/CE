import { motion } from "motion/react";
import { ArrowRight, Globe, Cpu, GraduationCap, Languages, Mountain, ShieldCheck, CheckCircle2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GlobalCTA from "@/components/layout/GlobalCTA";
import {
  PROGRAMS,
  DESTINATIONS,
  STATS,
  SAFETY_HIGHLIGHTS,
  COMPANY_NAME,
  TAGLINE,
} from "@/constants/data";

const iconMap: Record<string, any> = {
  Globe,
  Cpu,
  GraduationCap,
  Languages,
  Mountain,
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden bg-white"
    >
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center pt-24 sm:pt-32 pb-12 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=95&w=2400"
            alt="Global Education"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="outline" className="mb-6 sm:mb-12 border-primary/20 text-primary px-4 sm:px-10 py-2 sm:py-4 text-[10px] sm:text-[13px] rounded-full bg-white/80 backdrop-blur-2xl shadow-2xl font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] border-white/50">
              {TAGLINE}
            </Badge>
            <h1 className="text-4xl sm:text-7xl md:text-9xl lg:text-[13rem] font-black text-slate-950 mb-6 sm:mb-14 tracking-tighter leading-[1] sm:leading-[0.7] drop-shadow-[0_10px_10px_rgba(0,0,0,0.05)] sm:drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]">
              The Future of <br />
              <span className="text-primary">Global Learning.</span>
            </h1>
            <p className="text-base sm:text-2xl md:text-4xl text-slate-600 mb-8 sm:mb-20 max-w-5xl mx-auto leading-relaxed font-medium tracking-tight px-2">
              Empowering students through world-class international exposure, 
              STEM innovation, and cultural journeys that redefine education.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 px-4">
              <Button asChild size="lg" className="rounded-full px-8 sm:px-20 py-6 sm:py-12 text-lg sm:text-3xl font-black bg-primary hover:bg-primary/90 text-white shadow-xl sm:shadow-[0_40px_80px_-20px_rgba(34,87,130,0.4)] transition-all hover:scale-105 active:scale-95">
                <Link to="/programs">Explore Programs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 sm:px-20 py-6 sm:py-12 text-lg sm:text-3xl font-black bg-white/80 backdrop-blur-xl text-primary border-primary/20 hover:bg-primary/5 transition-all hover:scale-105 active:scale-95 shadow-xl border-white/50">
                <Link to="/enquiry">Request Proposal</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <Section className="bg-white py-16 sm:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-12 auto-rows-auto md:auto-rows-[550px]">
          {/* Main Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -15, 
              scale: 1.01,
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.2)"
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-12 min-h-[250px] sm:min-h-0 glass rounded-[2rem] sm:rounded-[5rem] overflow-hidden relative group cursor-pointer shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=90&w=1600" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-20 left-6 sm:left-20 right-6 sm:right-20 text-white">
              <Badge className="bg-secondary text-white mb-3 sm:mb-8 rounded-full px-3 sm:px-6 py-1 sm:py-2 uppercase tracking-[0.3em] text-[7px] sm:text-[10px] font-black">Most Popular</Badge>
              <h3 className="text-xl sm:text-6xl font-black mb-2 sm:mb-6 tracking-tighter leading-[1] sm:leading-[0.9]">International Education Tours</h3>
              <p className="text-sm sm:text-2xl text-white/70 max-w-2xl font-medium leading-relaxed">Curated journeys that blend sightseeing with deep academic insights across 20+ countries.</p>
            </div>
          </motion.div>

          {/* Side Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -15, 
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 40px 80px -20px rgba(34,87,130,0.3)"
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 min-h-[200px] sm:min-h-0 bg-primary rounded-[2rem] sm:rounded-[5rem] overflow-hidden relative group cursor-pointer shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=90&w=1200" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
            <div className="relative z-10 p-6 sm:p-20 h-full flex flex-col justify-between text-white">
              <div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/10 w-10 sm:w-24 h-10 sm:h-24 rounded-lg sm:rounded-[2.5rem] flex items-center justify-center mb-4 sm:mb-12 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                  <Cpu className="text-white w-5 sm:w-12 h-5 sm:h-12" />
                </motion.div>
                <h3 className="text-xl sm:text-5xl font-black mb-2 sm:mb-8 tracking-tighter leading-[1] sm:leading-[0.9]">STEM Innovation</h3>
                <p className="text-white/80 text-sm sm:text-xl font-medium leading-relaxed">Hands-on exposure to global tech hubs.</p>
              </div>
            </div>
          </motion.div>

          {/* Side Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -15, 
              scale: 1.05,
              rotate: -1,
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.2)"
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 min-h-[200px] sm:min-h-0 glass rounded-[2rem] sm:rounded-[5rem] overflow-hidden relative group cursor-pointer shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756eaa539?auto=format&fit=crop&q=90&w=1200" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-16 left-6 sm:left-16 right-6 sm:right-16 text-white">
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/10 w-8 sm:w-16 h-8 sm:h-16 rounded-lg sm:rounded-3xl flex items-center justify-center mb-3 sm:mb-8 backdrop-blur-xl border border-white/20"
              >
                <GraduationCap className="text-secondary w-4 sm:w-10 h-4 sm:h-10" />
              </motion.div>
              <h3 className="text-lg sm:text-4xl font-black mb-1 sm:mb-4 tracking-tighter leading-[1] sm:leading-[0.9]">University Exposure</h3>
              <p className="text-white/70 text-[10px] sm:text-lg font-medium">Visit Ivy League & global campuses.</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stats - Minimal Apple Style */}
      <Section className="bg-white border-y border-slate-100 py-16 sm:py-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-20">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-950 mb-2 sm:mb-6 tracking-tighter leading-none">{stat.value}</p>
              <p className="text-primary font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[7px] sm:text-[10px] opacity-60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Popular Destinations - Horizontal Scroll Style */}
      <Section 
        title="Global Hubs" 
        subtitle="Where learning meets exploration."
        containerClassName="max-w-none px-0"
        className="py-16 sm:py-40 overflow-hidden"
      >
        <div className="flex gap-4 sm:gap-12 overflow-x-auto px-4 sm:px-20 pb-10 sm:pb-20 no-scrollbar snap-x">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-[260px] sm:min-w-[350px] md:min-w-[600px] aspect-[4/5] rounded-[2.5rem] sm:rounded-[5rem] overflow-hidden relative group snap-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 right-8 sm:right-16 text-white">
                <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-2 sm:mb-4">Destination</p>
                <h4 className="text-2xl sm:text-6xl font-black tracking-tighter leading-[1] sm:leading-[0.9]">{dest.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Safety Section - High Trust */}
      <Section dark className="bg-primary rounded-[2.5rem] sm:rounded-[5rem] mx-4 sm:mx-6 my-8 sm:my-12 py-16 sm:py-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[60%] h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[100%] h-[100%] bg-white rounded-full blur-[150px]" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-32 items-center relative z-10">
          <div>
            <Badge className="bg-white text-primary mb-6 sm:mb-12 rounded-full px-4 sm:px-8 py-2 sm:py-3 uppercase tracking-[0.3em] text-[8px] sm:text-[10px] font-black">Safety First</Badge>
            <h2 className="text-3xl sm:text-7xl md:text-9xl font-black mb-6 sm:mb-12 tracking-tighter leading-[1] sm:leading-[0.85] text-white">Your Child's Safety is Our <span className="text-secondary">Highest Priority.</span></h2>
            <p className="text-base sm:text-2xl text-white/70 mb-8 sm:mb-16 leading-relaxed font-medium">
              We operate with a zero-compromise policy on safety. From destination risk assessments to 24/7 on-ground support, we ensure a secure environment for every student.
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-12">
              {SAFETY_HIGHLIGHTS.slice(0, 3).map((item) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center gap-3 sm:gap-6"
                >
                  <div className="bg-white/10 w-10 sm:w-16 h-10 sm:h-16 rounded-xl sm:rounded-[1.5rem] flex items-center justify-center shrink-0 border border-white/10 backdrop-blur-xl shadow-2xl">
                    <ShieldCheck className="text-secondary w-5 sm:w-10 h-5 sm:h-10" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xl font-black text-white mb-1 sm:mb-3 tracking-tight leading-tight">{item.title}</h4>
                    <p className="hidden sm:block text-sm sm:text-lg text-white/50 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button asChild className="mt-10 sm:mt-20 rounded-full px-8 sm:px-16 py-6 sm:py-10 text-lg sm:text-2xl font-black bg-white text-primary hover:bg-slate-100 shadow-xl transition-all hover:scale-105 active:scale-95">
              <Link to="/safety">View Safety SOP</Link>
            </Button>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/5] rounded-[2.5rem] sm:rounded-[5rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=90&w=1200" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 sm:-bottom-16 -left-4 sm:-left-16 glass p-6 sm:p-12 rounded-[2rem] sm:rounded-[4rem] max-w-[240px] sm:max-w-md border border-white/40 shadow-2xl backdrop-blur-3xl"
            >
              <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 sm:w-6 h-3 sm:h-6 fill-secondary text-secondary shadow-sm" />)}
              </div>
              <p className="text-slate-950 italic mb-4 sm:mb-8 text-sm sm:text-2xl font-medium leading-relaxed">"The most professional educational travel partner we've ever worked with."</p>
              <div className="flex items-center gap-3 sm:gap-6">
                <div className="w-10 sm:w-16 h-10 sm:h-16 rounded-xl sm:rounded-[1.5rem] bg-primary/10 flex items-center justify-center border border-primary/10">
                  <GraduationCap className="text-primary w-5 sm:w-8 h-5 sm:h-8" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-lg font-black text-slate-950 uppercase tracking-widest leading-none">Principal</p>
                  <p className="text-[8px] sm:text-sm text-slate-500 font-bold mt-1 sm:mt-2">Global International School</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Global CTA */}
      <GlobalCTA />
    </motion.div>
  );
}
