import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NetflixClone.png"
          title="Netflix Clone"
          description="Developed a Netflix clone using React, Redux Toolkit, Firebase, Styled Components, Node.js, and Express. The application utilizes the TMDB API for fetching movie data."
          sou="https://github.com/bhavyakashmira/netflix_clone"
        />
        <ProjectCard
          src="/TextUtil.png"
          title="NEWSFast website"
          description="Created NewsFast using React, integrated NewsAPI. Added features for news categorization, latest updates, and location-based selections. Utilized Bootstrap for enhanced design."
          sou="https://github.com/bhavyakashmira/NewsDashboard"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="TextUtil Website"
          description="Built a React text utility website with diverse text manipulation options, simplifying text-related tasks and enhancing user experience."
          sou="https://github.com/bhavyakashmira/TextUtil"
        />
      </div>
    </div>
  );
};

export default Projects;
