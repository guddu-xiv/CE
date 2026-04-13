import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import { DESTINATIONS } from "@/constants/data";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Info } from "lucide-react";
import GlobalCTA from "@/components/layout/GlobalCTA";

export default function Destinations() {
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
            src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=95&w=2400"
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
            Global Hubs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-base sm:text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight px-4"
          >
            Explore the world's most vibrant learning hubs across continents.
          </motion.p>
        </div>
      </div>

      <Section className="py-16 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-none glass rounded-[2.5rem] sm:rounded-[4rem] shadow-xl hover:shadow-2xl transition-all duration-700 h-full flex flex-col">
                <div className="relative h-64 sm:h-[28rem] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 flex items-center gap-3 sm:gap-4 text-white">
                    <div className="bg-secondary p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl">
                      <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-xl sm:text-4xl font-black tracking-tighter">{dest.name}</span>
                  </div>
                </div>
                <CardContent className="p-8 sm:p-12 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-6 sm:mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary" />
                    ))}
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-2 sm:ml-3">Top Rated Hub</span>
                  </div>
                  
                  <div className="space-y-6 sm:space-y-8 flex-grow">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="bg-secondary/10 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-secondary/10">
                        <Star className="text-secondary w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                      </div>
                      <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">Top Attractions: Educational museums, tech parks, and cultural landmarks.</p>
                    </div>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="bg-primary/10 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-primary/10">
                        <Info className="text-primary w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                      </div>
                      <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">Learning Value: High exposure to global innovation and heritage.</p>
                    </div>
                  </div>

                  <div className="mt-8 sm:mt-12 pt-6 sm:pt-10 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Sample Programs</span>
                    <div className="flex -space-x-3 sm:-space-x-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white bg-slate-100 overflow-hidden shadow-lg ring-1 ring-slate-100">
                          <img src={`https://picsum.photos/seed/${dest.name}${i}/100/100`} alt="Program" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <GlobalCTA />
    </motion.div>
  );
}
