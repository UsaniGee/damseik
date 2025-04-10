import React from "react";
import PagesHero from "../../../components/HeroSection/Pageshero";

const ProjectsHero = () => {
  return (
    <PagesHero
    imageSrc={"https://res.cloudinary.com/dnu4lxiie/image/upload/v1744250053/2149057694_x0ohbp.jpg"}
      title="PROJECTS"
      subtitle="Featured Projects"
      subtitle1="We combine strong local ties and global expertise to provide close support for your works."
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Projects", link: "/projects" }
      ]}
    />
  );
};

export default ProjectsHero;
