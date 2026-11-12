import { partners, subsidiaries } from "../data/content.js";
import { PageHead, CtaBand, LogoGrid } from "../components/ui.jsx";

export default function Partners() {
  return (
    <>
      <PageHead title="Our Partners" />
      <section className="partners">
        <div className="wrap">
          <h2 className="center">{partners.title}</h2>
          <span className="rule center" />
          <p className="center sub narrow">{partners.intro}</p>
          <ul className="family">
            {partners.family.map((f) => (
              <li key={f.label}>
                <h3><a href={f.href} target="_blank" rel="noopener">{f.label}</a></h3>
                <p>{f.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="team-band">
        <div className="wrap">
          <h2 className="center">The Qualified Group</h2>
          <span className="rule center" />
          <LogoGrid items={subsidiaries} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
