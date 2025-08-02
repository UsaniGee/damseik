import React from "react";
import PagesHero from "../../../components/HeroSection/Pageshero";
import { useLocation } from "react-router-dom";



const ProjectsHero = () => {

  const location = useLocation()

const projectsHero = {
"/projects": {
  image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744250053/2149057694_x0ohbp.jpg",
  title: "PROJECTS",
  subtitle: "Featured Projects",
  subtitle1: "We combine strong local ties and global expertise to provide close support for your works."

} ,
"/projects/water-re-injection-project-umusadege-1-kwale-delta-state": {
  image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_mkn9vp.jpg",
  title: "PROJECTS",
  subtitle:  "Water Re-Injection Project – Umusadege 1, Kwale, Delta State",
} ,
"/projects/well-intervention-rivers-state": {
  image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1746438215/Coil_tubbing_drweo8.jpg",
  title: "PROJECTS",
  subtitle:  "UMU15 Well Intervention – Rivers State",
} ,
"/projects/high-Pressure-pumping-support-for-coil-tubing-operation-rivers-state": {
  image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1746446912/What-is-Coiled-Tubing_yetqt5.webp",
  title: "PROJECTS",
  subtitle:  "High-Pressure Pumping Support for Coil Tubing Operation – Ubima, Rivers State",
} ,
"/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp": {
  image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_mkn9vp.jpg",
  title: "PROJECTS",
  subtitle:  "Nitrogen Lift Operation – CAWC Well 45T, Rivers State Swamp",
} ,
}



  let { title, subtitle, subtitle1, image } = projectsHero[location.pathname]
  return (
    <PagesHero
    imageSrc={image}
      title={title}
      // subtitle={subtitle}
      // subtitle1={subtitle1}
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Projects", link: "/projects" }
      ]}
    />
  );
};

export default ProjectsHero;
