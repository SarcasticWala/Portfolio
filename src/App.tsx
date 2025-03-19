import  { useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { TechStack } from './components/TechStack';
import { projects } from './data/projects';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 relative">
      <div className="animated-bg" />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50">
        <nav className="section-container py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold heading-gradient hover:opacity-80 transition-opacity">Portfolio</a>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-blue-400 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#projects" className="hover:text-blue-400 transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="hover:text-blue-400 transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-16">
        <div className="section-container py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold mb-6 heading-gradient">
                Hey, I'm [Your Name] 👋
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                A passionate software developer crafting elegant solutions through code. 
                Specializing in modern web technologies and user-centric applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/SarcasticWala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 hover:text-blue-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ayan-das-cse39/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=dasayan948@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 hover:text-blue-400 transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail size={24} />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1-DGJHFt3M0P6c0KzI3ujN98p5kBju2NQ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900 p-2 rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800"
                  alt="Profile"
                  className="rounded-lg w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={24} />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 heading-gradient">About Me</h2>
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a software developer passionate about creating impactful digital experiences. 
                With a strong foundation in modern web technologies, I specialize in building 
                scalable, user-friendly applications that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My approach combines technical expertise with creative problem-solving, 
                ensuring that each project not only functions flawlessly but also 
                delivers an exceptional user experience.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8">Technical Expertise</h3>
              <TechStack />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 heading-gradient">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          {projects.length > 2 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 
                         rounded-lg transition-colors border border-blue-500/30"
              >
                {showAllProjects ? 'Show Less' : 'View More Projects'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-6 heading-gradient">Let's Connect</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to collaborate on interesting projects and explore new opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="section-container text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;