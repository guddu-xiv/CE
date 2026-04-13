import { motion } from "motion/react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem]"
        >
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 mb-6 sm:mb-8 tracking-tight">Disclaimer</h1>
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
            <p className="text-lg text-slate-600 mb-6">Last updated: April 2026</p>
            
            <h2 className="text-2xl mt-8 mb-4">General Information</h2>
            <p className="text-slate-600 mb-4">
              The information contained on the Classport Eduventure website is for general information purposes only. Classport Eduventure assumes no responsibility for errors or omissions in the contents on the Service.
            </p>

            <h2 className="text-2xl mt-8 mb-4">External Links</h2>
            <p className="text-slate-600 mb-4">
              Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Classport Eduventure. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>

            <h2 className="text-2xl mt-8 mb-4">Travel Risks</h2>
            <p className="text-slate-600 mb-4">
              Travel involves inherent risks. While we prioritize safety and follow strict SOPs, Classport Eduventure cannot be held liable for unforeseen circumstances, natural disasters, or events beyond our direct control during the tours.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
