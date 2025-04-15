import { useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { TechStack } from './components/TechStack';
import { projects } from './data/projects';
import profileImage from './assets/ayan.jpg'; // Import the image
import MapImage from './assets/map-image.png'; // Ensure this file exists in the correct location
import smileMemoji from './assets/memoji-smile.png'; // Import the smile memoji image

const locationInfo = "https://www.google.com/maps/place/Jalpaiguri,+West+Bengal/@26.5382481,88.6616518,11868m/data=!3m1!1e3!4m6!3m5!1s0x39e4795a4544dc7b:0xfd44f1fea54c9c40!8m2!3d26.5214579!4d88.7195567!16zL20vMDZ0Y3dt?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D";

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 relative">
      <div className="animated-bg" />
      
        {/* Header */}
        <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50">
        <nav className="section-container py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold heading-gradient hover:opacity-80 transition-opacity">Portfolio</a>

            {/* Hamburger Menu for Mobile */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>

            {/* Navigation Links (Desktop) */}
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

          {/* Mobile Menu with Animation */}
          <div
            className={`md:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <a href="#about" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={toggleMobileMenu}>
              About
            </a>
            <a href="#projects" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={toggleMobileMenu}>
              Projects
            </a>
            <a href="#contact" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={toggleMobileMenu}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-16">
        <div className="section-container py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold mb-6 heading-gradient">
                Hey, I'm Ayan Das 👋
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
                  href="https://drive.google.com/file/d/1xNSWzPPJpW501oKIePx8IAAGAv7_l37F/view"
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
              <div className="relative bg-gray-900 p-4 rounded-xl"> {/* Increased padding */}
                <img 
                  src={profileImage} // Use the imported image
                  alt="Profile"
                  className="rounded-lg w-auto max-h-[300px] mx-auto object-contain" // Adjusted width and centered the image
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
              <p className="text-gray-300 leading-relaxed">
                Based in <a 
                  href={locationInfo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Jalpaiguri, West Bengal
                </a>, I enjoy working on projects that make a difference.
              </p>
            </div>
            <div 
              onClick={() => { window.open(locationInfo); }} 
              className="bg-gray-800 hover:cursor-pointer rounded-3xl relative overflow-hidden border-2 border-white/20 h-[320px]"
            >
              <img
                src={MapImage}
                alt="Map Image"
                className="h-full w-full object-cover z-0"
              />
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 border-2 border-sky-500 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 border-2 border-sky-500 -z-10"></div>
                <img
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800"> {/* Added spacing and border */}
            <h3 className="text-4xl font-bold mb-12 heading-gradient">Technical Expertise</h3>
            <TechStack />
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
      <footer className="py-8 border-t border-gray-800 bg-gray-900">
        <div className="section-container text-center space-y-6">
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/SarcasticWala" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayan-das-cse39/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:dasayan948@gmail.com" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ayan Das. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            aria-label="Back to top"
          >
            Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
