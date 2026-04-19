import { useState, useEffect } from 'react'
import type { Variants } from 'framer-motion'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  { title: "AI & Machine Learning", icon: <BrainCircuit />, desc: "PyTorch, TensorFlow, Scikit-learn, NLP" },
  { title: "Frontend Development", icon: <Code2 />, desc: "React, TypeScript, Next.js, Framer Motion" },
  { title: "Backend Systems", icon: <Terminal />, desc: "Node.js, Express, Python, FastAPI" },
  { title: "Cloud & DevOps", icon: <Cloud />, desc: "AWS, Docker, Kubernetes, CI/CD" },
  { title: "Cybersecurity", icon: <Shield />, desc: "Network Security, Web Pentesting, Cryptography" },
  { title: "Databases", icon: <Database />, desc: "PostgreSQL, MongoDB, Redis, Pinecone" }
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const heroImageY = useTransform(scrollY, [0, 500], [0, 150])

  // Handle scroll for navbar and mouse position for cursor
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="app-container">
      {/* Custom Cursor Glow */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      />
      
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Background Effect */}
      <div className="bg-mesh"></div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-logo">
          <span className="gradient-text">Anush.AI</span>
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
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
          <p className="hero-greeting">Initialize &lt;Anush /&gt;</p>
          <h1 className="hero-title">
            Architecting <br />
            <span className="gradient-text">Intelligent Futures.</span>
          </h1>
          <p className="hero-subtitle">
            I'm Anush, an AI & Data Science specialist fusing neural networks with high-performance systemic engineering. From generating synthetic realities to fortifying cloud architectures.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="glow-btn">Deploy Projects</a>
            <a href="#contact" className="btn-secondary">Establish Link</a>
          </div>
        </motion.div>
        
        <motion.div
           style={{ y: heroImageY }}
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="hero-image-wrapper"
        >
           <div className="hero-image-glow"></div>
           <img src="/profile.png" alt="Anush" className="hero-image" />
        </motion.div>
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
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>
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
                    <Terminal size={18} /> Code
                  </a>
                  <a href={project.link} className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
