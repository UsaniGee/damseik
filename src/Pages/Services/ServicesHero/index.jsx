import React from "react";
import PagesHero from "../../../components/HeroSection/Pageshero";

const ServicesHero = () => {
  return (
    <PagesHero
    imageSrc={"https://res.cloudinary.com/dnu4lxiie/image/upload/v1744231581/20797_rkfw8z.jpg"}
      title="OUR SERVICES"
      subtitle="Services we provide"
      subtitle1="Through our core management team’s experience and leadership, we have acquired over time the capabilities and capacity to provide quality and timely services to clients in a safe and consistent manner."
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Services", link: "/services" }
      ]}
    />
  );
};

export default ServicesHero;
