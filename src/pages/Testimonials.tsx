import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import { TESTIMONIALS } from "@/constants/data";
import { Quote, Star, PlayCircle, MessageSquareQuote } from "lucide-react";
import GlobalCTA from "@/components/layout/GlobalCTA";

export default function Testimonials() {
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
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=95&w=2400"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-secondary/20 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-8 sm:mb-12 backdrop-blur-md border border-secondary/30 shadow-2xl"
          >
            <MessageSquareQuote className="text-secondary w-10 h-10 sm:w-16 sm:h-16" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-8xl md:text-[11rem] font-black mb-4 sm:mb-10 tracking-tighter leading-[1] sm:leading-none drop-shadow-2xl"
          >
            Voices
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-base sm:text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight px-4"
          >
            Real stories from students, parents, and educators who explored the world with us.
          </motion.p>
        </div>
      </div>

      {/* Featured Testimonials */}
      <Section className="py-16 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="glass p-8 sm:p-16 rounded-[2.5rem] sm:rounded-[4rem] relative flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-700 group border border-white/40"
            >
              <div className="absolute top-8 sm:top-12 right-8 sm:right-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={60} className="sm:w-[100px] sm:h-[100px] text-primary" />
              </div>
              
              <div className="space-y-6 sm:space-y-10">
                <div className="flex gap-1.5 sm:gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="sm:w-5 sm:h-5 fill-secondary text-secondary shadow-sm" />
                  ))}
                </div>
                <p className="text-lg sm:text-2xl text-slate-600 leading-relaxed italic font-medium">
                  "{t.content}"
                </p>
              </div>

              <div className="mt-10 sm:mt-16 flex items-center gap-4 sm:gap-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">{t.name}</h4>
                  <p className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-1">{t.role}</p>
                  <p className="text-[10px] sm:text-sm text-slate-400 font-bold mt-1.5 sm:mt-2 uppercase tracking-widest">{t.trip}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Video Testimonials Placeholder */}
      <Section className="bg-slate-950 text-white rounded-[2.5rem] sm:rounded-[5rem] mx-4 sm:mx-6 py-16 sm:py-32">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-24">
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-black mb-6 sm:mb-10 tracking-tighter leading-[1] sm:leading-[0.9]">Experience the Journey</h2>
          <p className="text-lg sm:text-2xl text-slate-400 font-medium leading-relaxed">Watch our students discover new cultures and build lifelong memories.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
          {[
            { title: "Japan STEM Tour Highlights", thumb: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=90&w=1200" },
            { title: "Europe Cultural Immersion", thumb: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=90&w=1200" },
          ].map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -10 }}
              className="relative aspect-video rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden group cursor-pointer shadow-2xl border border-white/10"
            >
              <img src={v.thumb} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12">
                <div className="w-16 h-16 sm:w-28 sm:h-28 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mb-4 sm:mb-8 border border-white/30 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  <PlayCircle size={32} className="sm:w-14 sm:h-14 text-white fill-white/20" />
                </div>
                <h3 className="text-xl sm:text-4xl font-black tracking-tighter">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <GlobalCTA />
    </motion.div>
  );
}
