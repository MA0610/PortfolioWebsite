import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.css";
import mywork_info from "../../assets/mywork_data";
import ScheduleWebPic1 from "../../assets/project1_img1.png";
import ScheduleWebPic2 from "../../assets/project1_img2.png";
import PlantShopPic1 from "../../assets/project2_img1.png";
import ArduinoFlappyPic1 from "../../assets/project3_img1.png";
import ProjectWebsitePic1 from "../../assets/project4_img1.png";
import ProjectWebsitePic2 from "../../assets/project4_img2.png";
import MLNBAPredictionPic from "../../assets/project6_img1.png"


const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const mywork_data = [
      {
        id: 1,
        name: "Schedule Website",
        description:
          "This Python + Flask Website was made for professors at Occidental College. This website was asked for by the Biochemistry department\
           so they could communicate across their department and others about what classes should be held at certain times.\
           They wanted to make it so that courses required for the major were easier to take in a semester instead of having to force students to\
           overload their schedule or stagger those classes over a couple of semesters. This website was made using user feedback from the Biochemistry\
           department to meet their wants and needs. This website includes the ability for professors to make courses and put them into the schedule\
           and submit them into the proposed schedule. They they can view the schedule and mark classes at certain times so that professors can\
           reach out and discuss how to best alter the schedule before finalizing it with the department.",
        images: [ScheduleWebPic1,ScheduleWebPic2],
        githubLink: "https://github.com/MA0610/SchedulingWebsite",
      },
      {
        id: 2,
        name: "E-Plant Shopping Frontend Website",
        description:
          "This is a website using JS + React for an online shop for the IBM Developing Front-End Apps with React Course on Coursera.\
          This website front-end has a dynamic shopping cart and stylization in order to make the website look cleaner.",
        images: [PlantShopPic1],
        githubLink: "https://github.com/MA0610/e-plantShopping",
      },
      {
        id: 3,
        name: "Arduino Flappy-Bird-Like Game",
        description:
          "This is Arduino Flappy-Bird game using a VL53L0X time-of-flight sensor as control input. The game runs off an Arduino Uno and an LCD screen display.\
          The game breaks down the limited space of the LCD screen display by coding the limited 2x16 character cells as byte arrays. This allows us to have more space\
          for the pipe obstacles and the bird to have more variance in its positioning and movement.",
        images: [ArduinoFlappyPic1],
        githubLink: "https://github.com/Jchun2/Flappybird",
      },
      {
        id: 4,
        name: "Database Project Website",
        description:
          "This is website made using Python + Flask in order to allow for Occidental college students to upload information about their project.\
          This project includes Flask-login user authentication and stores project information through a SQLAlchemy database. Users are able to filter through types of\
          uploaded projects through categories and are able to bookmark them to save them for later.",
        images: [ProjectWebsitePic1,ProjectWebsitePic2],
        githubLink: "https://github.com/MA0610/DatabaseProjectWebsite"
      },
      {
        id: 5,
        name: "Portfolio Website",
        description:
          "This is the website you are currently on, this uses JS + React. I followed a tutorial from GreatStack and added functionality for\
          resume download button and also made these pages so that users can look at all of my projects and have more in-depth explanations\
          about them. This also links back to the github link for each project so that you could look at my work!",
        images: [],
        githubLink: "https://github.com/MA0610/PortfolioWebsite"
      },
      {
        id: 6,
        name: "ML NBA Prediction Website",
        description:
          "This is website made using Python + Flask meant to try and introduce myself to Machine Learning by using a tutorial from dataquest.\
          This uses averages during a selected season for each team in order to determine who is more likely to win in a head to head matchup.\
          The tuning isn't fully up there since I didn't incorporate defensive statistics or specific players being injured at certain times.\
          This also uses regular season data which means that if a team made a major trade at the deadline the data might by skewed.",
        images: [MLNBAPredictionPic],
        githubLink: "https://github.com/MA0610/DatabaseProjectWebsite"
      },


    ];

    const selectedProject = mywork_data.find(
      (project) => project.id === parseInt(id)
    );
    setProject(selectedProject);
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <div className="project-images">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project Image ${index + 1}`}
            className="project-image"
          />
        ))}
      </div>

      {project.githubLink && (
        <div className="github-button">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View on GitHub</button>
          </a>
        </div>
      )}

      <div className="back-to-home">
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
