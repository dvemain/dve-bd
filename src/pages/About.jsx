import { about } from "../data/content.js";
import { img, Btn, PageHead, CtaBand } from "../components/ui.jsx";

export default function About() {
  return (
    <>
      <PageHead title="About Us" />
      <section className="story">
        <div className="wrap two-col">
          <figure className="photo"><img src={img("story")} alt="Residential development project" loading="lazy" /></figure>
          <div>
            <h2>{about.storyTitle}</h2>
            <span className="rule" />
            {about.story.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="project-band">
        <div className="wrap narrow">
          <h2>{about.projectTitle}</h2>
          <span className="rule" />
          {about.project.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          <p><a href="https://dveministries.com/" target="_blank" rel="noopener">DVEMinistries.com</a></p>
          <Btn to="/contact-us" kind="accent">{about.projectCta}</Btn>
        </div>
      </section>

      <section className="team">
        <div className="wrap">
          <h2 className="center">{about.teamTitle}</h2>
          <span className="rule center" />
          <p className="center sub">{about.teamSub}</p>
          <ul className="people">
            {about.team.map((p) => (
              <li key={p.name}>
                <img src={img(p.img)} alt={p.name} loading="lazy" />
                <h4>{p.name}</h4>
                <p>{p.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
