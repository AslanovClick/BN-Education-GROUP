"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle } from "@phosphor-icons/react/ssr";
import { describedBy, Field, formPanelClass, Input, Select, Textarea } from "@/components/forms/Field";
import { useFormValidation } from "@/components/forms/useFormValidation";
import { EASE_OUT } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const SUBJECTS = [
  "General enquiry",
  "Boarding school placement",
  "University admissions",
  "Short & summer programmes",
  "Academic support",
  "Events & workshops",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  // No backend yet — a valid submission shows the confirmation state.
  const { errors, formProps } = useFormValidation(() => setSent(true));

  return (
    <div className={formPanelClass}>
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            role="status"
            className="flex flex-col items-start gap-4 py-6"
          >
            <Icon icon={CheckCircle} size={48} className="text-gold-500" />
            <h2 className="text-h3 text-ink-800">Thank you — message received</h2>
            <p className="text-body text-muted">We typically respond within 24 hours during business days.</p>
            <Button variant="outline-gold" size="md" onClick={() => setSent(false)} className="mt-2">
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            aria-labelledby="contact-form-title"
            className="flex flex-col gap-6"
            {...formProps}
          >
            <h2 id="contact-form-title" className="text-h3 text-ink-800 md:text-2xl">
              Send us a Message
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Full Name" required error={errors.name}>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="John Smith"
                  required
                  aria-invalid={!!errors.name || undefined}
                  aria-describedby={describedBy("name", errors.name)}
                />
              </Field>
              <Field id="email" label="Email Address" required error={errors.email}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  required
                  aria-invalid={!!errors.email || undefined}
                  aria-describedby={describedBy("email", errors.email)}
                />
              </Field>
              <Field id="phone" label="Phone Number" optional>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+41 12 345 67 89" />
              </Field>
              <Field id="subject" label="Subject" required error={errors.subject}>
                <Select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  required
                  aria-invalid={!!errors.subject || undefined}
                  aria-describedby={describedBy("subject", errors.subject)}
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  {SUBJECTS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </Select>
              </Field>
            </div>

            <Field id="message" label="Message" required error={errors.message}>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your educational goals…"
                required
                aria-invalid={!!errors.message || undefined}
                aria-describedby={describedBy("message", errors.message)}
              />
            </Field>

            <div className="flex flex-col gap-3">
              <Button type="submit" arrow className="w-full">
                Send Message
              </Button>
              <p className="text-center text-caption text-subtle">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
