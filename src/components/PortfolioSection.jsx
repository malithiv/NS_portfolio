import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/PortfolioSection.css";

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const projects = [
    {
      title: "One Click App",
      description:
        "A smart and seamless grocery shopping app.",
      link: "https://play.google.com/store/apps/details?id=com.oneclick.oneclickv2",
    },
    {
      title: "PAYable App",
      description:
        "A seamless, secure mobile payment solution with fast transactions and wide card support.",
      link: "https://apps.apple.com/us/app/payable/id1122916286",
    },
    {
      title: "Wes Muhuna - Sinhala Face App",
      description:
        "A fun Sinhala face app that analyzes your photo and brings laughter with surprising insights! ",
      link: "https://play.google.com/store/apps/details?id=com.kazcore.wesmuhuna",
    },
    {
      title: "කතුවරිය - Sinhala Novels",
      description:
        "A Sinhala digital platform for reading and enjoying novels.",
      link: "https://play.google.com/store/apps/details?id=com.global.dramaapp",
    },
    {
      title: "Niwandakimu",
      description:
        "A platform for spiritual peace and self-liberation through insightful sermons. ",
      link: "https://apps.apple.com/zw/app/niwandakimu/id1523343773",
    },
    {
      title: "Leo Chat App",
      description:
        "A seamless and secure messaging app designed for real-time communication.",
      link: "#",
    },
    {
      title: "Miyomi App",
      description:
        " A mental wellness app focused on mindfulness, relaxation, and self-care.",
      link: "#",
    },
    {
      title: "TeaTune AI",
      description:
        "An AI-powered system for tea taste testing and flavor analysis.",
      link: "#",
    },

    
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
            animate={{ width: inView ? "5rem" : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore our portfolio of innovative software solutions across
            different industries and technologies.
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
                y: inView ? 0 : 30,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
              }}
            >
              <div className="project-content">
                <motion.h3
                  className="project-title"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="project-description"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.description}
                </motion.p>
                <motion.a
                  href={project.link}
                  className="btn btn-outline btn-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  View Project
                </motion.a>
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
