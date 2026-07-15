import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    role: 'Software Development Engineer I',
    company: 'Schemax Export Techno Craft Pvt. Ltd',
    location: 'Visakhapatnam, India',
    period: 'May 2024 – Present',
    current: true,
    points: [
      'Design and develop enterprise-grade MES and WMS platforms for apparel manufacturing, owning backend features end-to-end from requirement analysis and system design through implementation, testing, and production deployment.',
      'Build and maintain scalable, distributed backend services using NestJS, TypeScript, MySQL, and Redis, collaborating closely with QA, DevOps, and business teams to ship reliable features on production timelines.',
      'Drive performance optimization and system reliability initiatives across core modules, achieving measurable gains in API response times and reducing manual operational overhead.',
      'Integrate AI-assisted workflows into existing modules to automate investigation and decision-making tasks using LLM APIs and tool-calling orchestration.',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Where I've Worked</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`experience__card ${inView ? 'reveal visible' : 'reveal'}`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="experience__dot">
                <span className={`experience__dot-inner ${exp.current ? 'experience__dot-inner--active' : ''}`} />
              </div>

              <div className="experience__content">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">
                      <FiBriefcase className="experience__icon" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__period">
                      <FiCalendar className="experience__icon" />
                      {exp.period}
                    </span>
                    <span className="experience__location">
                      <FiMapPin className="experience__icon" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="experience__points">
                  {exp.points.map((point, j) => (
                    <li key={j} className="experience__point">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
