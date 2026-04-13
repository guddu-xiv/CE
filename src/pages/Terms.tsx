import { motion } from "motion/react";

export default function Terms() {
  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem]"
        >
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 mb-6 sm:mb-8 tracking-tight">Terms & Conditions</h1>
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
            <p className="text-lg text-slate-600 mb-6">Last updated: April 2026</p>
            
            <h2 className="text-2xl mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-4">
              By accessing and using the Classport Eduventure website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl mt-8 mb-4">2. Booking and Payments</h2>
            <p className="text-slate-600 mb-4">
              All tour bookings are subject to availability and confirmation. A deposit is required to secure a booking. Full payment must be received prior to the departure date as specified in your booking confirmation.
            </p>

            <h2 className="text-2xl mt-8 mb-4">3. Cancellations and Refunds</h2>
            <p className="text-slate-600 mb-4">
              Cancellation policies vary depending on the specific tour and timing of the cancellation. Please refer to your specific booking agreement for detailed cancellation terms.
            </p>

            <h2 className="text-2xl mt-8 mb-4">4. Liability</h2>
            <p className="text-slate-600 mb-4">
              While we take every precaution to ensure the safety of our participants, Classport Eduventure acts only as an agent for the various independent suppliers that provide hotel accommodations, transportation, sightseeing, activities, or other services connected with this tour.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
