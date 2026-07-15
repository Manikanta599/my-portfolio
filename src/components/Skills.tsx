import { FaJava, FaPython } from "react-icons/fa";
import { FiCloud, FiDatabase, FiLayers, FiServer, FiTool } from 'react-icons/fi';
import {
  SiAntdesign,
  SiDocker, SiGit, SiGithub,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiTypescript
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FiLayers />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: 'Backend',
    icon: <FiServer />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'NestJS', icon: <SiNestjs /> },
      { name: 'REST APIs', icon: <FiServer /> },
      { name: 'Microservices', icon: <FiLayers /> },
      { name: 'WebSockets', icon: <SiSocketdotio /> },
      { name: 'Bull Queues', icon: <FiServer /> },
      { name: 'TypeORM', icon: <FiDatabase /> },
    ],
  },
  {
    title: 'Databases',
    icon: <FiDatabase />,
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Query Optimization', icon: <FiDatabase /> },
      { name: 'Schema Design', icon: <FiDatabase /> },
    ],
  },
  {
    title: 'Frontend',
    icon: <SiReact />,
    skills: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Ant Design', icon: <SiAntdesign /> },
      { name: 'HTML5 / CSS3', icon: <SiReact /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <FiCloud />,
    skills: [
      { name: 'AWS (EC2, S3, RDS)', icon: <FiCloud /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'CI/CD Pipelines', icon: <FiCloud /> },
      { name: 'Nx Monorepo', icon: <FiLayers /> },
    ],
  },
  {
    title: 'Tools',
    icon: <FiTool />,
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build robust, scalable systems
          </p>
        </div>

        <div className={`skills__grid ${inView ? 'visible' : ''}`}>
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`skills__category ${inView ? 'reveal visible' : 'reveal'}`}
              style={{ transitionDelay: `${catIdx * 0.1}s` }}
            >
              <div className="skills__category-header">
                <span className="skills__category-icon">{category.icon}</span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>
              <div className="skills__tags">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skills__tag">
                    <span className="skills__tag-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Concepts Row */}
        <div className={`skills__concepts ${inView ? 'reveal visible' : 'reveal'}`}>
          <h3 className="skills__concepts-title">Core Concepts</h3>
          <div className="skills__concepts-list">
            {[
              'Data Structures & Algorithms',
              'Distributed Locking',
              'System Design',
              'RBAC',
              'Authentication & Authorization',
              'Scalability',
              'Redis Pub/Sub',
              'Event-Driven Architecture',
              'Caching Strategies',
              'Master-Slave Replication',
            ].map((concept) => (
              <span key={concept} className="skills__concept-chip">
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
