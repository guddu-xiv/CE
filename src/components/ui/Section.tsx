import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function Section({
  children,
  className,
  id,
  containerClassName,
  title,
  subtitle,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-32",
        dark ? "bg-slate-950 text-white" : "bg-white text-slate-900",
        className
      )}
    >
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
        {(title || subtitle) && (
          <div className="mb-10 sm:mb-16 text-center max-w-3xl mx-auto">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "text-lg sm:text-xl md:text-2xl font-medium leading-relaxed",
                  dark ? "text-slate-400" : "text-slate-500"
                )}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
