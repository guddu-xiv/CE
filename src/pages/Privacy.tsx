import { motion } from "motion/react";

export default function Privacy() {
  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem]"
        >
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 mb-6 sm:mb-8 tracking-tight">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
            <p className="text-lg text-slate-600 mb-6">Last updated: April 2026</p>
            
            <h2 className="text-2xl mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 mb-4">
              We collect information that you provide directly to us, such as when you fill out an enquiry form, request a quote, or contact our support team. This may include your name, email address, phone number, school details, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">
              We use the information we collect to provide, maintain, and improve our services, to process your requests, to send you related information, and to communicate with you about our educational tours and programs.
            </p>

            <h2 className="text-2xl mt-8 mb-4">3. Data Security</h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate technical and organizational measures to protect the personal data that we collect and process about you. The measures we use are designed to provide a level of security appropriate to the risk of processing your personal information.
            </p>

            <h2 className="text-2xl mt-8 mb-4">4. Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at info@classport.in.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
