import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Customer-Churn",
      description: "Predicted customer churn using ML to help retain customers.",
      link: "https://github.com/VARSHA-442/Customer-Churn"
    },
    {
      title: "Stock-Project",
      description: "Built a stock info website using HTML, CSS, and JavaScript.",
      link: "https://github.com/VARSHA-442/Stock-Project"
    },
    {
      title: "Data-Visualization",
      description: "Visualized data using Python.",
      link: "https://github.com/VARSHA-442/Data-Visualization"
    }
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__container">
        {projects.map((project, index) => (
          <div className="portfolio__item" key={index}>
            <h3 className="portfolio__title">{project.title}</h3>
            <p className="portfolio__desc">{project.description}</p>
            <a href={project.link} className="portfolio__button" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
