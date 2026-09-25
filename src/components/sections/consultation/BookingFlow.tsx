"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarBlank, Clock, ShieldCheck } from "@phosphor-icons/react/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { describedBy, Field, formPanelClass, Input, Select } from "@/components/forms/Field";
import { useFormValidation } from "@/components/forms/useFormValidation";
import { EASE_OUT } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { interests, meeting } from "@/content/consultation";
import { cn } from "@/lib/cn";
import { formatDate, formatTime, offsetLabel } from "@/lib/time";
import { BookingConfirmed, type Booking } from "./BookingConfirmed";
import { SlotPicker, type Slot } from "./SlotPicker";

function PanelTitle({ step, children }: { step: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-b border-line pb-4">
      <span className="inline-flex size-7 items-center justify-center rounded-full border border-gold-500 text-caption font-bold text-gold-600">
        {step}
      </span>
      <h2 className="text-lg font-bold text-ink-800">{children}</h2>
    </div>
  );
}

export function BookingFlow() {
  const [slot, setSlot] = useState<Slot | null>(null);
  const [tz, setTz] = useState<string | null>(null);
  const [slotError, setSlotError] = useState<string>();
  const [booking, setBooking] = useState<Booking | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const detectedTz = useSyncExternalStore(
    () => () => {},
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    () => null,
  );
  const zone = tz ?? detectedTz ?? meeting.officeTz;

  const { errors, formProps } = useFormValidation((data) => {
    if (!slot) {
      setSlotError("Please choose a date and time for your consultation.");
      pickerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    // No backend yet — show the confirmation state.
    setBooking({
      name: String(data.get("name")),
      email: String(data.get("email")),
      interest: String(data.get("interest")),
      start: slot.date,
      tz: zone,
    });
  });

  useEffect(() => {
    if (booking) rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [booking]);

  return (
    <div ref={rootRef}>
      <AnimatePresence mode="wait" initial={false}>
        {booking ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <BookingConfirmed
              booking={booking}
              onReset={() => {
                setBooking(null);
                setSlot(null);
              }}
            />
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            aria-label="Book a consultation"
            className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8"
            {...formProps}
          >
            {/* Left: details + confidentiality */}
            <div className="flex flex-col gap-6">
              <div className={formPanelClass}>
                <PanelTitle step="1">Your details</PanelTitle>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full Name" required error={errors.name}>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="e.g. Sarah Jenkins"
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
                      placeholder="sarah@example.com"
                      required
                      aria-invalid={!!errors.email || undefined}
                      aria-describedby={describedBy("email", errors.email)}
                    />
                  </Field>
                  <Field id="interest" label="Primary Interest" required error={errors.interest} className="sm:col-span-2">
                    <Select
                      id="interest"
                      name="interest"
                      defaultValue=""
                      required
                      aria-invalid={!!errors.interest || undefined}
                      aria-describedby={describedBy("interest", errors.interest)}
                    >
                      <option value="" disabled>
                        What would you like to discuss?
                      </option>
                      {interests.map((i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </Select>
                  </Field>
                </div>
              </div>

              <aside className="relative flex gap-4 overflow-hidden rounded-md bg-white p-6">
                <span aria-hidden className="absolute inset-y-0 left-0 w-0.5 bg-gold-500" />
                <Icon icon={ShieldCheck} size={28} className="shrink-0 text-gold-500" />
                <div>
                  <p className="text-base font-bold text-ink-800">Confidentiality assured</p>
                  <p className="mt-1 text-body-sm text-muted">
                    Every consultation is strictly confidential. Your family’s information is never shared.
                  </p>
                </div>
              </aside>
            </div>

            {/* Right: date & time + summary */}
            <div className={formPanelClass}>
              <PanelTitle step="2">Choose a date &amp; time</PanelTitle>
              <div ref={pickerRef} className="mt-6 scroll-mt-32">
                <SlotPicker
                  value={slot}
                  onChange={(s) => {
                    setSlot(s);
                    if (s) setSlotError(undefined);
                  }}
                  tz={tz}
                  onTzChange={setTz}
                  error={slotError}
                />
              </div>

              <Summary slot={slot} zone={zone} />
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Summary({ slot, zone }: { slot: Slot | null; zone: string }) {
  const rows: { icon: PhosphorIcon; label: string; value: string }[] = [
    { icon: CalendarBlank, label: "Date", value: slot ? formatDate(slot.date, zone) : "Not selected yet" },
    {
      icon: Clock,
      label: "Time",
      value: slot ? `${formatTime(slot.date, zone)} (${offsetLabel(zone, slot.date)}) · ${meeting.durationMin} min` : "—",
    },
  ];

  return (
    <div className="mt-6 border-t border-line pt-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <dl className="flex flex-col gap-3 sm:flex-row sm:gap-8">
          {rows.map((r) => (
            <div key={r.label} className="flex items-start gap-2.5">
              <Icon icon={r.icon} size={18} className="mt-0.5 shrink-0 text-gold-600" />
              <div>
                <dt className="text-caption font-semibold uppercase tracking-[0.1em] text-subtle">{r.label}</dt>
                <dd className={cn("text-sm font-medium", slot ? "text-ink-800" : "text-ink-800/40")}>{r.value}</dd>
              </div>
            </div>
          ))}
        </dl>
        <Button type="submit" arrow className="w-full shrink-0 sm:w-auto">
          Confirm Booking
        </Button>
      </div>
      <p className="mt-3 text-caption text-subtle">You’ll receive a calendar invitation and meeting link by email.</p>
    </div>
  );
}
