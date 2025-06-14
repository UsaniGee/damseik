import React from "react";
import PagesHero from "../../../components/HeroSection/Pageshero";
import { useLocation } from "react-router-dom";

const ServicesHero = () => {
  const location = useLocation()

  const pageData = {
    "/services": {
      title: ` OUR SERVICES`,
      subtitle: "Services we provide",
      subtitle1: "Through our core management team’s experience and leadership, we have acquired over time the capabilities and capacity to provide quality and timely services to clients in a safe and consistent manner.",
      image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744231581/20797_rkfw8z.jpg"
      
    },
    "/services/equipment-leasing": {
      title: "OUR SERVICES",
      subtitle: "Equipment Leasing",
       image: ""
    },
    "/services/coating-and-repair-products": {
      title: ` OUR SERVICES`,
      subtitle: "Coating and Repair Products ",
       image: ""
    },
    "/services/process-instrumentation": {
      title: "Payment",
      subtitle:
        "Process Instrumentation",
       image: ""
    },
    "/services/quality-control-services": {
      title: ` OUR SERVICES`,
      subtitle:
        "Quality Control  Services",
      image: ""
    },
    "/services/pipeline-facility-production-maintenace": {
      title: ` OUR SERVICES`,
      subtitle:
        "Pipeline Facility Production Maintenace",
       image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744231581/20797_rkfw8z.jpg"
    },
    "/services/valve-services": {
      title: ` OUR SERVICES`,
      subtitle:
        "Valve Services",
       image: ""
    },
    "/services/marine-support-services": {
      title: ` OUR SERVICES`,
      subtitle:
        "Marine Support Services",
       image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744231581/20797_rkfw8z.jpg"
    },
    "/services/procurement": {
      title: "OUR SERVICES",
      subtitle:
        "Procurement",
       image: ""
    },
    "/services/well-service": {
      title: "OUR SERVICES",
      subtitle:
        "Well Services",
      image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744231581/20797_rkfw8z.jpg"
    },
  }


  let { title, subtitle, subtitle1, image } = pageData[location.pathname]

  return (
    <PagesHero
    imageSrc={image}
      title={title}
      subtitle={subtitle}
      subtitle1={subtitle1}
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Services", link: "/services" }
      ]}
    />
  );
};

export default ServicesHero;
