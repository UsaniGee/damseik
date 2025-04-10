import React from "react";
import PagesHero from "../../../components/HeroSection/Pageshero";

const AboutHero = () => {
  return (
    <PagesHero
    imageSrc={"https://res.cloudinary.com/dnu4lxiie/image/upload/v1744228724/58546_debiu9.jpg"}
      title="ABOUT US"
      subtitle="Your One Stop Shop for Pipeline Solutions"
      subtitle1="With over 20 years of experience in all aspects of pipeline services, we remain your preferred pipeline solution provider."
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "About Us", link: "/about" }
      ]}
    />
  );
};

export default AboutHero;
