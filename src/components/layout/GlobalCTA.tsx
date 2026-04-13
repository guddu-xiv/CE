import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";

export default function GlobalCTA() {
  return (
    <Section className="bg-white py-20 sm:py-32">
      <div className="glass p-8 sm:p-16 md:p-32 rounded-[2.5rem] sm:rounded-[4rem] text-center max-w-6xl mx-auto relative overflow-hidden border border-white/40 shadow-[0_32px_64px_-16px_rgba(34,87,130,0.1)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-30%] right-[-10%] w-[70%] h-[70%] bg-primary rounded-full blur-[150px]" />
          <div className="absolute bottom-[-30%] left-[-10%] w-[70%] h-[70%] bg-secondary rounded-full blur-[150px]" />
        </div>
        
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-8xl font-black mb-6 sm:mb-10 tracking-tighter leading-[1] sm:leading-[0.9] text-slate-950"
          >
            Ready to Plan Your School's <br />
            <span className="text-primary">Next Global Adventure?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 sm:mb-16 max-w-3xl mx-auto leading-relaxed font-medium px-4"
          >
            Join 10,000+ students who have explored the world with Classport. 
            Get a customized proposal tailored to your school's curriculum.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 px-6"
          >
            <Button asChild size="lg" className="rounded-full px-8 sm:px-14 py-6 sm:py-10 text-lg sm:text-2xl font-black bg-primary text-white shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all hover:bg-primary/90">
              <Link to="/enquiry" className="flex items-center justify-center">
                Request Proposal <ArrowRight className="ml-3 w-6 h-6 sm:w-8 sm:h-8" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 sm:px-14 py-6 sm:py-10 text-lg sm:text-2xl font-black border-primary/20 text-primary hover:bg-primary/5 active:scale-95 transition-all shadow-xl">
              <Link to="/contact">Contact Experts</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
