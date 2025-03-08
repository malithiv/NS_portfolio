import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import logo from '../assets/logo.png';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              Empoweing Dreams through <span className="text-accent">Code & Innovation</span> 
            </h1>
            <p className="hero-subtitle">
              We transform innovative ideas into powerful software solutions, 
              delivering exceptional digital experiences that drive business growth.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#portfolio" className="btn btn-outline">
                View Projects
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-image-container">
              <div className="hero-image-glow"></div>
              <img 
                src={logo} 
                alt="Nova Script Solutions" 
                className="hero-img"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;