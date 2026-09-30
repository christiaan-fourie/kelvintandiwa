"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Message from ${name} via kelvintadiwa.com`);
    const body = encodeURIComponent(`${message}\n\n- ${name} (${email})`);
    window.location.href = `mailto:author@kelvintadiwa.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="reveal" onSubmit={submit}>
      <div><label htmlFor="name">Name</label><input id="name" name="name" type="text" autoComplete="name" required /></div>
      <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div><label htmlFor="message">Message</label><textarea id="message" name="message" required /></div>
      <button className="btn btn-red form-submit" type="submit">Submit</button>
      <p className="form-note">Opens your email app, addressed to author@kelvintadiwa.com.</p>
    </form>
  );
}
