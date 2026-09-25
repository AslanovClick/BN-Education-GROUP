"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle } from "@phosphor-icons/react/ssr";
import { Checkbox, describedBy, Field, formPanelClass, Input, Select } from "@/components/forms/Field";
import { useFormValidation } from "@/components/forms/useFormValidation";
import { EASE_OUT } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import type { EventItem } from "@/content/events";
import { routes } from "@/content/site";

const DIAL_CODES = ["+41", "+44", "+49", "+33", "+39", "+34", "+1", "+971", "+7"];
const AGES = Array.from({ length: 14 }, (_, i) => String(i + 5)); // 5–18
const GRADES = [
  "Primary school",
  "Middle school (Grades 6–8)",
  "High school (Grades 9–10)",
  "High school (Grades 11–12)",
  "Gap year",
  "University",
];

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="w-full border-b border-line pb-4 text-lg font-bold text-ink-800">{children}</h2>;
}

export function RegistrationForm({ event }: { event: EventItem }) {
  const [done, setDone] = useState(false);
  // No backend yet — a valid submission shows the confirmation state.
  const { errors, formProps } = useFormValidation(() => setDone(true));

  return (
    <div className={formPanelClass}>
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="flex flex-col items-start gap-4 py-6"
            role="status"
          >
            <Icon icon={CheckCircle} size={48} className="text-gold-500" />
            <h2 className="text-h3 text-ink-800">You’re registered</h2>
            <p className="text-body text-muted">
              Thank you — your place at <span className="font-semibold text-ink-800">{event.title}</span> on{" "}
              {event.date} is reserved. We’ve sent the details to your email.
            </p>
            <TextLink href={routes.events} className="mt-2">
              Browse more events
            </TextLink>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            aria-label={`Register for ${event.title}`}
            className="flex flex-col gap-10"
            {...formProps}
          >
            <input type="hidden" name="event" value={event.id} />

            <fieldset className="flex flex-col gap-6">
              <legend className="contents">
                <SectionTitle>Personal Details</SectionTitle>
              </legend>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="firstName" label="First Name" required error={errors.firstName}>
                  <Input
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="e.g. Sarah"
                    required
                    aria-invalid={!!errors.firstName || undefined}
                    aria-describedby={describedBy("firstName", errors.firstName)}
                  />
                </Field>
                <Field id="lastName" label="Last Name" required error={errors.lastName}>
                  <Input
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="e.g. Jenkins"
                    required
                    aria-invalid={!!errors.lastName || undefined}
                    aria-describedby={describedBy("lastName", errors.lastName)}
                  />
                </Field>
              </div>
              <Field
                id="email"
                label="Email Address"
                required
                hint="We’ll send the event link and updates to this email."
                error={errors.email}
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="sarah.jenkins@example.com"
                  required
                  aria-invalid={!!errors.email || undefined}
                  aria-describedby={describedBy("email", errors.email, "hint")}
                />
              </Field>
              <Field id="phone" label="Phone Number" optional>
                <div className="flex gap-2">
                  <Select name="dialCode" aria-label="Country code" defaultValue="+41" className="w-28 shrink-0">
                    {DIAL_CODES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </Select>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel-national" placeholder="79 123 45 67" />
                </div>
              </Field>
            </fieldset>

            <fieldset className="flex flex-col gap-6">
              <legend className="contents">
                <SectionTitle>Student Information</SectionTitle>
              </legend>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="age" label="Child’s Age" optional>
                  <Select id="age" name="age" defaultValue="">
                    <option value="">Select age</option>
                    {AGES.map((a) => (
                      <option key={a}>{a}</option>
                    ))}
                  </Select>
                </Field>
                <Field id="grade" label="Current Grade / Year" optional>
                  <Select id="grade" name="grade" defaultValue="">
                    <option value="">Select grade</option>
                    {GRADES.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </Select>
                </Field>
              </div>
            </fieldset>

            <div className="flex flex-col gap-8 border-t border-ink-800/8 pt-8">
              <Checkbox
                id="consent"
                name="consent"
                required
                error={errors.consent}
                label={
                  <>
                    I agree to the{" "}
                    <a href={routes.terms} className="font-semibold text-ink-800 underline underline-offset-2">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href={routes.privacy} className="font-semibold text-ink-800 underline underline-offset-2">
                      Privacy Policy
                    </a>
                    , and consent to BN Education processing my data to manage this registration.
                    <span aria-hidden className="text-gold-600"> *</span>
                  </>
                }
              />
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button href={routes.events} variant="outline-gold">
                  Cancel
                </Button>
                <Button type="submit" arrow>
                  Continue
                </Button>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
