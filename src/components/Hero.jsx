import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'DevOps & Cloud Engineer',
    'Azure Specialist',
    'Infrastructure Automation Expert',
    'CI/CD Pipeline Architect'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/abhaypatil001',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/abhay-patil-devops',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:abhaypatil001@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-lg text-gray-600 dark:text-gray-300">
                <span className="animate-pulse">👋</span>
                <span>Hello, I'm</span>
              </div>
              
              {/* Name */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                Abhay
                <span className="text-gradient"> Patil</span>
              </h1>
              
              {/* Dynamic Role */}
              <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 h-12 flex items-center justify-center lg:justify-start">
                <span className="typing-animation">
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              14+ years of IT Infrastructure experience with 3+ years focused on DevOps engineering. 
              Specializing in Azure, AWS, and VMware ecosystems, driving cloud migration, automation, 
              and CI/CD pipeline excellence with proven results in large-scale enterprise environments.
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">14+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-600 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">1000+ Workloads Migrated</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">5000+ Servers Managed</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary group"
              >
                View My Work
                <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary group"
              >
                <Mail className="mr-2 w-4 h-4" />
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transform hover:-translate-y-1 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-3xl opacity-20 scale-110"></div>
              
              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-white dark:ring-gray-800 float-animation">
                <img
                  src={profilePhoto}
                  alt="Abhay Patil - DevOps & Cloud Engineer"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">☁️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">⚙️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
