import { services, subsidiaries } from "../data/content.js";
import { PageHead, CtaBand, LogoGrid, Icon } from "../components/ui.jsx";

export default function Services() {
  return (
    <>
      <PageHead title="Services" bg="cta" />
      <section className="steps">
        <div className="wrap">
          <h2 className="center">{services.title}</h2>
          <span className="rule center" />
          <ol className="step-list">
            {services.steps.map((s) => (
              <li key={s.n}><span className="step-n">{s.n}</span><h5>{s.title}</h5></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="portal">
        <div className="wrap">
          <ul className="features">
            {services.portal.map((f) => (
              <li key={f.title}>
                <span className="feat-icon"><Icon name={f.icon} /></span>
                <h2>{f.title}</h2>
                <p>{f.body}</p>
                <p className="strong">What are the benefits?</p>
                <ul>{f.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="team-band">
        <div className="wrap">
          <h2 className="center">{services.groupTitle}</h2>
          <span className="rule center" />
          <LogoGrid items={subsidiaries} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
