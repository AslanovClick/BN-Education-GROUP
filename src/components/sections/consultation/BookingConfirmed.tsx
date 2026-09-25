"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CalendarPlus, Check, Copy, DownloadSimple } from "@phosphor-icons/react/ssr";
import { formPanelClass } from "@/components/forms/Field";
import { EASE_OUT } from "@/components/motion/Reveal";
import { Button, buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import { meeting } from "@/content/consultation";
import { routes } from "@/content/site";
import { formatDate, formatTime, offsetLabel, toCalendarStamp } from "@/lib/time";

export type Booking = {
  name: string;
  email: string;
  interest: string;
  start: Date;
  tz: string;
};

const TITLE = "BN Education — Consultation";

export function BookingConfirmed({ booking, onReset }: { booking: Booking; onReset: () => void }) {
  const [copied, setCopied] = useState(false);
  const end = new Date(booking.start.getTime() + meeting.durationMin * 60_000);
  const details = `BN Education consultation.\nTopic: ${booking.interest}\nJoin: ${meeting.link}`;

  const googleUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(TITLE)}` +
    `&dates=${toCalendarStamp(booking.start)}/${toCalendarStamp(end)}` +
    `&details=${encodeURIComponent(details)}` +
    `&location=${encodeURIComponent(meeting.link)}`;

  const downloadIcs = () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//BN Education//Consultation//EN",
      "BEGIN:VEVENT",
      `UID:${toCalendarStamp(booking.start)}@bneducation.ch`,
      `DTSTAMP:${toCalendarStamp(new Date())}`,
      `DTSTART:${toCalendarStamp(booking.start)}`,
      `DTEND:${toCalendarStamp(end)}`,
      `SUMMARY:${TITLE}`,
      `DESCRIPTION:${details.replace(/\n/g, "\\n")}`,
      `LOCATION:${meeting.link}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: "bn-consultation.ics" });
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(meeting.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const rows = [
    { label: "Date", value: formatDate(booking.start, booking.tz) },
    {
      label: "Time",
      value: `${formatTime(booking.start, booking.tz)} – ${formatTime(end, booking.tz)} (${offsetLabel(booking.tz, booking.start)})`,
    },
    { label: "Topic", value: booking.interest },
    { label: "Format", value: `${meeting.format} · ${meeting.durationMin} min` },
  ];

  return (
    <div className={`${formPanelClass} mx-auto max-w-[600px] md:p-8`} role="status">
      {/* Header: icon + thank-you, inside the card */}
      <div className="flex items-center gap-4">
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-800 shadow-[0_10px_28px_-10px_rgb(221_186_109/0.9)]"
        >
          <Icon icon={Check} size={24} />
        </motion.span>
        <div className="min-w-0">
          <h2 className="text-h3 leading-tight text-ink-800">Thank you, {booking.name.split(" ")[0]}</h2>
          <p className="mt-1 text-body-sm text-muted">
            Confirmation sent to <span className="font-semibold text-ink-800">{booking.email}</span>
          </p>
        </div>
      </div>

      <dl className="mt-6 divide-y divide-line border-y border-line">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <dt className="text-caption font-semibold uppercase tracking-[0.1em] text-subtle">{r.label}</dt>
            <dd className="text-sm font-semibold text-ink-800 sm:text-right">{r.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 text-caption font-semibold uppercase tracking-[0.1em] text-subtle">Meeting link</p>
      <div className="mt-2 flex items-center gap-2 rounded-sm bg-sand-50 py-1.5 pl-4 pr-1.5">
        <span className="min-w-0 flex-1 truncate text-sm text-ink-800">{meeting.link}</span>
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-sm px-3 text-sm font-semibold text-gold-700 transition-colors hover:bg-gold-500/15"
        >
          <Icon icon={copied ? Check : Copy} size={16} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses({ variant: "outline-gold", size: "md", className: "w-full" })}
        >
          <Icon icon={CalendarPlus} size={18} />
          Google Calendar
        </a>
        <Button variant="outline-gold" size="md" onClick={downloadIcs} className="w-full">
          <span className="inline-flex items-center gap-2.5">
            <Icon icon={DownloadSimple} size={18} />
            Apple / Outlook (.ics)
          </span>
        </Button>
      </div>

      <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-line pt-4 text-body-sm text-muted sm:flex-row">
        <p>
          Need to change something?{" "}
          <TextLink href={routes.contact} className="align-baseline">
            Contact us
          </TextLink>
        </p>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-semibold text-ink-800/70 underline underline-offset-4 transition-colors hover:text-ink-800"
        >
          Book another time
        </button>
      </div>
    </div>
  );
}
