import "./Work.css";
const Work = () => {
  return (
    <section id="work">
      <h5>My Development Approach</h5>
      <h2>How I Work</h2>

      <div className="container work__container">
        <article className="work__item">
          <h3>Technical Ownership</h3>
          <p>
            I take ownership of features from requirement analysis and technical planning through
            implementation, testing, deployment, and production support.
          </p>
        </article>

        <article className="work__item">
          <h3>Scalable Solutions</h3>
          <p>
            I focus on clean architecture, maintainable code, reusable components, and
            performance-oriented solutions that can evolve with business needs.
          </p>
        </article>

        <article className="work__item">
          <h3>Production-First Mindset</h3>
          <p>
            I prioritize stability and reliability by considering edge cases, error handling,
            performance, debugging, monitoring, and release readiness throughout development.
          </p>
        </article>

        <article className="work__item">
          <h3>Mentoring & Collaboration</h3>
          <p>
            I collaborate closely with backend, QA, and UI/UX teams while mentoring junior
            developers through code reviews, technical discussions, debugging, and practical project
            guidance.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Work;
