import React, { useState } from "react";
import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Phone, Mail, GraduationCap, School, Users, CheckCircle2, Loader2 } from "lucide-react";

export default function Enquiry() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/classportinfo@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-8xl md:text-[11rem] font-black mb-4 sm:mb-10 tracking-tighter leading-[1] sm:leading-none drop-shadow-2xl"
          >
            Proposal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-base sm:text-2xl md:text-4xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight px-4"
          >
            Request a customized educational travel proposal for your institution.
          </motion.p>
        </div>
      </div>

      <Section className="py-16 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24">
          {/* Info */}
          <div className="space-y-10 sm:space-y-16">
            <div>
              <h2 className="text-3xl sm:text-6xl font-black text-slate-950 tracking-tighter mb-6 sm:mb-10 leading-[1] sm:leading-[0.9]">School Inquiry</h2>
              <p className="text-base sm:text-2xl text-slate-600 leading-relaxed font-medium">
                We partner with schools to create curriculum-aligned international programs. Fill out the form, and our academic consultants will design a bespoke itinerary for your students.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-12">
              {[
                { icon: School, title: "Curriculum Aligned", desc: "Programs designed to meet your specific academic objectives." },
                { icon: Users, title: "Group Management", desc: "End-to-end logistics for groups of 15 to 150+ students." },
                { icon: GraduationCap, title: "Academic Value", desc: "Workshops, university visits, and industry exposure." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-8">
                  <div className="bg-primary/5 w-12 sm:w-20 h-12 sm:h-20 rounded-xl sm:rounded-3xl flex items-center justify-center shrink-0 border border-primary/10">
                    <item.icon className="text-primary w-6 sm:w-10 h-6 sm:h-10" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight mb-1 sm:mb-3">{item.title}</h4>
                    <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 sm:p-12 glass rounded-[2.5rem] sm:rounded-[4rem] border border-white/40 shadow-2xl shadow-slate-200/50">
              <h3 className="text-xl sm:text-3xl font-black mb-6 sm:mb-8 tracking-tight text-slate-950">Why Schools Trust Us?</h3>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "ISO Certified Safety Standards",
                  "Expert Academic Consultants",
                  "Transparent Pricing & Logistics",
                  "24/7 On-Ground Support",
                ].map((text) => (
                  <li key={text} className="flex items-center gap-3 sm:gap-4 text-slate-600">
                    <CheckCircle2 className="text-secondary w-5 sm:w-8 h-5 sm:h-8" />
                    <span className="text-base sm:text-xl font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <Card className="glass p-6 sm:p-12 rounded-[2.5rem] sm:rounded-[5rem] shadow-2xl border border-white/40 overflow-hidden mt-8 lg:mt-0">
            <CardContent className="p-2 sm:p-8">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 tracking-tight">Proposal Requested!</h3>
                  <p className="text-xl text-slate-600 font-medium max-w-xs mx-auto">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setStatus("idle")}
                    variant="outline" 
                    className="rounded-full px-8 py-6 text-lg font-bold border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Send Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    <div className="space-y-2 sm:space-y-4">
                      <label className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">School Name</label>
                      <Input name="school_name" placeholder="Global International School" required className="rounded-xl sm:rounded-3xl py-5 sm:py-10 px-5 sm:px-8 text-base sm:text-xl border-slate-100 bg-white/50 focus:bg-white focus:ring-primary/10 transition-all font-medium" />
                    </div>
                    <div className="space-y-2 sm:space-y-4">
                      <label className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Contact Person</label>
                      <Input name="contact_person" placeholder="Principal / Coordinator" required className="rounded-xl sm:rounded-3xl py-5 sm:py-10 px-5 sm:px-8 text-base sm:text-xl border-slate-100 bg-white/50 focus:bg-white focus:ring-primary/10 transition-all font-medium" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    <div className="space-y-2 sm:space-y-4">
                      <label className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Phone Number</label>
                      <Input name="phone" placeholder="+91 89299 55666" required className="rounded-xl sm:rounded-3xl py-5 sm:py-10 px-5 sm:px-8 text-base sm:text-xl border-slate-100 bg-white/50 focus:bg-white focus:ring-primary/10 transition-all font-medium" />
                    </div>
                    <div className="space-y-2 sm:space-y-4">
                      <label className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Email Address</label>
                      <Input name="email" type="email" placeholder="admin@school.edu" required className="rounded-xl sm:rounded-3xl py-5 sm:py-10 px-5 sm:px-8 text-base sm:text-xl border-slate-100 bg-white/50 focus:bg-white focus:ring-primary/10 transition-all font-medium" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    <div className="space-y-2 sm:space-y-4">
                      <label className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Preferred Destination</label>
                      <Input name="destination" placeholder="e.g. Japan, Europe" className="rounded-xl sm:rounded-3xl py-5 sm:py-10 px-5 sm:px-8 text-base sm:text-xl border-slate-100 bg-white/50 focus:bg-white focus:ring-primary/10 transition-all font-medium" />
                    </div>
                    <div className="space-y-2 sm:space-y-4">
                      <label className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Expected Students</label>
                      <Input name="students_count" type="number" placeholder="e.g. 25" className="rounded-xl sm:rounded-3xl py-5 sm:py-10 px-5 sm:px-8 text-base sm:text-xl border-slate-100 bg-white/50 focus:bg-white focus:ring-primary/10 transition-all font-medium" />
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-4">
                    <label className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] ml-4 sm:ml-6">Message / Requirements</label>
                    <Textarea name="message" placeholder="Tell us about your specific learning goals..." className="rounded-[1.5rem] sm:rounded-[3rem] p-5 sm:p-8 text-base sm:text-xl min-h-[150px] sm:min-h-[200px] border-slate-100 bg-white/50 focus:bg-white focus:ring-primary/10 transition-all font-medium" />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full rounded-full py-5 sm:py-10 text-lg sm:text-2xl font-black shadow-xl sm:shadow-2xl sm:shadow-primary/30 hover:scale-[1.02] transition-all bg-primary text-white hover:bg-primary/90"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin" />
                    ) : (
                      <>Request Proposal <Send className="ml-2 sm:ml-4 w-5 sm:w-8 h-5 sm:h-8" /></>
                    )}
                  </Button>
                  {status === "error" && (
                    <p className="text-center text-red-500 text-sm font-bold">Something went wrong. Please try again.</p>
                  )}
                  <p className="text-center text-slate-400 text-[9px] sm:text-sm font-bold uppercase tracking-widest">
                    Our team will contact you within 24 hours.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>
    </motion.div>
  );
}
