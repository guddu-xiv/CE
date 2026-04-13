import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import { CRISIS_SOP } from "@/constants/data";
import { ShieldCheck, PhoneCall, HeartPulse, AlertTriangle, CheckCircle2, FileText, Users, Clock, ShieldAlert } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GlobalCTA from "@/components/layout/GlobalCTA";

export default function Safety() {
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
            className="bg-secondary/20 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-12 backdrop-blur-md border border-secondary/30 shadow-2xl"
          >
            <ShieldCheck className="text-secondary w-10 h-10 sm:w-16 sm:h-16" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-8xl md:text-[11rem] font-black mb-4 sm:mb-10 tracking-tighter leading-[1] sm:leading-none drop-shadow-2xl"
          >
            Safety & Trust
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-base sm:text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight px-4"
          >
            "Your Child's Safety is Our Highest Priority"
          </motion.p>
        </div>
      </div>

      {/* Core Principle */}
      <Section className="bg-slate-50 rounded-[2.5rem] sm:rounded-[5rem] mx-4 sm:mx-6 py-16 sm:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-secondary/10 text-secondary-foreground font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] border border-secondary/20">
            Core Principle
          </div>
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[1] sm:leading-[0.9]">{CRISIS_SOP.corePrinciple}</h2>
          <p className="text-lg sm:text-2xl md:text-3xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            {CRISIS_SOP.purpose}
          </p>
        </div>
      </Section>

      {/* Trust Pillars */}
      <Section title="Safety Standards" subtitle="Our rigorous protocols ensure we are prepared for any situation." className="py-16 sm:py-32">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 sm:gap-16">
          {[
            { icon: ShieldCheck, title: "Verified Partners", desc: "We only work with vetted transport, accommodation, and local partners." },
            { icon: PhoneCall, title: "24/7 Support", desc: "Our dedicated support team is available around the clock for any assistance." },
            { icon: HeartPulse, title: "Medical Support", desc: "Comprehensive insurance and access to top-tier medical facilities." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: "0 40px 80px -20px rgba(34,87,130,0.2)"
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1, 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 300
              }}
              className="glass p-4 sm:p-16 rounded-[1.5rem] sm:rounded-[4rem] text-center space-y-3 sm:space-y-8 border border-white/40 shadow-xl transition-all duration-500 group cursor-pointer"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                className="mx-auto bg-primary/5 w-12 h-12 sm:w-28 sm:h-28 rounded-[1rem] sm:rounded-[2rem] flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 transition-colors"
              >
                <item.icon className="text-primary w-6 h-6 sm:w-14 sm:h-14" />
              </motion.div>
              <h3 className="text-[10px] sm:text-3xl font-black tracking-tight text-slate-950 leading-tight">{item.title}</h3>
              <p className="hidden sm:block text-base sm:text-xl text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Crisis Management SOP */}
      <Section className="bg-primary text-white rounded-[2.5rem] sm:rounded-[5rem] mx-4 sm:mx-6 py-16 sm:py-32">
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-24">
          {/* Pre-Trip */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-12"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 text-center sm:text-left">
              <div className="bg-white/10 p-2 sm:p-6 rounded-xl sm:rounded-3xl backdrop-blur-md border border-white/10 shadow-xl">
                <FileText className="text-secondary w-5 h-5 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-[10px] sm:text-4xl font-black tracking-tighter leading-tight">Pre-Trip Risk</h3>
            </div>
            <ul className="space-y-2 sm:space-y-8">
              {CRISIS_SOP.preTrip.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-5 text-white/70">
                  <CheckCircle2 className="text-secondary w-3 h-3 sm:w-8 sm:h-8 shrink-0" />
                  <span className="text-[8px] sm:text-xl leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Command Structure */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-12"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 text-center sm:text-left">
              <div className="bg-white/10 p-2 sm:p-6 rounded-xl sm:rounded-3xl backdrop-blur-md border border-white/10 shadow-xl">
                <Users className="text-secondary w-5 h-5 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-[10px] sm:text-4xl font-black tracking-tighter leading-tight">Emergency Command</h3>
            </div>
            <div className="space-y-2 sm:space-y-8">
              {CRISIS_SOP.commandStructure.map((item, i) => (
                <div key={i} className="bg-white/5 p-3 sm:p-10 rounded-xl sm:rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all backdrop-blur-xl">
                  <p className="text-[6px] sm:text-xs font-black text-secondary uppercase tracking-[0.1em] sm:tracking-[0.3em] mb-1 sm:mb-4">{item.level}</p>
                  <p className="text-[8px] sm:text-2xl text-white font-black leading-tight tracking-tight">{item.entities}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Standards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-12"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 text-center sm:text-left">
              <div className="bg-white/10 p-2 sm:p-6 rounded-xl sm:rounded-3xl backdrop-blur-md border border-white/10 shadow-xl">
                <ShieldAlert className="text-secondary w-5 h-5 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-[10px] sm:text-4xl font-black tracking-tighter leading-tight">Safety Standards</h3>
            </div>
            <ul className="space-y-2 sm:space-y-8">
              {CRISIS_SOP.standards.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-5 text-white/70">
                  <CheckCircle2 className="text-secondary w-3 h-3 sm:w-8 sm:h-8 shrink-0" />
                  <span className="text-[8px] sm:text-xl leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Response Protocol */}
      <Section title="Emergency Response Protocol" subtitle="Structured actions in the critical first hour." className="py-16 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
          <div className="glass p-8 sm:p-16 rounded-[2.5rem] sm:rounded-[4rem] border border-white/40 shadow-2xl">
            <div className="flex items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-primary/5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-primary/10">
                <Clock className="text-primary w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tighter text-slate-950">First 30 Minutes</h3>
            </div>
            <ul className="space-y-6 sm:space-y-8">
              {CRISIS_SOP.responseProtocol.first30.map((item, i) => (
                <li key={i} className="flex items-center gap-4 sm:gap-6 text-slate-600">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full shadow-lg shadow-primary/30 shrink-0" />
                  <span className="text-base sm:text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 sm:p-16 rounded-[2.5rem] sm:rounded-[4rem] border border-white/40 shadow-2xl">
            <div className="flex items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-secondary/5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-secondary/10">
                <PhoneCall className="text-secondary w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tighter text-slate-950">Communication</h3>
            </div>
            <ul className="space-y-6 sm:space-y-8">
              {CRISIS_SOP.responseProtocol.next30.map((item, i) => (
                <li key={i} className="flex items-center gap-4 sm:gap-6 text-slate-600">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-secondary rounded-full shadow-lg shadow-secondary/30 shrink-0" />
                  <span className="text-base sm:text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Scenarios */}
      <Section title="Crisis Scenarios Covered" subtitle="We are prepared for every eventuality." className="py-32 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-8">
            {CRISIS_SOP.scenarios.map((scenario, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass rounded-[3rem] px-12 border border-white/40 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <AccordionTrigger className="text-3xl font-black py-10 hover:no-underline hover:text-primary transition-all tracking-tight text-slate-950">
                  {scenario}
                </AccordionTrigger>
                <AccordionContent className="text-2xl text-slate-600 leading-relaxed pb-12 font-medium">
                  Our response team is trained to handle {scenario.toLowerCase()} with immediate action plans, local authority coordination, and transparent communication with all stakeholders.
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
