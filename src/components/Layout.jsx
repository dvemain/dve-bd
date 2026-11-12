import { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { org, nav, footer } from "../data/content.js";
import { img, Btn } from "./ui.jsx";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0 }); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <div className="topbar"><div className="wrap"><a href={org.bannerHref} target="_blank" rel="noopener">{org.banner}</a></div></div>
      <header className="site">
        <div className="wrap">
          <button type="button" className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
          <Link to="/" className="brand" aria-label={`${org.name} home`}>
            <img src={img("logo")} alt={org.name} width="160" height="53" />
          </Link>
          <nav className="primary" aria-label="Primary">
            {nav.map((n) => <NavLink key={n.to} to={n.to} end={n.to === "/"}>{n.label}</NavLink>)}
          </nav>
          <Btn to="/contact-us" kind="accent" className="btn btn-accent hdr-cta">Book a call</Btn>
        </div>
        {open && <div className="menu-backdrop" onClick={() => setOpen(false)} />}
        <nav className={"menu-panel" + (open ? " is-open" : "")} aria-label="Mobile" aria-hidden={!open}>
          {nav.map((n) => <NavLink key={n.to} to={n.to} end={n.to === "/"}>{n.label}</NavLink>)}
          <Link to="/contact-us" className="btn btn-accent">Book a call</Link>
        </nav>
      </header>

      <main id="main"><Outlet /></main>

      <footer className="site-foot">
        <div className="wrap foot-grid">
          <div>
            <img src={img("logofull")} alt={org.name} width="180" height="60" className="foot-logo" />
            <p className="strong">{footer.title}</p>
            <p>Co-founders of <a href={org.parents[0].href} target="_blank" rel="noopener">{org.parents[0].label}</a> and <a href={org.parents[1].href} target="_blank" rel="noopener">{org.parents[1].label}</a>. We’ve been involved in every project shown within our website.</p>
            <p className="motto">{footer.motto}</p>
            <Link to="/contact-us" className="btn btn-accent">{footer.cta}</Link>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>{nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Location</h4>
            <ul>
              <li><a href={org.mapsHref} target="_blank" rel="noopener">{org.address}</a></li>
              <li><a href={org.phoneHref}>{org.phone}</a></li>
              <li><a href={`mailto:${org.email}`}>{org.email}</a></li>
              <li>{org.hours[0]}<br />{org.hours[1]}</li>
            </ul>
          </div>
        </div>
        <div className="foot-base"><div className="wrap">© {new Date().getFullYear()} All rights reserved · Made with ❤ by DVE Media</div></div>
      </footer>
    </>
  );
}
