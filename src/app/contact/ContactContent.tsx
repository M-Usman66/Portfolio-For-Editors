"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { useSound } from "@/hooks/useSound";
import { motion } from "framer-motion";

export default function ContactContent() {
  const { play } = useSound();

  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="00:04 — Contact"
          title="Tell me about the project."
          description="Fill in a few details and I'll follow up with next steps and availability."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <ContactMethod
              label="Email"
              value="usmandoc540@gmail.com"
              href="mailto:usmandoc540@gmail.com"
              onClick={() => play("click")}
            />
            <ContactMethod
              label="WhatsApp"
              value="Message directly"
              href="https://wa.me/03194644254"
              onClick={() => play("click")}
            />
            <div className="glass rounded-2xl p-5">
              <p className="timecode text-xs uppercase tracking-widest2 text-gold">
                Response time
              </p>
              <p className="mt-2 text-sm text-ash">
                Replies within one business day. For urgent turnarounds,
                mention your deadline in the message.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({
  label,
  value,
  href,
  onClick,
}: {
  label: string;
  value: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      data-cursor="OPEN"
      onClick={onClick}
      className="glass group flex items-center justify-between rounded-2xl p-5 transition-colors hover:border-gold/40"
    >
      <div>
        <p className="timecode text-xs uppercase tracking-widest2 text-ash">
          {label}
        </p>
        <p className="mt-1 text-bone">{value}</p>
      </div>
      <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </a>
  );
}
