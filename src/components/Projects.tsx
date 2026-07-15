import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiLayers } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'Manufacturing Execution System (MES) & Warehouse Management System (WMS)',
    category: 'Enterprise',
    tech: ['NestJS', 'TypeScript', 'MySQL', 'TypeORM', 'Redis', 'Bull Queues', 'Socket.io', 'React.js', 'Ant Design'],
    points: [
      'Engineered a large-scale MES and WMS platform for the apparel manufacturing industry, covering the full production lifecycle from raw material receipt to finished goods dispatch.',
      'Achieved 40% reduction in API response times by rewriting ORM queries as optimized raw SQL, adding composite indexes, eliminating N+1 query patterns, and implementing cursor-based pagination.',
      'Implemented real-time event-driven status updates across distributed NestJS microservices using Socket.io WebSockets and Redis Pub/Sub for cross-service event broadcasting.',
      'Designed concurrency-safe LOT-wise inventory allocation (freeze) logic using MySQL transactions with SELECT FOR UPDATE and Redis distributed locks.',
      'Architected warehouse management with hierarchical location mapping (Store → Floor → Rack → Row → Column), QR-code-based location scanning, and real-time inventory visibility.',
      'Built configurable quality inspection modules for Yarn, Fabric, and Finished Goods supporting AQL, IIF, Prefinal, and Final Audit workflows.',
    ],
    highlight: '40% API performance improvement',
  },
  {
    title: 'Support Automation & Ticketing System – HelpX Bot',
    category: 'Automation',
    tech: ['NestJS', 'React.js', 'MySQL', 'NodeMailer', 'Cron Jobs'],
    points: [
      'Built HelpX Bot, a browser-based screenshot capture and annotation tool integrated with Pro-Ticketor for automated support ticket creation, deployed across all AMS applications.',
      'Implemented real-time chat, browser notifications, and analytical dashboards with Excel export; automated periodic reporting via NodeMailer and scheduled Cron Jobs.',
    ],
    highlight: 'Deployed across all AMS apps',
  },
  {
    title: 'Identity and Access Management (IAM) Platform',
    category: 'Security',
    tech: ['Nx Monorepo', 'NestJS', 'React.js', 'TypeScript', 'MySQL'],
    points: [
      'Architected a full-stack IAM platform using Nx monorepo with a React.js frontend and NestJS microservice backend, sharing common libraries and type models across packages.',
      'Implemented secure JWT-based authentication with access/refresh tokens, OTP login, session revocation, forgot/reset password, workstation login, and user heartbeat monitoring.',
      'Designed a granular RBAC system covering role management, permission management, role-permission mapping, and user-role mapping with per-user permission retrieval.',
      'Developed multi-tenant client/organization management with client-to-application mapping and unit-level hierarchy for enterprise-grade multi-org access control.',
    ],
    highlight: 'Enterprise-grade multi-tenant RBAC',
  },
  {
    title: 'AI Inventory Investigation Agent',
    category: 'AI / LLM',
    tech: ['NestJS', 'TypeScript', 'Redis', 'MySQL', 'Google Gemini API', 'Microservices'],
    points: [
      'Designed and developed an AI Inventory Investigation Agent using NestJS, TypeScript, Redis, MySQL, and Microservices Architecture.',
      'Implemented LLM workflow orchestration and tool-calling using Google Gemini APIs to automatically collect and analyze data from Inventory, Allocation, Receiving, Production, and Material Movement services.',
      'Built AI-driven root cause analysis for stock shortages, allocation delays, inventory discrepancies, and operational bottlenecks, significantly reducing manual investigation time.',
      'Integrated Redis-based caching, conversation context management, retry mechanisms, and rate limiting to improve AI response reliability and API efficiency.',
    ],
    highlight: 'AI-driven root cause analysis',
  },
];

export default function Projects() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Enterprise-grade systems I've designed and developed
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`projects__card ${inView ? 'reveal visible' : 'reveal'} ${expandedIdx === i ? 'projects__card--expanded' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="projects__card-top">
                <div className="projects__card-header">
                  <FiLayers className="projects__folder-icon" />
                  <span className="projects__category">{project.category}</span>
                </div>
                <h3 className="projects__title">{project.title}</h3>

                {project.highlight && (
                  <div className="projects__highlight">
                    <span className="projects__highlight-badge">⚡ {project.highlight}</span>
                  </div>
                )}

                <ul className="projects__points">
                  {(expandedIdx === i ? project.points : project.points.slice(0, 2)).map((point, j) => (
                    <li key={j} className="projects__point">{point}</li>
                  ))}
                </ul>

                {project.points.length > 2 && (
                  <button
                    className="projects__expand-btn"
                    onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                  >
                    {expandedIdx === i ? 'Show Less' : `Show ${project.points.length - 2} More`}
                    <FiExternalLink />
                  </button>
                )}
              </div>

              <div className="projects__tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="projects__tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
