import React from "react";
import PagesHero from "../../../components/HeroSection/Pageshero";

const MediaHero = () => {
  return (
    <PagesHero
    imageSrc={"https://res.cloudinary.com/dnu4lxiie/image/upload/v1744251092/12709_lwy0ae.jpg"}
      title="MEDIA"
      subtitle="Media"
      subtitle1=" Images from previous jobs done from Dam Seik Limited."
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Media", link: "/media" }
      ]}
      ctaText="View Our Projects"
      ctaLink="/projects"
    />
  );
};

export default MediaHero;
