import { useState, useEffect } from 'react'
import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Terminal,
  BrainCircuit,
  Cloud,
  Shield,
  Briefcase,
  GraduationCap,
  Mail,
  ExternalLink
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
  { title: "Python", icon: <Terminal />, color: "#AEC6CF", bg: "rgba(174, 198, 207, 0.4)" },
  { title: "PyTorch", icon: <BrainCircuit />, color: "#FFD1DC", bg: "rgba(255, 209, 220, 0.4)" },
  { title: "TensorFlow", icon: <BrainCircuit />, color: "#FFB347", bg: "rgba(255, 179, 71, 0.4)" },
  { title: "React", icon: <Code2 />, color: "#B2D8B2", bg: "rgba(178, 216, 178, 0.4)" },
  { title: "Next.js", icon: <Code2 />, color: "#CFCFC4", bg: "rgba(207, 207, 196, 0.4)" },
  { title: "TypeScript", icon: <Code2 />, color: "#779ECB", bg: "rgba(119, 158, 203, 0.4)" },
  { title: "Node.js", icon: <Terminal />, color: "#03C03C", bg: "rgba(3, 192, 60, 0.4)" },
  { title: "FastAPI", icon: <Terminal />, color: "#966FD6", bg: "rgba(150, 111, 214, 0.4)" },
  { title: "AWS", icon: <Cloud />, color: "#FDFD96", bg: "rgba(253, 253, 150, 0.4)" },
  { title: "Docker", icon: <Cloud />, color: "#836953", bg: "rgba(131, 105, 83, 0.4)" },
  { title: "PostgreSQL", icon: <Database />, color: "#B19CD9", bg: "rgba(177, 156, 217, 0.4)" },
  { title: "MongoDB", icon: <Database />, color: "#77DD77", bg: "rgba(119, 221, 119, 0.4)" },
  { title: "Pinecone", icon: <Database />, color: "#DEA5A4", bg: "rgba(222, 165, 164, 0.4)" },
  { title: "Framer Motion", icon: <Code2 />, color: "#FF6961", bg: "rgba(255, 105, 97, 0.4)" }
]

const projects = [
  {
    title: "NeuroGen AI",
    desc: "An advanced neural network architecture for generating highly realistic synthetic data. Deployed using FastAPI and React.",
    tags: ["Python", "PyTorch", "React", "FastAPI"],
    image: "/neuro.png",
    link: "#"
  },
  {
    title: "CloudGuard",
    desc: "A cloud security posture management tool that actively monitors AWS environments for misconfigurations.",
    tags: ["AWS", "Node.js", "TypeScript", "DevSecOps"],
    image: "/cloud.png",
    link: "#"
  },
  {
    title: "QuantBot",
    desc: "Algorithmic trading bot leveraging reinforcement learning to optimize portfolio allocation in real-time.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Binance API"],
    image: "/quant.png",
    link: "#"
  }
]

const experience = [
  {
    date: "2024 - Present",
    title: "AI Research Intern",
    org: "Tech Innovations Labs",
    desc: "Researching large language model optimisations for edge devices. Reduced inference time by 30% using quantization.",
    icon: <Briefcase size={20} />
  },
  {
    date: "2022 - 2026",
    title: "BSc Computer Science (AI Spec)",
    org: "University of Technology",
    desc: "Relevant coursework: Deep Learning, Distributed Systems, Cryptography, Advanced Algorithms.",
    icon: <GraduationCap size={20} />
  },
  {
    date: "2023",
    title: "Software Engineering Intern",
    org: "FinTech Solutions",
    desc: "Developed secure REST APIs for a new payment gateway resulting in a 15% increase in transaction speed.",
    icon: <Briefcase size={20} />
  }
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for navbar and mouse position for cursor
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
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
            An AI & Data Science specialist fusing neural networks with high-performance systemic engineering. From generating synthetic realities to fortifying cloud architectures.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="glow-btn">Deploy Projects</a>
            <a href="#contact" className="btn-secondary">Establish Link</a>
          </div>
        </motion.div>
        
        <div className="hero-image-wrapper">
           <div className="hero-image-glow"></div>
           <img src="/profile.png" alt="Anush" className="hero-image" />
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
          {experience.map((item, index) => (
            <motion.div 
              key={index} 
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
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="section-container">
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
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card glass-panel"
              variants={fadeUpVar}
              style={{ 
                '--skill-color': skill.color,
                '--skill-bg': skill.bg,
                background: skill.bg 
              } as any}
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
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
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
                <div className="project-links">
                  <a href={project.link} className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
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
            <p>Ready to deploy new ideas in Summer 2026. Whether you have a challenging neural architecture question or just want to network, my inbox is always listening.</p>
            
            <div className="social-links">
              <a href="#" className="social-link" title="GitHub"><span style={{fontSize:'1rem', fontWeight:800}}>GH</span></a>
              <a href="#" className="social-link" title="LinkedIn"><span style={{fontSize:'1rem', fontWeight:800}}>IN</span></a>
              <a href="#" className="social-link" title="Twitter"><span style={{fontSize:'1rem', fontWeight:800}}>X</span></a>
              <a href="#" className="social-link" title="Email"><Mail size={20} /></a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Hello Anush, deploying a message concerning..."></textarea>
            </div>
            <button type="button" className="glow-btn" style={{ width: '100%' }}>Send Message</button>
          </form>
        </motion.div>
      </section>

    </div>
  )
}

export default App
