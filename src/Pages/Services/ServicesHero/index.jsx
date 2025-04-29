import React from "react";
import PagesHero from "../../../components/HeroSection/Pageshero";
import { useLocation } from "react-router-dom";

const ServicesHero = () => {
  const location = useLocation()

  const pageData = {
    "/services": {
      title: ` OUR SERVICES`,
      subtitle: "Services we provide",
      subtitle1: "Through our core management team’s experience and leadership, we have acquired over time the capabilities and capacity to provide quality and timely services to clients in a safe and consistent manner."
    },
    "/services/equipment-leasing": {
      title: "OUR SERVICES",
      subtitle: "Equipment Leasing",
      // subtitle1: "lorem10"
    },
    "/services/coating-and-repair-products": {
      title: ` OUR SERVICES`,
      subtitle: "Coating and Repair Products ",
      // subtitle1: "lorem10"
    },
    "/services/process-instrumentation": {
      title: "Payment",
      subtitle:
        "Process Instrumentation",
      // subtitle1: "lorem10"
    },
    "/services/quality-control-services": {
      title: ` OUR SERVICES`,
      subtitle:
        "Quality Control  Services",
      // subtitle1: "lorem10"
    },
    "/services/pipeline-facility-production-maintenace": {
      title: ` OUR SERVICES`,
      subtitle:
        "Pipeline Facility Production Maintenace",
      // subtitle1: "lorem10"
    },
    "/services/valve-services": {
      title: ` OUR SERVICES`,
      subtitle:
        "Valve Services",
      // subtitle1: "lorem10"
    },
    "/services/marine-support-services": {
      title: ` OUR SERVICES`,
      subtitle:
        "Marine Support Services",
      // subtitle1: "lorem10"
    },
    "/services/procurement": {
      title: "OUR SERVICES",
      subtitle:
        "Procurement",
      // subtitle1: "lorem10"
    },
  }


  let { title, subtitle, subtitle1 } = pageData[location.pathname]

  return (
    <PagesHero
    imageSrc={"https://res.cloudinary.com/dnu4lxiie/image/upload/v1744231581/20797_rkfw8z.jpg"}
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
