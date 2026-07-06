import { useState, useEffect } from 'react';
import type { Variants } from 'framer-motion';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Terminal, BrainCircuit, Cloud, Briefcase, GraduationCap, FileDown } from 'lucide-react';
import './App.css';
import { useRef } from 'react';

const fadeUpVar: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerVar: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
};

const skills = [
	{ title: 'Java', icon: <Terminal /> },
	{ title: 'Python', icon: <Terminal /> },
	{ title: 'C', icon: <Terminal /> },
	{ title: 'HTML', icon: <Code2 /> },
	{ title: 'React.js', icon: <Code2 /> },
	{ title: 'Data Structures & Algorithms', icon: <BrainCircuit /> },
	{ title: 'SQLite', icon: <Database /> },
	{ title: 'Firebase Firestore', icon: <Database /> },
	{ title: 'GitHub', icon: <Terminal /> },
	{ title: 'Firebase Studio', icon: <Cloud /> },
	{ title: 'Machine Learning', icon: <BrainCircuit /> },
	{ title: 'Generative AI', icon: <BrainCircuit /> },
	{ title: 'Vercel', icon: <Cloud /> },
	{ title: 'Numpy', icon: <BrainCircuit /> },
	{ title: 'Pandas', icon: <BrainCircuit /> },
];

const projects = [
	{
		title: 'Artistry Havens – AI Marketplace for Local Artisans',
		desc: 'Developed a full-stack marketplace for local artisans, integrating AI-driven storytelling, multilingual voice navigation, and visual analytics to enhance accessibility and product visibility.',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Vertex AI', 'Gemini'],
		image: 'https://www.image2url.com/r2/default/images/1777008886634-1ffd0294-f6dd-46cf-a91d-ba86a665f82c.png',
		link: '#',
	},
	{
		title: 'AirGuard AI – Intelligent Engine Leak Detection System',
		desc: 'Developed an intelligent monitoring system that applies machine learning, anomaly detection, and predictive diagnostics to identify engine air leaks and recommend corrective actions through a real-time analytics dashboard.',
		tags: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Scikit-learn', 'Machine Learning'],
		image: 'https://www.image2url.com/r2/default/images/1781365406013-e08035ab-457a-4f5b-8b39-9128186223b3.jpeg',
		link: '#',
	},
	{
		title: 'Academic Department Management Portal',
		desc: 'Contributed to frontend development and UI/UX design of an academic portal, creating intuitive interfaces to streamline navigation and improve user experience.',
		tags: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB'],
		image: 'https://www.image2url.com/r2/default/images/1777034272738-3ff32338-0d9c-420a-bb58-218e0d3f59f8.png',
		link: '#',
	},
	{
		title: 'Wayora – AI Travel Companion Platform',
		desc: 'Designed an AI-driven travel platform with itinerary generation, budget optimization, and integrated accommodation, transport, and local discovery modules.intro',
		tags: ['React Native', 'Supabase', 'PostgreSQL', 'OpenStreetMap'],
		image: 'https://www.image2url.com/r2/default/images/1777009379723-359ecf56-aff1-4b42-ad4d-1f6f3c34cec4.png',
		link: '#',
	},
];

const experience = [
    {
        title: 'Incoming Software Engineer Intern',
        org: 'Zequin Technology Pvt Ltd',
        date: 'June 2026 - Dec 2026',
        desc: 'An upcoming hybrid internship.',
        image: 'https://www.image2url.com/r2/default/images/1781591254500-a99fdc05-11fd-4ff8-9c66-e3c110939a64.png',
        link: '#',
    },
];

const education = [
	{
		date: 'Aug 2024 - May 2028',
		title: 'PSG Institute of Technology and Applied Research, Coimbatore',
		org: 'B.Tech - Artificial Intelligence and Data Science',
		desc: 'CGPA - 8.03',
		icon: <GraduationCap size={20} />,
	},
	{
		date: 'May 2015 - Mar 2024',
		title: <>St. Jude's Public School and Junior College, Kotagiri <span className="gradient-text">(ICSE)</span></>,
		desc: (
			<>
				HSC - 96.8% <br />
				SSLC - 95.2%
			</>
		),
		icon: <GraduationCap size={20} />,
	},
];

function App() {
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			const sections = ['home', 'education', 'experience', 'skills', 'projects', 'contact'];
			const scrollPosition = window.scrollY + 200;

			for (const section of sections) {
				const el = document.getElementById(section);
				if (el) {
					const top = el.offsetTop;
					const height = el.offsetHeight;
					if (scrollPosition >= top && scrollPosition < top + height) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="app-container">
			{/* Noise Overlay */}
			<div className="noise-overlay"></div>

			{/* Navigation */}
			<nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
				<div className="nav-links">
					<a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
						About
					</a>
					<a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}>
						Education
					</a>
					<a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
						Experience
					</a>
					<a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
						Skills
					</a>
					<a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
						Projects
					</a>
					<a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
						Contact
					</a>
				</div>
			</nav>

			{/* Hero Section */}
			<section id="home" className="hero">
				<div className="hero-inner">
					<div className="hero-image-wrapper">
						<div className="hero-image-glow"></div>
						<img src="/profile.png" alt="Anushri G M profile photo" className="hero-image" />
					</div>
					<motion.div initial="hidden" animate="visible" variants={fadeUpVar} className="hero-content">
						<h1 className="hero-title">
							<span className="gradient-text">ANUSHRI G M</span>
						</h1>
						<h2 className="hero-tagline">
							Frontend Developer &bull; AI Enthusiast
						</h2>
						<p className="hero-subtitle">
							Designing and developing intelligent systems at the intersection of AI, software engineering, and human-centered innovation.
						</p>
						<div className="hero-cta">
							<a href="https://github.com/Anushri-GM" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
							<a href="https://www.linkedin.com/in/anushri-g-m-221b77350?utm_source=share_via" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.56c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.66h-3.56V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
								</svg>
							</a>
							<a href="https://leetcode.com/u/Anushri_7" target="_blank" rel="noopener noreferrer" className="social-link" title="LeetCode">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
								</svg>
							</a>
              <a href="https://www.instagram.com/anushri_gm?igsh=NGcxb3NhM29rcmxt" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.646.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689-.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
              </a>
							<a href="https://mail.google.com/mail/?view=cm&fs=1&to=anushritcs@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Gmail">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path d="M22,6C22,4.9,21.1,4,20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6z M20,6l-8,5L4,6H20z M20,18H4V8l8,5 l8-5V18z"/>
								</svg>
							</a>
						</div>
					</motion.div>

				</div>
			</section>

			{/* Education Section */}
            <section id="education" className="section-container section-education">
                <div className="section-content">
                    <motion.h2
                        className="section-title"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUpVar}
                    >
                        Education
                    </motion.h2>

                    <div className="timeline">
                        {education.map(item => (
                            <motion.div
                                key={item.title}
                                className="timeline-item"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
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
                </div>
            </section>

			{/* Experience Section */}
			<section id="experience" className="section-container section-internship">
				<div className="section-content">
					<motion.h2
						className="section-title"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUpVar}
						style={{ fontWeight: 'bold' }}
					>
						Experience
					</motion.h2>

					<motion.div
						className="projects-grid"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerVar}
					>
						{experience.map((exp) => (
							<motion.div
								key={exp.title}
								className="project-card experience-card glass-panel"
								variants={fadeUpVar}
							>
								<img src={exp.image} alt={exp.title} className="project-img" />
								<div className="project-content">
                                    {exp.date && <span className="timeline-date">{exp.date}</span>}
									<div className="project-tags">
										{exp.tags && exp.tags.map((tag, i) => (
											<span key={i} className="tag">
												{tag}
											</span>
										))}
									</div>
									<h3 className="project-title">{exp.title}</h3>
                                    {exp.org && <p className="timeline-org">{exp.org}</p>}
									<p className="project-desc">{exp.desc}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* About & Skills Section */}
			<section id="skills" className="section-container section-skills">
				<div className="section-content">
					<motion.h2
						className="section-title"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUpVar}
						style={{ fontWeight: 'bold' }}
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
						{skills.map(skill => (
							<motion.div key={skill.title} className="skill-card glass-panel" variants={fadeUpVar}>
								<div className="skill-icon">{skill.icon}</div>
								<h3 className="skill-title" style={{ marginBottom: 0 }}>
									{skill.title}
								</h3>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="projects-section section-projects">
				<div class="section-content">
					<motion.h2
						className="section-title"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUpVar}
						style={{ fontWeight: 'bold' }}
					>
						Featured Projects
					</motion.h2>

					<motion.div
						className="projects-grid"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '-100px' }}
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
											<span key={i} className="tag">
												{tag}
											</span>
										))}
									</div>
									<h3 className="project-title">{project.title}</h3>
									<p className="project-desc">{project.desc}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="section-container section-contact">
				<div class="section-content">
					<div className="contact-wrapper glass-panel">
						<div className="contact-info">
							<h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
								Let's Build <br />
								Something <span className="gradient-text">Epic.</span>
							</h2>
							<p style={{ textAlign: 'left', marginBottom: '40px' }}>
								Open to collaborating on bold ideas and intelligent systems—whether it’s solving complex AI challenges or simply
								connecting, I’m always ready to explore what’s next.
							</p>
							<div className="social-links">
								<a href="https://mail.google.com/mail/?view=cm&fs=1&to=anushritcs@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Gmail">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M22,6C22,4.9,21.1,4,20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6z M20,6l-8,5L4,6H20z M20,18H4V8l8,5 l8-5V18z"/>
									</svg>
									anushritcs@gmail.com
								</a>
								<a
									href="https://www.image2url.com/r2/default/documents/1781924460012-86b6d8de-40ba-4f39-852f-d128179d8b09.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="social-link"
									title="Download Resume"
								>
									<FileDown size={20} />
									Download Resume
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer Section */}
			<footer className="footer">
				<div className="footer-content">
					<p>&copy; {new Date().getFullYear()} Anushri G M. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
