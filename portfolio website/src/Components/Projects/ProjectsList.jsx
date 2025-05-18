import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsList.css';

const ProjectsList = () => {
  const mywork_data = [
    { id: 1, name: "Schedule Website", description: "This Python + Flask Website was made for professors at Occidental College to allow for cross-departmental course scheduling." },
    { id: 2, name: "E-Plant Shopping Frontend Website", description: "This is a website using JS + React for an online shop for the IBM Developing Front-End Apps with React Course on Coursera. " },
    { id: 3, name: "Arduino Flappy-Bird-Like Game", description: "This is Arduino Flappy-Bird game using a VL53L0X time-of-flight sensor as control input." },
    {id: 4, name: "Database Project Website", description: "This is website made using Python + Flask in order to allow for Occidental college students to upload information about their project(s)."},
    {id: 5, name: "Portfolio Website", description: "The website you are currently on. This uses JS + React."},
    {id: 6, name: "ML NBA Game Prediction Website", description: "This Python + Flask website grabs information about team's averages in order to determine who is likely to win in  a head to head matchup using Machine Learning."},


  ];

  return (
    <div className="projects-list">
      <h1>All Projects</h1>
      <div>
        {mywork_data.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <Link to={`/projects/${project.id}`} className="view-btn-link">
              <button className="view-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="back-to-home-list">
        <Link to="/" className="back-btn-link">
          <button className="back-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsList;