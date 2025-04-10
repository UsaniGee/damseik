import React from "react";
import PagesHero from "../../../components/HeroSection/Pageshero";

const CareersHero = () => {
  return (
    <PagesHero
    imageSrc={"https://res.cloudinary.com/dnu4lxiie/image/upload/v1744249612/59698_ioevej.jpg"}
      title="CAREERS"
      subtitle="Be a part of the team"
      subtitle1="Diversity is important to us and we provide a work environment that treats all employees with respect. Our diverse values and perspectives encourages individual growth."
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Careers", link: "/careers" }
      ]}
    />
  );
};

export default CareersHero;
