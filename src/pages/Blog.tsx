import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import GlobalCTA from "@/components/layout/GlobalCTA";

export default function Blog() {
  const posts = [
    {
      title: "Why International Exposure Matters for Students",
      excerpt: "Exploring how global travel shapes personality and academic performance in young learners.",
      date: "Oct 12, 2025",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
      category: "Education"
    },
    {
      title: "STEM Innovation: A Journey to Japan",
      excerpt: "A deep dive into our recent STEM tour and the cutting-edge tech our students experienced.",
      date: "Sep 28, 2025",
      author: "Guddu Sharma",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",
      category: "Innovation"
    },
    {
      title: "Safety First: How We Manage International Tours",
      excerpt: "Understanding the rigorous safety protocols and SOPs that keep our students secure.",
      date: "Sep 15, 2025",
      author: "Safety Team",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000",
      category: "Safety"
    },
  ];

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
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=95&w=2400"
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
            Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-base sm:text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight px-4"
          >
            Travel insights, student experiences, and educational exposure stories.
          </motion.p>
        </div>
      </div>

      <Section className="py-16 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
            >
              <Card className="group h-full overflow-hidden border-none glass rounded-[2.5rem] sm:rounded-[4rem] shadow-xl hover:shadow-2xl transition-all duration-700 flex flex-col">
                <div className="relative h-64 sm:h-[24rem] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
                    <span className="bg-white/90 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[8px] sm:text-[10px] font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] border border-white/40 shadow-xl">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 sm:p-12 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-4 sm:mb-8">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <User className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black mb-4 sm:mb-6 tracking-tighter group-hover:text-primary transition-all leading-[1.1]">
                    {post.title}
                  </h3>
                  <p className="text-base sm:text-xl text-slate-600 mb-6 sm:mb-10 leading-relaxed line-clamp-3 font-medium">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Button variant="ghost" className="w-fit p-0 hover:bg-transparent hover:text-primary group/btn text-lg sm:text-xl font-black tracking-tight">
                      Read More 
                      <ArrowRight className="ml-2 sm:ml-3 w-5 sm:w-6 h-5 sm:h-6 transition-all group-hover/btn:translate-x-3" />
                    </Button>
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
