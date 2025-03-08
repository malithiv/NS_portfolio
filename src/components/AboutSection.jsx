import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/AboutSection.css';

const AboutSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setRotateX((y - 0.5) * -20);
    setRotateY((x - 0.5) * 20);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  const valueItems = [
    {
      title: "Technical Excellence",
      description: "We push our technical boundaries to deliver the highest quality software."
    },
    {
      title: "Client Partnership",
      description: "We build lasting relationships with our clients through collaboration and trust."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to solve tomorrow's challenges."
    }
  ];
  
  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-bg-gradient"></div>
      
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About <span className="text-accent">Us</span>
          </motion.h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={{ width: inView ? '5rem' : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
        </div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="about-subtitle">Our Mission</h3>
            <p className="about-description">
              At Nova Script, we're dedicated to pushing the boundaries of what's possible with code. 
              Our mission is to create innovative software solutions that solve complex problems and 
              deliver exceptional value to our clients.
            </p>
            <p className="about-description">
              Founded in 2023, we've grown from a small team of passionate developers to a 
              full-service software company with expertise across web, mobile, and AI technologies. 
              We combine technical excellence with creative thinking to build digital products that stand out.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-card-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div 
              ref={cardRef}
              className="about-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div 
                className="about-card-inner"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transition: 'transform 0.1s ease'
                }}
              >
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="card-title">Our Core Values</h3>
                <ul className="values-list">
                  {valueItems.map((item, index) => (
                    <li key={index} className="value-item">
                      <div className="value-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="value-title">{item.title}</h4>
                        <p className="value-description">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;