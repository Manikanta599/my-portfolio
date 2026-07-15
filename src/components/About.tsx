import { useInView } from 'react-intersection-observer';
import { FiCode, FiServer, FiDatabase, FiCpu } from 'react-icons/fi';
import './About.css';

const highlights = [
  { icon: <FiServer />, label: 'Backend Systems', value: '2+ Years' },
  { icon: <FiDatabase />, label: 'Database Design', value: 'MySQL & Redis' },
  { icon: <FiCode />, label: 'Microservices', value: 'NestJS & Node' },
  { icon: <FiCpu />, label: 'AI Integration', value: 'Gemini & LLMs' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`container ${inView ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about__grid">
          <div className={`about__text ${inView ? 'reveal visible' : 'reveal'}`}>
            <p>
              I'm a <strong>Software Engineer</strong> with 2+ years of experience designing and
              developing scalable backend systems, distributed applications, and microservices at{' '}
              <span className="about__highlight">Schemax Export Techno Craft Pvt. Ltd</span>.
            </p>
            <p>
              I specialize in building high-throughput <strong>REST APIs</strong>, event-driven workflows,
              asynchronous job processing, and concurrency-safe operations. My work directly impacts
              real-world <strong>manufacturing operations</strong> — from raw material receipt to finished goods dispatch.
            </p>
            <p>
              I'm passionate about <strong>performance optimization</strong>, caching strategies, database design,
              and have recently been integrating <strong>AI-assisted workflows</strong> using LLM APIs and tool-calling
              orchestration into production systems.
            </p>

            <div className="about__education">
              <h3 className="about__edu-title">🎓 Education</h3>
              <p className="about__edu-detail">
                <strong>B.Tech — Computer Science & Engineering</strong>
              </p>
              <p className="about__edu-school">
                Swarnandhra Institute of Engineering and Technology
              </p>
              <p className="about__edu-meta">
                2019 – 2023 · CGPA: 7.2 · Narsapur, Andhra Pradesh
              </p>
            </div>
          </div>

          <div className={`about__highlights ${inView ? 'reveal visible' : 'reveal'}`}>
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="about__highlight-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <p className="about__highlight-value">{item.value}</p>
                  <p className="about__highlight-label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
