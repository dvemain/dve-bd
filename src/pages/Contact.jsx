import { useState } from "react";
import { org, contact } from "../data/content.js";
import { PageHead } from "../components/ui.jsx";

const encode = (d) => Object.keys(d).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(d[k])).join("&");
const blank = { first: "", last: "", email: "", phone: "", service: contact.services[0], message: "" };

export default function Contact() {
  const [v, setV] = useState(blank);
  const [status, setStatus] = useState("idle");
  const on = (e) => setV((s) => ({ ...s, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault(); setStatus("sending");
    try {
      const r = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: encode({ "form-name": "contact", ...v }) });
      if (!r.ok) throw new Error(r.status);
      setStatus("sent"); setV(blank);
    } catch { setStatus("error"); }
  };

  return (
    <>
      <PageHead title="Contact Us" bg="cta" />
      <section className="contact">
        <div className="wrap">
          <h2 className="center">{contact.title}</h2>
          <span className="rule center" />
          <div className="contact-grid">
            <div>
              <h3>{contact.formTitle}</h3>
              {status === "sent" ? (
                <div className="cf cf-done" role="status"><strong>Thank you.</strong><p>We got your message and will be in touch soon.</p></div>
              ) : (
                <form className="cf" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="cf-hp" aria-hidden="true"><label>Leave blank: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
                  <div className="cf-row">
                    <label htmlFor="c-first">First name *<input id="c-first" name="first" required value={v.first} onChange={on} autoComplete="given-name" /></label>
                    <label htmlFor="c-last">Last name *<input id="c-last" name="last" required value={v.last} onChange={on} autoComplete="family-name" /></label>
                  </div>
                  <div className="cf-row">
                    <label htmlFor="c-email">Email *<input id="c-email" name="email" type="email" required value={v.email} onChange={on} autoComplete="email" /></label>
                    <label htmlFor="c-phone">Phone (SMS) *<input id="c-phone" name="phone" type="tel" required value={v.phone} onChange={on} autoComplete="tel" /></label>
                  </div>
                  <label htmlFor="c-service">Services *
                    <select id="c-service" name="service" value={v.service} onChange={on}>{contact.services.map((s) => <option key={s}>{s}</option>)}</select>
                  </label>
                  <label htmlFor="c-message">Tell us more about your project. *<textarea id="c-message" name="message" rows={6} required value={v.message} onChange={on} /></label>
                  {status === "error" && <p className="cf-err" role="alert">Something went wrong. Please try again or call <a href={org.phoneHref}>{org.phone}</a>.</p>}
                  <button type="submit" className="btn btn-accent" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit"}</button>
                </form>
              )}
            </div>
            <aside>
              <h3>{contact.infoTitle}</h3>
              <dl className="info">
                <dt>Our Phone</dt><dd><a href={org.phoneHref}>{org.phone}</a></dd>
                <dt>Our Email</dt><dd><a href={`mailto:${org.email}`}>{org.email}</a></dd>
                <dt>Our Location</dt><dd><a href={org.mapsHref} target="_blank" rel="noopener">{org.address}</a></dd>
                <dt>Working Hours</dt><dd>{org.hours[0]}<br />{org.hours[1]}</dd>
              </dl>
              <iframe className="map" title="Map to DVE Building and Development" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=6546+M-37+STE+102,+Kingsley,+MI+49649&output=embed" />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
