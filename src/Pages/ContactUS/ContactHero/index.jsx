import React from "react";
import PagesHero from "../../../components/HeroSection/Pageshero";

const ContactHero = () => {
  return (
    <PagesHero
    imageSrc={"https://res.cloudinary.com/dnu4lxiie/image/upload/v1744248934/253_ikc2nl.jpg"}
      title="CONTACT US"
      subtitle="Get in touch"
      subtitle1="We pride ourself on meeting with our clients to help solve questions and challenges."
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Contact", link: "/contact" }
      ]}
    />
  );
};

export default ContactHero;
