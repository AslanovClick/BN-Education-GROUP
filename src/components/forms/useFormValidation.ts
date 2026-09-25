"use client";

import { useState, type FormEvent } from "react";

type Errors = Record<string, string | undefined>;

const messageFor = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
  const v = el.validity;
  if (v.valueMissing) return el.type === "checkbox" ? "Please confirm to continue." : "This field is required.";
  if (v.typeMismatch && el.type === "email") return "Please enter a valid email address.";
  if (v.patternMismatch || v.typeMismatch) return "Please check this value.";
  return el.validationMessage || undefined;
};

/**
 * Native constraint validation with friendly inline messages.
 * Errors show after the first submit attempt, then update live as the user fixes fields.
 */
export function useFormValidation(onValid: (data: FormData) => void) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const collect = (form: HTMLFormElement) => {
    const next: Errors = {};
    for (const el of Array.from(form.elements)) {
      if (!(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) continue;
      if (!el.name || el.validity.valid) continue;
      next[el.name] = messageFor(el);
    }
    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const next = collect(form);
    setErrors(next);
    setSubmitted(true);
    const first = Object.keys(next)[0];
    if (first) {
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    onValid(new FormData(form));
  };

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    if (submitted) setErrors(collect(e.currentTarget));
  };

  return { errors, formProps: { noValidate: true, onSubmit: handleSubmit, onChange: handleChange } };
}
