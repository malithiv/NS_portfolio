import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/PortfolioSection.css';

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const projects = [
    {
      image: "/placeholder-600x400.jpg",
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "A comprehensive financial analytics dashboard with real-time data visualization.",
      link: "#"
    },
    {
      image: "/placeholder-600x400.jpg",
      title: "Leo App",
      category: "Mobile App",
      description: "Healthcare tracking application with patient monitoring and analytics features.",
      link: "#"
    },
    {
      image: "src/assets/project3.jpg",
      title: "TeaTune AI",
      category: "AI Solution",
      description: "AI-powered inventory management and customer behavior analysis system.",
      link: "#"
    },
    {
      image: "/placeholder-600x400.jpg",
      title: "CloudSecure",
      category: "Cybersecurity",
      description: "Advanced security platform for protecting cloud-based applications and data.",
      link: "#"
    },
    {
      image: "/placeholder-600x400.jpg",
      title: "EcoTrack",
      category: "IoT Solution",
      description: "Environmental monitoring system with IoT sensors and real-time reporting.",
      link: "#"
    },
    {
      image: "/placeholder-600x400.jpg",
      title: "EduLearn",
      category: "E-Learning Platform",
      description: "Comprehensive online learning platform with interactive courses and progress tracking.",
      link: "#"
    }
  ];
  
  return (
    <section id="portfolio" className="portfolio-section" ref={ref}>
      <motion.div 
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={{ width: inView ? '5rem' : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore our portfolio of innovative software solutions across different industries and technologies.
          </motion.p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                y: inView ? 0 : 30 
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + (index * 0.1) 
              }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a 
                      href={project.link} 
                      className="btn btn-outline btn-sm"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#contact" className="btn btn-primary">
            Start Your Project
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;