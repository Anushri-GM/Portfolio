import { useState, useEffect, CSSProperties } from 'react'
import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Terminal,
  BrainCircuit,
  Cloud,
  Briefcase,
  GraduationCap,
  Mail,
  ExternalLink,
  FileDown
} from 'lucide-react'
import ParticleCursor from './ParticleCursor'
import './App.css'

// -- Animation Variants --
const fadeUpVar: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerVar: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

// -- Data --
const skills = [
  { title: "Java", icon: <Terminal />, color: "#60a5fa", bg: "rgba(96, 165, 250, 0.25)" },
  { title: "Python", icon: <Terminal />, color: "#f87171", bg: "rgba(248, 113, 113, 0.25)" },
  { title: "C", icon: <Terminal />, color: "#fb923c", bg: "rgba(251, 146, 60, 0.25)" },
  { title: "HTML", icon: <Code2 />, color: "#38bdf8", bg: "rgba(56, 189, 248, 0.25)" },
  { title: "React.js", icon: <Code2 />, color: "#94a3b8", bg: "rgba(148, 163, 184, 0.25)" },
  { title: "Data Structures & Algorithms", icon: <BrainCircuit />, color: "#818cf8", bg: "rgba(129, 140, 248, 0.25)" },
  { title: "SQLite", icon: <Database />, color: "#2dd4bf", bg: "rgba(45, 212, 191, 0.25)" },
  { title: "Firebase Firestore", icon: <Database />, color: "#fbbf24", bg: "rgba(251, 191, 36, 0.25)" },
  { title: "GitHub", icon: <Terminal />, color: "#0ea5e9", bg: "rgba(14, 165, 233, 0.25)" },
  { title: "Firebase Studio", icon: <Cloud />, color: "#a78bfa", bg: "rgba(167, 139, 250, 0.25)" },
  { title: "Google GenAI", icon: <BrainCircuit />, color: "#22c55e", bg: "rgba(34, 197, 94, 0.25)" },
  { title: "Vercel", icon: <Cloud />, color: "#f472b6", bg: "rgba(244, 114, 182, 0.25)" }
]

const projects = [
  {
    title: "Artistry Havens – AI Marketplace for Local Artisans",
    desc: "Developed a full-stack marketplace for local artisans, integrating AI-driven storytelling, multilingual voice navigation, and visual analytics to enhance accessibility and product visibility.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Vertex AI", "Gemini"],
    image: "https://www.image2url.com/r2/default/images/1777008886634-1ffd0294-f6dd-46cf-a91d-ba86a665f82c.png",
    link: "#"
  },
  {
    title: "Academic Department Management Portal",
    desc: "Contributed to frontend development and UI/UX design of an academic portal, creating intuitive interfaces to streamline navigation and improve user experience.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB"],
    image: "https://www.image2url.com/r2/default/images/1777034272738-3ff32338-0d9c-420a-bb58-218e0d3f59f8.png",
    link: "#"
  },
  {
    title: "Wayora – AI Travel Companion Platform",
    desc: "Designed an AI-driven travel platform with itinerary generation, budget optimization, and integrated accommodation, transport, and local discovery modules.",
    tags: ["React Native", "Supabase", "PostgreSQL", "OpenStreetMap"],
    image: "https://www.image2url.com/r2/default/images/1777009379723-359ecf56-aff1-4b42-ad4d-1f6f3c34cec4.png",
    link: "#"
  }
]

const experience = [
  {
    date: "Aug 2024 - May 2028",
    title: "PSG Institute of Technology and Applied Research, Coimbatore",
    org: "B.Tech - Artificial Intelligence and Data Science",
    desc: "CGPA - 8.03",
    icon: <GraduationCap size={20} />
  },
  {
    date: "May 2015 - Mar 2024",
    title: "St. Jude's Public School and Junior College, Kotagiri",
    desc: <>HSC - 96.8% <br />SSLC - 95.2%</>,
    icon: <GraduationCap size={20} />
  }
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle scroll for navbar and mouse position for cursor
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=anushritcs@gmail.com&su=Contact from ${name}&body=${message}`;
    window.open(gmailLink, '_blank');
  };

  return (
    <div className="app-container">
      {/* Custom Particle Cursor */}
      <ParticleCursor />
      
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Background Effect */}
      <div className="bg-mesh"></div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-links">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="https://www.image2url.com/r2/default/documents/1777009685867-1c1ff59d-a4af-4637-b40c-e846d62a6eae.pdf" target="_blank" rel="noopener noreferrer" className="nav-link resume-link">Resume</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVar}
          className="hero-content"
        >
          <h1 className="hero-title">
            <span className="gradient-text">Anushri G M</span>
          </h1>
          <p className="hero-subtitle">
			A passionate technologist driven to build intelligent systems and continuously expand my expertise in AI and modern software development. I focus on transforming ideas into efficient, scalable solutions while learning, experimenting, and evolving with emerging technologies.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="glow-btn">Deploy Projects</a>
            <a href="#contact" className="btn-secondary">Establish Link</a>
          </div>
        </motion.div>
        
        <div className="hero-image-wrapper">
           <div className="hero-image-glow"></div>
           <img src="/profile.png" alt="Anushri G M profile photo" className="hero-image" />
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="section-container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVar}
        >
          Experience & Education
        </motion.h2>

        <div className="timeline">
          {experience.map((item) => (
            <motion.div 
              key={item.title} 
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVar}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                {item.org && <p className="timeline-org">{item.org}</p>}
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="skills" className="section-container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVar}
        >
          My Expertise
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerVar}
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.title} 
              className="skill-card glass-panel"
              variants={fadeUpVar}
              style={{ 
                '--skill-color': skill.color,
                '--skill-bg': skill.bg,
                background: skill.bg 
              } as CSSProperties}
            >
              <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
              <h3 className="skill-title" style={{marginBottom: 0}}>{skill.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVar}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerVar}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title} 
              className="project-card glass-panel"
              variants={fadeUpVar}
            >
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <motion.div 
          className="contact-wrapper glass-panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVar}
        >
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Let's Build <br/>Something <span className="gradient-text">Epic.</span>
            </h2>
            <p style={{ textAlign: 'left', marginBottom: '40px' }}>Open to collaborating on bold ideas and intelligent systems—whether it’s solving complex AI challenges or simply connecting, I’m always ready to explore what’s next.</p>
            
            <div className="social-links">
              <a href="https://github.com/Anushri-GM" className="social-link" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/anushri-g-m-221b77350?utm_source=share_via" className="social-link" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.56c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.66h-3.56V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/></svg>
              </a>
              <a href="mailto:anushritcs@gmail.com" className="social-link" title="Email"><Mail size={20} /></a>
              <a href="https://www.image2url.com/r2/default/documents/1777009685867-1c1ff59d-a4af-4637-b40c-e846d62a6eae.pdf" download className="social-link" title="Download Resume">
                <FileDown size={20} />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="John Doe" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="john@example.com" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Hello Anushri, deploying a message concerning..." name="message" value={formData.message} onChange={handleInputChange}></textarea>
            </div>
            <button type="submit" className="glow-btn" style={{ width: '100%' }}>Send Message</button>
          </form>
        </motion.div>
      </section>

    </div>
  )
}

export default App
