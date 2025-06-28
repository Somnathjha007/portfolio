import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code2, User, FolderOpen, Download, ArrowRight, Star, Briefcase, GraduationCap, Award, Users, Eye, CheckCircle } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'resume', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Bosch Global Software Technologies",
      period: "Oct 2024 - Present",
      description: "Developed embedded AI solutions for automotive SoCs, optimizing models for edge deployment. Designed scalable AI systems for automobile components.",
      type: "work"
    },
    {
      title: "Industrial Trainee",
      company: "SAIL",
      period: "Feb 2023 - Jun 2023",
      description: "Managed PLC control room operations and maintenance protocols. Conducted quality control assessments for industrial equipment.",
      type: "work"
    },
    {
      title: "B.Tech in Electronics and Communication Engineering",
      company: "Chandigarh Engineering College",
      period: "2019 - 2023",
      description: "Punjab Technical University • GPA: 7.9/10.0",
      type: "education"
    },
    {
      title: "Higher Secondary Certificate (Non-Medical)",
      company: "Holy Cross School",
      period: "2016 - 2018",
      description: "CBSE Board",
      type: "education"
    }
  ];

  const projects = [
    {
      title: "ESP32 Image Classifier with TFLite",
      description: "Optimized CNN model for real-time inference on ESP32 with live image capture. Achieved 75% model size reduction through quantization.",
      image: "/api/placeholder/400/300",
      tech: ["TensorFlow Lite", "ESP32", "MobileNet v1", "OpenCV"]
    },
    {
      title: "Hybrid Edge to Cloud Traffic Signal Violation Detection",
      description: "Real-time traffic violation detection system using YOLOv8 with continuous image capture and cloud-based AI processing.",
      image: "/api/placeholder/400/300",
      tech: ["YOLOv8", "Flask API", "Python", "Computer Vision"]
    },
    {
      title: "Automotive SoC AI Solutions",
      description: "Embedded AI solutions for automotive applications with optimized models for edge deployment at Bosch.",
      image: "/api/placeholder/400/300",
      tech: ["Embedded AI", "Edge Computing", "Automotive SoC", "C++"]
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "R", "C++", "C"] },
    { category: "AI/ML Frameworks", items: ["PyTorch", "TensorFlow Lite", "TensorFlow Micro", "OpenCV"] },
    { category: "Embedded AI", items: ["Edge Impulse", "Arduino", "ESP32", "Nicla Vision"] },
    { category: "Deployment", items: ["Docker", "FastAPI", "Flask", "REST APIs"] },
    { category: "Data Handling", items: ["NumPy", "Pandas", "OpenCV", "JSON", "MySQL"] }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">
              <span className="text-white">Somnath</span>
              <span className="text-green-400">Jha</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'resume', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-green-400 ${
                    activeSection === section ? 'text-green-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'resume' ? 'About Me' : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-green-400 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/95 border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'resume', 'portfolio', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block px-4 py-2 text-gray-300 hover:text-green-400 w-full text-left"
                  >
                    {section === 'resume' ? 'About Me' : section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 relative bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Card */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 max-w-sm w-full">
               
                {/* Profile Image */}
                <div className="mb-6">
                  <div className="w-full h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                    {/* Replace the src with your actual photo path */}
                    <img 
                      src="Pro_Profile_pic.jpg" 
                      alt="Somnath Jha" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                      <User size={80} className="text-green-400" />
                    </div>
                  </div>
                </div>
                
                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">Somnath Jha</h3>
                  <p className="text-green-400 font-medium text-lg">AI/ML ENGINEER</p>
                </div>
                
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a href="https://linkedin.com/in/somnath-jhaa" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-400/20 transition-all duration-300">
                    <Linkedin size={18} className="text-gray-400 hover:text-green-400" />
                  </a>
                  <a href="https://github.com/Somnathjha007" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-400/20 transition-all duration-300">
                    <Github size={18} className="text-gray-400 hover:text-green-400" />
                  </a>
                  <a href="mailto:somnath.jha.official@gmail.com" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-400/20 transition-all duration-300">
                    <Mail size={18} className="text-gray-400 hover:text-green-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Dynamic Text */}
            <div className="space-y-8">
              <div className="mb-8">
                <div className="border-2 border-dashed border-green-400/30 rounded-lg p-4 inline-block mb-6">
                  <h2 className="text-2xl md:text-3xl text-white">
                    Hello! I'm <span className="text-green-400">AI/ML Engineer</span>
                  </h2>
                </div>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Hello! I'm Somnath Jha, an AI/ML Engineer with expertise in edge computing and embedded systems. 
                I have a proven track record of optimizing AI models for resource-constrained environments and 
                building scalable AI solutions across the ML lifecycle - from data engineering to cloud deployment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/Som_res_v1.pdf" 
                  download
                  className="border border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-gray-400 text-xl">Education & Experience</p>
            <div className="w-20 h-1 bg-green-400 mx-auto mt-4"></div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-white mb-2">
                1<span className="text-4xl text-green-400">+</span>
              </div>
              <p className="text-gray-400 text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-white mb-2">
                5<span className="text-4xl text-green-400">+</span>
              </div>
              <p className="text-gray-400 text-lg">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-white mb-2">
                2<span className="text-4xl text-green-400"></span>
              </div>
              <p className="text-gray-400 text-lg">Professional Experiences</p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-green-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  {exp.type === 'work' ? <Briefcase size={24} className="text-green-400" /> : <GraduationCap size={24} className="text-green-400" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-green-400 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-400 mb-2">{exp.period}</p>
                  {exp.description && <p className="text-gray-300 text-sm">{exp.description}</p>}
                </div>
                <div className="flex-shrink-0">
                  <Star size={16} className="text-green-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-xl font-bold text-green-400 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Portfolio
            </h2>
            <p className="text-gray-400 text-xl">Featured Projects</p>
            <div className="w-20 h-1 bg-green-400 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-400/50 transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-green-400/20 to-blue-400/20 flex items-center justify-center">
                  <FolderOpen size={48} className="text-green-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact
            </h2>
            <div className="w-20 h-1 bg-green-400 mx-auto mb-8"></div>
          </div>

          <p className="text-2xl text-gray-400 mb-8">Ready to optimize your AI for the edge?</p>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Somnathjha007" className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300">
              <Github size={24} className="text-gray-400 hover:text-green-400" />
            </a>
            <a href="https://linkedin.com/in/somnath-jhaa" className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300">
              <Linkedin size={24} className="text-gray-400 hover:text-green-400" />
            </a>
            <a href="mailto:somnath.jha.official@gmail.com" className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300">
              <Mail size={24} className="text-gray-400 hover:text-green-400" />
            </a>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-gray-700/50 rounded-lg border border-gray-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Me</h3>
              <p className="text-gray-400 mb-6">Let's discuss your next AI project</p>
              <a 
                href="mailto:somnath.jha.official@gmail.com"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">
            © 2025 Somnath Jha. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;