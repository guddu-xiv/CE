import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Send, Globe2 } from "lucide-react";
import { CONTACT_INFO } from "@/constants/data";

export default function Contact() {
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
            src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=95&w=2400"
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
            Connect
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-base sm:text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight px-4"
          >
            We're here to help you plan the perfect educational journey.
          </motion.p>
        </div>
      </div>

      <Section className="py-16 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24">
          {/* Contact Info */}
          <div className="space-y-10 sm:space-y-16">
            <div>
              <h2 className="text-3xl sm:text-6xl font-black text-slate-950 tracking-tighter leading-[1] sm:leading-[0.9] mb-6 sm:mb-10">Get in Touch</h2>
              <p className="text-base sm:text-2xl text-slate-600 leading-relaxed font-medium">
                Whether you're a school administrator, a parent, or a student, our team is ready to answer your questions and provide the support you need.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-12">
              {[
                { icon: Mail, title: "Email Us", detail: CONTACT_INFO.email, sub: "We respond within 24 hours", href: `mailto:${CONTACT_INFO.email}` },
                { icon: Phone, title: "Call Us", detail: CONTACT_INFO.phone, sub: "Mon-Sat, 9am - 6pm", href: `tel:${CONTACT_INFO.phone}` },
                { icon: MapPin, title: "Visit Us", detail: CONTACT_INFO.address, sub: "Corporate Headquarters", href: "#" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-8 group">
                  <div className="bg-primary/5 w-12 sm:w-20 h-12 sm:h-20 rounded-xl sm:rounded-3xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10 shadow-sm shrink-0">
                    <item.icon className="w-6 sm:w-10 h-6 sm:h-10" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1 sm:mb-2">{item.title}</h4>
                    {item.href !== "#" ? (
                      <a href={item.href} className="text-lg sm:text-3xl font-black text-slate-950 tracking-tight mb-1 sm:mb-2 hover:text-primary transition-colors block">{item.detail}</a>
                    ) : (
                      <p className="text-lg sm:text-3xl font-black text-slate-950 tracking-tight mb-1 sm:mb-2">{item.detail}</p>
                    )}
                    <p className="text-sm sm:text-xl text-slate-500 font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-8">
              <h4 className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em]">Follow Us</h4>
              <div className="flex gap-3 sm:gap-6">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-slate-50 p-3 sm:p-6 rounded-xl sm:rounded-3xl text-slate-600 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-slate-100"
                  >
                    <Icon size={20} className="sm:w-8 sm:h-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-6 sm:p-20 rounded-[2.5rem] sm:rounded-[5rem] shadow-2xl border border-white/40 mt-8 lg:mt-0">
            <form className="space-y-6 sm:space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 sm:space-y-4">
                <label className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Full Name</label>
                <Input placeholder="John Doe" className="rounded-xl sm:rounded-3xl py-5 sm:py-10 px-5 sm:px-8 text-base sm:text-xl border-slate-100 bg-white/50 focus:bg-white focus:ring-primary/10 transition-all font-medium" />
              </div>
              <div className="space-y-2 sm:space-y-4">
                <label className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Email Address</label>
                <Input type="email" placeholder="john@school.edu" className="rounded-xl sm:rounded-3xl py-5 sm:py-10 px-5 sm:px-8 text-base sm:text-xl border-slate-100 bg-white/50 focus:bg-white focus:ring-primary/10 transition-all font-medium" />
              </div>
              <div className="space-y-2 sm:space-y-4">
                <label className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Message</label>
                <Textarea placeholder="Tell us about your inquiry..." className="rounded-[1.5rem] sm:rounded-[3rem] p-5 sm:p-8 text-base sm:text-xl min-h-[150px] sm:min-h-[250px] border-slate-100 bg-white/50 focus:bg-white focus:ring-primary/10 transition-all font-medium" />
              </div>
              <Button className="w-full rounded-full py-5 sm:py-10 text-lg sm:text-2xl font-black shadow-xl sm:shadow-2xl sm:shadow-primary/30 hover:scale-[1.02] transition-all bg-primary text-white hover:bg-primary/90">
                Send Message
                <Send className="ml-2 sm:ml-4 w-5 sm:w-8 h-5 sm:h-8" />
              </Button>
              <p className="text-center text-slate-400 text-[9px] sm:text-sm font-bold uppercase tracking-widest">
                We'll get back to you shortly.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </motion.div>
  );
}
