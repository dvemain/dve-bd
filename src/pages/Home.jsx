import { org, home, subsidiaries } from "../data/content.js";
import { img, Btn, CtaBand, LogoGrid } from "../components/ui.jsx";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-bg" src={img("hero")} alt="" fetchPriority="high" />
        <div className="wrap hero-inner">
          <h1>{home.heroTitle}</h1>
          <p className="lede">{home.heroSub}</p>
          <div className="ctas">
            <Btn to="/contact-us" kind="accent">Book Now</Btn>
            <Btn to="/contact-us" kind="ghost">Get In Touch</Btn>
          </div>
        </div>
      </section>

      <section className="welcome">
        <div className="wrap two-col">
          <figure className="photo"><img src={img("welcome")} alt="Two-story custom home under development" loading="lazy" /></figure>
          <div>
            <p className="eyebrow">{home.welcomeEyebrow}</p>
            <h2>{home.welcomeTitle}</h2>
            <span className="rule" />
            <p>{home.welcome1}</p>
            <p>{home.welcome2}</p>
            <div className="call">
              <span className="call-label">{home.callLabel}</span>
              <a href={org.phoneHref} className="call-num">{org.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="spec">
        <div className="wrap two-col reverse">
          <figure className="photo"><img src={img("spec")} alt="Front elevation rendering of a modern home" loading="lazy" /></figure>
          <div>
            <h2>{home.specTitle}</h2>
            <span className="rule" />
            <p className="big">{home.specBody}</p>
            <Btn to="/services">Our Services</Btn>
          </div>
        </div>
      </section>

      <section className="team-band">
        <div className="wrap">
          <h2 className="center">{home.teamTitle}</h2>
          <span className="rule center" />
          <LogoGrid items={subsidiaries} />
        </div>
      </section>

      <section className="testimonials">
        <div className="wrap">
          <h2 className="center">{home.testimonialsTitle}</h2>
          <p className="center sub">{home.testimonialsSub}</p>
          <ul className="quotes">
            {home.testimonials.map((t) => (
              <li key={t.name}>
                <blockquote><p>“{t.quote}”</p></blockquote>
                <footer><strong>{t.name}</strong><span>{t.org}</span></footer>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
