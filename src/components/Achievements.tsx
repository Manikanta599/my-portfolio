import { useInView } from 'react-intersection-observer';
import { FiAward, FiStar, FiZap, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import './Achievements.css';

const achievements = [
  {
    icon: <FiTrendingUp />,
    title: '40% API Performance Boost',
    description:
      'Reduced API response times by 40% through strategic SQL query optimization, composite indexing, and pagination across core MES modules.',
  },
  {
    icon: <FiZap />,
    title: 'HelpX Bot Deployment',
    description:
      'Recognized for successful deployment of HelpX Bot across all AMS applications, significantly improving internal support efficiency.',
  },
  {
    icon: <FiCheckCircle />,
    title: 'Master-Slave Replication',
    description:
      'Appreciated for presenting and demonstrating an optimized master-slave database replication solution for improving system read scalability.',
  },
  {
    icon: <FiAward />,
    title: 'Production Stability',
    description:
      'Played a key role in stabilizing core MES production modules by diagnosing and resolving critical production issues.',
  },
  {
    icon: <FiStar />,
    title: '5-Star HackerRank Rating',
    description:
      'Achieved a 5-star rating on HackerRank with strong performance in JavaScript problem-solving.',
  },
];

const certifications = [
  'ReactJS – Udemy',
  'Java Full Stack Development – J Spiders, JNTU Hyderabad',
  'HackerRank JavaScript (Basic) Certification',
];

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="achievements" id="achievements" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Recognition & Growth</span>
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <div
              key={i}
              className={`achievements__card ${inView ? 'reveal visible' : 'reveal'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="achievements__icon">{item.icon}</div>
              <h3 className="achievements__title">{item.title}</h3>
              <p className="achievements__desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`achievements__certs ${inView ? 'reveal visible' : 'reveal'}`}>
          <h3 className="achievements__certs-title">
            <FiAward /> Certifications
          </h3>
          <div className="achievements__certs-list">
            {certifications.map((cert) => (
              <div key={cert} className="achievements__cert-item">
                <FiCheckCircle className="achievements__cert-check" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
