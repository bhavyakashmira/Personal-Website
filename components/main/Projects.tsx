import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const firstlink = "https://github.com/bhavyakashmira/netflix_clone"
  return (

    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 md:px-10 lg:px-20">
        <ProjectCard
          src="/NetflixClone.png"
          title="Netflix Clone"
          description="Developed a Netflix clone using React, Redux Toolkit, Firebase, Styled Components, Node.js, and Express. The application utilizes the TMDB API for fetching movie data."
          sou={firstlink}
        />

        <ProjectCard
          src="/TextUtil.png"
          title="NEWSFast website"
          description="Created NewsFast using React, integrated NewsAPI. Added features for news categorization, latest updates, and location-based selections. Utilized Bootstrap for enhanced design."
          sou="https://github.com/bhavyakashmira/NewsDashboard"
        />
        <ProjectCard
          src="/TextUtil.png"
          title="TextUtil Website"
          description="Built a React text utility website with diverse text manipulation options, simplifying text-related tasks and enhancing user experience."
          sou="https://github.com/bhavyakashmira/TextUtil"
        />
      </div>
    </div>


  );
};

export default Projects;
