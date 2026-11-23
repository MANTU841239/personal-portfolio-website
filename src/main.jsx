import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, Check,
  ChevronUp, Code2, Database, Github, Linkedin, Mail, Menu, Moon,
  Send, Sun, X, FileDown, Copy, ExternalLink, Sparkles, Terminal,
  Workflow, Layers3
} from "lucide-react";
import "./styles.css";

// Personalise this object first. Replace every example URL and placeholder.
const PROFILE = {
  name: "Mantu Kumar",
  role: "Aspiring Data Analyst & Data Scientist",
  location: "India",
  email: "mantukushwaha0809@gmail.com",
  github: "https://github.com/MANTU841239",
  linkedin: "https://www.linkedin.com/in/mantu841239/",
  resume: "/resume.pdf",
  availability: "Open to internships & entry-level opportunities",
  intro: "I turn raw data into clear insights and useful decisions.",
  about: "I’m a Computer Science student building practical skills in data analytics, programming, and problem-solving. I enjoy exploring datasets, asking better questions, and communicating findings in a simple, useful way.",
  currently: "Strengthening SQL and Python while building portfolio-ready analytics projects.",
};

const skills = [
  { name: "SQL", level: "Core skill", icon: Database, tags: ["Joins", "CTEs", "Window functions", "Data cleaning"] },
  { name: "Python", level: "Core skill", icon: Code2, tags: ["Pandas", "NumPy", "Matplotlib", "Problem solving"] },
  { name: "Data Analytics", level: "Learning & building", icon: BarChart3, tags: ["Exploratory analysis", "Dashboards", "Storytelling"] },
  { name: "Machine Learning", level: "Growing skill", icon: BrainCircuit, tags: ["Foundations", "Model evaluation", " scikit-learn"] },
  { name: "Tools & Workflow", level: "Working knowledge", icon: Workflow, tags: ["Git & GitHub", "Jupyter", "Excel", "Power BI"] },
  { name: "Web Fundamentals", level: "Additional skill", icon: Layers3, tags: ["HTML", "CSS", "JavaScript", "React basics"] },
];

const projects = [
  {
    title: "Sales Performance Analysis",
    category: "Data Analytics",
    description: "An end-to-end analysis of sales data to uncover revenue trends, product performance, and actionable business opportunities.",
    stack: ["Python", "Pandas", "SQL", "Power BI"],
    outcome: "Add your key finding here — for example, the strongest sales segment or a measurable business insight.",
    link: "https://github.com/MANTU841239",
    number: "01",
    visual: "chart"
  },
  {
    title: "SQL Business Case Studies",
    category: "SQL",
    description: "A collection of practical SQL questions covering joins, aggregations, subqueries, CTEs, and window functions.",
    stack: ["SQL", "MySQL", "Data analysis"],
    outcome: "Showcase the business questions answered and the SQL techniques used.",
    link: "https://github.com/MANTU841239",
    number: "02",
    visual: "database"
  },
  {
    title: "Python Data Exploration",
    category: "Python",
    description: "A reproducible notebook workflow for cleaning, exploring, and visualising a real-world dataset.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib"],
    outcome: "Add a concise result, insight, or metric from your analysis.",
    link: "https://github.com/MANTU841239",
    number: "03",
    visual: "code"
  },
];

const filters = ["All", "Data Analytics", "SQL", "Python"];
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter),
    [activeFilter]
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const submitContact = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={dark ? "app dark" : "app light"}>
      <div className="scroll-progress" style={{ transform: `scaleX(${Math.min(1, (typeof window !== "undefined" ? window.scrollY : 0) / Math.max(1, (typeof document !== "undefined" ? document.documentElement.scrollHeight - window.innerHeight : 1)))})` }} />
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">Y.</span><span>{PROFILE.name}</span></a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {["About", "Skills", "Projects", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button theme-button" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <button className="icon-button menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <div className="eyebrow"><span className="status-dot"/>{PROFILE.availability}</div>
              <p className="hero-kicker">HELLO, I'M {PROFILE.name.toUpperCase()}</p>
              <h1>Curious mind.<br/><span className="gradient-text">Data-driven</span> thinker.</h1>
              <p className="hero-description">{PROFILE.intro} I’m focused on building a career in data analytics and data science through consistent learning and real projects.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
                <a className="button button-quiet" href={PROFILE.resume} target="_blank" rel="noreferrer"><FileDown size={17}/> View résumé</a>
              </div>
              <div className="social-row">
                <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
                <button onClick={copyEmail} aria-label="Copy email"><Mail size={18}/>{copied && <span className="copied-label">Copied</span>}</button>
                <span className="social-divider"/>
                <span className="location-label">{PROFILE.location}</span>
              </div>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{opacity:0, scale:.94}} animate={{opacity:1, scale:1}} transition={{duration:.7, delay:.15}}>
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="profile-card">
              <div className="card-top"><span className="mono-label">PROFILE / 001</span><span className="live-pill"><span className="status-dot"/> ONLINE</span></div>
              <div className="avatar-placeholder"><span>{PROFILE.name.split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase()}</span><div className="avatar-glow"/></div>
              <h3>{PROFILE.name}</h3>
              <p>{PROFILE.role}</p>
              <div className="card-divider"/>
              <div className="profile-stats"><div><strong>SQL</strong><small>Querying</small></div><div><strong>PY</strong><small>Analysis</small></div><div><strong>BI</strong><small>Insights</small></div></div>
              <div className="floating-chip chip-one"><Database size={15}/> Structured data</div>
              <div className="floating-chip chip-two"><Sparkles size={15}/> Always learning</div>
            </div>
          </motion.div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading number="01" eyebrow="A LITTLE ABOUT ME" title="Turning curiosity into" accent="capability."/>
          <div className="about-grid">
            <motion.div className="about-main" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}>
              <p className="about-lead">{PROFILE.about}</p>
              <p className="muted-copy">My goal is to grow into a professional who can work across the data lifecycle — from asking the right question and preparing data to analysing patterns and presenting a clear recommendation.</p>
              <div className="currently-box"><span className="currently-icon"><Terminal size={18}/></span><div><small>WHAT I'M FOCUSED ON</small><p>{PROFILE.currently}</p></div></div>
            </motion.div>
            <motion.div className="about-side" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}>
              <div className="fact-card"><span className="fact-number">01</span><div><strong>Learn by doing</strong><p>Practical projects over passive learning.</p></div></div>
              <div className="fact-card"><span className="fact-number">02</span><div><strong>Think clearly</strong><p>Break complex problems into simple steps.</p></div></div>
              <div className="fact-card"><span className="fact-number">03</span><div><strong>Keep improving</strong><p>Build, reflect, and make the next version better.</p></div></div>
            </motion.div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionHeading number="02" eyebrow="MY TOOLKIT" title="Skills I’m building" accent="with purpose."/>
          <p className="section-intro">A practical toolkit for working with data, solving problems, and communicating results. Skill levels are intentionally described rather than overstated.</p>
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return <motion.article className="skill-card" key={skill.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} transition={{delay:i*.06}}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={20}/></span><span className="mono-label">0{i+1}</span></div>
                <h3>{skill.name}</h3><p className="skill-level">{skill.level}</p>
                <div className="tag-list">{skill.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
              </motion.article>
            })}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading number="03" eyebrow="SELECTED WORK" title="Projects that show" accent="how I think."/>
          <div className="projects-toolbar"><p className="section-intro">A selection of practical work. Replace these starter examples with your real projects, repositories, and findings.</p>
            <div className="filter-row" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={activeFilter===f?"filter active":"filter"} onClick={()=>setActiveFilter(f)}>{f}</button>)}</div>
          </div>
          <div className="projects-grid">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, i)=><motion.article className="project-card" key={project.title} layout initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.25}}>
                <div className={`project-art ${project.visual}`}>
                  <span className="project-index">PROJECT / {project.number}</span>
                  {project.visual==="chart" && <div className="mini-chart"><div style={{height:"35%"}}/><div style={{height:"58%"}}/><div style={{height:"45%"}}/><div style={{height:"78%"}}/><div style={{height:"64%"}}/><div style={{height:"94%"}}/></div>}
                  {project.visual==="database" && <div className="database-art"><Database size={76} strokeWidth={1}/><span className="db-ring"/></div>}
                  {project.visual==="code" && <div className="code-art"><span>def</span> analyse_data(dataset):<br/>&nbsp;&nbsp;clean = dataset.dropna()<br/>&nbsp;&nbsp;return clean.describe()</div>}
                  <a className="project-open" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={19}/></a>
                </div>
                <div className="project-content"><div className="project-category">{project.category}</div><h3>{project.title}</h3><p>{project.description}</p>
                  <div className="tag-list">{project.stack.map(t=><span key={t}>{t}</span>)}</div>
                  <div className="project-outcome"><span>KEY TAKEAWAY</span><p>{project.outcome}</p></div>
                  <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View project <ArrowRight size={16}/></a>
                </div>
              </motion.article>)}
            </AnimatePresence>
          </div>
        </section>

        <section className="section-wrap journey-section">
          <SectionHeading number="04" eyebrow="MY APPROACH" title="A simple process." accent="Real outcomes."/>
          <div className="journey-grid">
            {[["01","Understand","Clarify the problem, audience, and decision that needs to be made."],["02","Explore","Collect, clean, and investigate the data with care."],["03","Communicate","Turn findings into a clear story, visual, or recommendation."]].map(([n,t,d])=><div className="journey-step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-copy"><div className="eyebrow"><span className="status-dot"/> OPEN TO OPPORTUNITIES</div><p className="hero-kicker">HAVE A PROJECT OR OPPORTUNITY?</p><h2>Let’s make something <span className="gradient-text">meaningful.</span></h2><p className="muted-copy">I’m interested in data analyst internships, entry-level opportunities, collaborative projects, and conversations with people who enjoy solving problems.</p>
              <a className="contact-email" href={`mailto:${PROFILE.email}`}>{PROFILE.email}<ArrowUpRight size={18}/></a>
              <div className="contact-social"><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a></div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <h3>Send a message</h3><p className="form-note">This opens your email app with the details filled in.</p>
              <label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label>
              <label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label>
              <label>How can I help?<textarea required rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me a little about your idea..."/></label>
              <button className="button button-primary submit-button" type="submit">Prepare message <Send size={16}/></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">Y.</span><span>{PROFILE.name}</span></a><p>Designed with intention. Built to keep growing.</p><span className="footer-copy">© {new Date().getFullYear()} {PROFILE.name}</span></footer>
      <AnimatePresence>{scrolled && <motion.button className="back-top" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top"><ChevronUp size={19}/></motion.button>}</AnimatePresence>
    </div>
  );
}

function SectionHeading({number, eyebrow, title, accent}) {
  return <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}>
    <span className="section-number">{number} /</span><div><p className="eyebrow-text">{eyebrow}</p><h2>{title}<br/><span className="gradient-text">{accent}</span></h2></div>
  </motion.div>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
