import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import { COMPANY_NAME, LOGO_URL, FOUNDERS, INITIATIVES } from "@/constants/data";
import { Target, Eye, Users, Globe2, HeartHandshake, CheckCircle2 } from "lucide-react";
import GlobalCTA from "@/components/layout/GlobalCTA";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 bg-white"
    >
      {/* Hero */}
      <div className="bg-primary py-20 sm:py-48 text-white text-center relative overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[6rem]">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=95&w=2400"
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
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-base sm:text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight px-4"
          >
            "The World Is Your New Classroom"
          </motion.p>
        </div>
      </div>

      {/* Company Story */}
      <Section className="py-16 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-24 items-center">
          <div className="space-y-6 sm:space-y-10">
            <h2 className="text-3xl sm:text-6xl font-black text-slate-950 tracking-tighter leading-[1] sm:leading-[0.9]">Who Are We?</h2>
            <p className="text-base sm:text-2xl text-slate-600 leading-relaxed font-medium">
              Classport is an experiential learning travel organisation for all. Classport Eduventure believes that the world is the new classroomâ€”and every journey is a passport to global leadership.
            </p>
            <p className="text-base sm:text-2xl text-slate-600 leading-relaxed font-medium">
              Our global programs, workshops, and day trails are thoughtfully curated to integrate experiential, cultural, and immersive learning into the education ecosystem. Each experience is designed to foster confidence, expand knowledge, and enhance real-world awareness among students.
            </p>
            <p className="text-lg sm:text-3xl font-black text-primary italic tracking-tight">
              Let's "port our classes" beyond the bells and into the world.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[1.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 mt-8 lg:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=90&w=1200"
              alt="Students learning"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </Section>

      {/* Founders */}
      <Section title="Meet Our Founders" subtitle="The visionaries behind Classport's mission." className="py-20 sm:py-32 bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 max-w-7xl mx-auto">
          {FOUNDERS.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Apple-style soft glow background */}
              <div className="absolute inset-10 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 rounded-[3rem] sm:rounded-[5rem] blur-[100px] sm:blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative glass p-8 sm:p-16 md:p-24 rounded-[3rem] sm:rounded-[5rem] border border-white/40 shadow-xl overflow-hidden flex flex-col items-center text-center space-y-8 sm:space-y-14 backdrop-blur-3xl hover:shadow-2xl transition-all duration-700">
                {/* Image Container with Apple-style depth - 1:1 Ratio */}
                <div className="relative w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 group/img">
                  {/* Outer glow (outside clipping) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[3rem] sm:rounded-[5rem] blur-2xl sm:blur-3xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                  
                  {/* Main Squircle Container with Clipping */}
                  <div className="absolute inset-0 bg-white/40 rounded-[3rem] sm:rounded-[5rem] backdrop-blur-2xl border border-white/60 shadow-xl overflow-hidden">
                    {/* Inner depth ring */}
                    <div className="absolute inset-2 sm:inset-4 border border-white/30 rounded-[2.5rem] sm:rounded-[4.2rem] pointer-events-none z-20" />
                    
                    {/* The Image (Now inside overflow-hidden) */}
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-contain relative z-10 transition-all duration-1000 group-hover:scale-110 group-hover:-translate-y-4 sm:group-hover:-translate-y-8 drop-shadow-2xl" 
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Apple-style gloss/reflection */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-[3rem] sm:rounded-[5rem] pointer-events-none z-20 opacity-60" />
                  </div>
                </div>

                {/* Content with refined typography */}
                <div className="space-y-6 sm:space-y-10 relative z-10">
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-3xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tighter group-hover:text-primary transition-all duration-500">
                      {founder.name}
                    </h3>
                    <div className="flex justify-center">
                      <span className="text-[9px] sm:text-[11px] font-black text-primary uppercase tracking-[0.3em] sm:tracking-[0.5em] bg-primary/5 border border-primary/20 px-6 sm:px-10 py-2 sm:py-3 rounded-full shadow-sm backdrop-blur-md">
                        {founder.role}
                      </span>
                    </div>
                  </div>
                  <p className="text-lg sm:text-2xl md:text-3xl text-slate-600 leading-relaxed max-w-lg mx-auto font-medium tracking-tight">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Initiatives */}
      <Section className="bg-primary text-white rounded-[3rem] sm:rounded-[5rem] mx-4 sm:mx-6 py-20 sm:py-32" title="Classport Initiatives" subtitle="Diverse programs for every type of explorer.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {INITIATIVES.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/10 hover:bg-white/10 transition-all backdrop-blur-xl"
            >
              <div className="bg-white/10 w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-white/10">
                <CheckCircle2 className="text-secondary w-8 sm:w-10 h-8 sm:h-10" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 tracking-tight">{item.title}</h4>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="py-20 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 sm:p-20 rounded-[2.5rem] sm:rounded-[4rem] border border-white/40 shadow-2xl"
          >
            <div className="bg-primary/10 w-16 sm:w-24 h-16 sm:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-8 sm:mb-12 border border-primary/10">
              <Eye className="text-primary w-8 sm:w-12 h-8 sm:h-12" />
            </div>
            <h3 className="text-3xl sm:text-5xl font-black mb-6 sm:mb-8 tracking-tighter text-slate-950">Our Vision</h3>
            <p className="text-lg sm:text-2xl text-slate-600 leading-relaxed font-medium">
              To be the world's most trusted partner in educational travel, creating a generation of globally-aware, skilled, and empathetic leaders who are ready to solve tomorrow's challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 sm:p-20 rounded-[2.5rem] sm:rounded-[4rem] border border-white/40 shadow-2xl"
          >
            <div className="bg-secondary/10 w-16 sm:w-24 h-16 sm:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-8 sm:mb-12 border border-secondary/10">
              <Target className="text-secondary w-8 sm:w-12 h-8 sm:h-12" />
            </div>
            <h3 className="text-3xl sm:text-5xl font-black mb-6 sm:mb-8 tracking-tighter text-slate-950">Our Mission</h3>
            <p className="text-lg sm:text-2xl text-slate-600 leading-relaxed font-medium">
              To provide safe, high-quality, and impactful international exposure programs that empower students with real-world knowledge, cultural intelligence, and a lifelong passion for learning.
            </p>
          </motion.div>
        </div>
      </Section>

      <GlobalCTA />
    </motion.div>
  );
}
