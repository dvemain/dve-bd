import { Link } from "react-router-dom";

export const img = (k) => `/img/${k}.${k === "logo" ? "png" : "jpg"}`;

export function Btn({ to, href, kind = "primary", children, ...rest }) {
  const cls = `btn btn-${kind}`;
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener" {...rest}>{children}</a>;
  return <Link to={to} className={cls} {...rest}>{children}</Link>;
}

export function PageHead({ title, bg = "hero" }) {
  return (
    <section className="page-head">
      <img className="page-head-bg" src={img(bg)} alt="" />
      <div className="wrap"><h1>{title}</h1></div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <img className="cta-bg" src={img("cta")} alt="" loading="lazy" />
      <div className="wrap">
        <span className="rule" />
        <h2>Looking to get something built?</h2>
        <Btn to="/contact-us" kind="accent">Contact Us</Btn>
      </div>
    </section>
  );
}

export function LogoGrid({ items }) {
  return (
    <ul className="logo-grid">
      {items.map((s) => (
        <li key={s.img}><img src={img(s.img)} alt={s.name} loading="lazy" /><span>{s.name}</span></li>
      ))}
    </ul>
  );
}

const ICONS = {
  portal: <path d="M3 5h18v12H3zM8 21h8M12 17v4M7 9h6M7 12h10" />,
  files: <path d="M4 4h7l2 2h7v14H4zM8 13h8M8 16h5" />,
  chat: <path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" />,
  team: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 20a6 6 0 0 1 12 0M15 20a5 5 0 0 1 6-4.6" />,
};
export function Icon({ name }) {
  return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[name]}</svg>;
}
