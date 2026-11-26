import React from "react";
import { Link } from "react-router-dom";
import { Code2, Network, Terminal, ScanLine, ArrowUpRight } from "lucide-react";
import { bentoSkillDomains } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";
const DOMAINS = [
  {
    id: "frontend-web-architecture",
    Icon: Code2,
    projectId: "hekayah",
    evidence: "Hekayah / NASJ / MoodFood",
  },
  {
    id: "infrastructure-networking",
    Icon: Network,
    projectId: "headless-linux-wheelchair",
    evidence: "Headless Linux & ROS 2 server",
  },
  {
    id: "scripting-automation",
    Icon: Terminal,
    projectId: "headless-linux-wheelchair",
    evidence: "Linux services / System automation",
  },
  {
    id: "quality-operations",
    Icon: ScanLine,
    projectId: "hekayah",
    evidence: "Hekayah / DEPI testing training",
  },
];
export default function Skills() {
  return (
    <section id="expertise" className="capabilities-section section-shell">
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / Capabilities</span>
            <h2>
              A wider view
              <br />
              of the <em>stack.</em>
            </h2>
          </div>
          <p>
            My work connects product interfaces with the infrastructure and
            testing that support them.
          </p>
        </div>
      </Reveal>
      <div className="capability-grid">
        {DOMAINS.map(({ id, Icon, evidence, projectId }, index) => {
          const domain = bentoSkillDomains.find((item) => item.id === id);
          return (
            <Reveal key={id}>
              <article className="capability-card">
                <div className="capability-top">
                  <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <div className="capability-tools">
                  {domain.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <Link
                  to={`?project=${projectId}#expertise`}
                  preventScrollReset
                  className="capability-evidence"
                >
                  <span>{evidence}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
