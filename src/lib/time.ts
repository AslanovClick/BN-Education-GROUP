/** Small timezone helpers built on Intl — no date library needed. */

/** Offset (ms) of `tz` from UTC at the given instant. */
function offsetMs(date: Date, tz: string) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  const asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute, +parts.second);
  return asUtc - date.getTime();
}

/** The instant at which the wall clock in `tz` shows the given date and time. */
export function zonedTime(year: number, month: number, day: number, hhmm: string, tz: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const guess = Date.UTC(year, month, day, h, m);
  return new Date(guess - offsetMs(new Date(guess), tz));
}

export const formatTime = (date: Date, tz: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit" }).format(date);

export const formatDate = (date: Date, tz: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: tz, weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(
    date,
  );

/** e.g. "GMT+2" */
export const offsetLabel = (tz: string, at = new Date()) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: tz, timeZoneName: "shortOffset" })
    .formatToParts(at)
    .find((p) => p.type === "timeZoneName")?.value ?? tz;

export const hourIn = (date: Date, tz: string) =>
  Number(new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", hourCycle: "h23" }).format(date));

/** 20261017T081500Z — for calendar links / .ics */
export const toCalendarStamp = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export const dateKey = (y: number, m: number, d: number) =>
  `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
