import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/BlogSection.css';

const BlogSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const blogPosts = [
    {
      image: "src/assets/blog1.png",
      date: "March 5, 2025",
      author: "Tharindu Nipun",
      title: "The Future of AI in Software Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we build and maintain software applications.",
      link: "#"
    },
    {
      image: "src/assets/blog2.png",
      date: "February 22, 2025",
      author: "Malithi Imasha",
      title: "Building Scalable Web Applications with React and Vite",
      excerpt: "Learn the best practices for creating high-performance web applications using modern frontend technologies.",
      link: "#"
    },
    {
      image: "src/assets/blog3.png",
      date: "February 10, 2025",
      author: "Mayura Lakshan",
      title: "Securing Your Cloud Infrastructure: Essential Strategies",
      excerpt: "Discover effective approaches to protect your cloud-based applications and data from security threats.",
      link: "#"
    }
  ];
  
  return (
    <section id="blog" className="blog-section" ref={ref}>
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
            Latest from our <span className="text-accent">Blog</span>
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
            Stay updated with our latest articles, tutorials, and insights on software development and technology trends.
          </motion.p>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index}
              className="blog-card"
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
              <div className="blog-image-container">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-image"
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-author">By {post.author}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  className="blog-read-more"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="blog-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#" className="btn btn-outline">
            View All Articles
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogSection;