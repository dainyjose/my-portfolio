import "./Work.css";
const Work = () => {
  return (
    <section id="work">
      <h5>My Development Approach</h5>
      <h2>How I Work</h2>

      <div className="container work__container">
        <article className="work__item">
          <h3>Clear Communication</h3>
          <p>
            I believe in transparent communication, regular updates, and
            collaborative development throughout the project lifecycle.
          </p>
        </article>

        <article className="work__item">
          <h3>Scalable Solutions</h3>
          <p>
            I focus on building maintainable and scalable applications with
            clean architecture and performance-oriented development practices.
          </p>
        </article>

        <article className="work__item">
          <h3>Production-Focused Development</h3>
          <p>
            From debugging and optimization to deployment and monitoring, I
            prioritize stable and reliable production-ready applications.
          </p>
        </article>

        <article className="work__item">
          <h3>Continuous Learning</h3>
          <p>
            I continuously explore modern tools, workflows, and best practices
            to improve development efficiency and application quality.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Work;
