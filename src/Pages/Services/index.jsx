import { Box, Grid, Heading, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from 'react'
import ServicesHero from './ServicesHero'
import { useNavigate } from "react-router-dom";


const MotionBox = motion(Box);

const contentItems = [
  {
    id: "pipeline-facility-production-maintenace",
    title: "Pipeline Facility Production/maintenace",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
  },
  {
    id: "marine-support-services",
    title: "Marine Support Services",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
  },
  {
    id: "equipment-leasing",
    title: "Equipment Leasing",   
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
  },
  {
    id: "coating-and-repair-products",
    title: "Coating and Repair Products(Advanced Mechanical Polymers)",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744147578/3434_wqcjhd.jpg",
  },
  {
    id: "process-instrumentation",
    title: "Process Instrumentation",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
  },
  {
    id: "quality-control-services",
    title: "Quality Control Services",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744147578/3434_wqcjhd.jpg",
  },
  { 
    id: "valve-services",
    title: "Valve Services",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744147578/3434_wqcjhd.jpg",
  },
  {
    id: "procurement",
    title: "Procurement Services",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744147578/3434_wqcjhd.jpg",
  },
];

const LearnMoreButton = ({ title, onClick }) => (
  <Button colorScheme="green" size="md" onClick={onClick}>
    {title}
  </Button>
);

const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <Box pt={{md: "82px", base: "110px"}} >
         <ServicesHero />
    <Box p={{md: 24, base: 10}} display={"grid"} justifyContent={"center"}>
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={10} >
      {contentItems.map((item, index) => (
        <MotionBox
          key={index}
          position="relative"
          overflow="hidden"
          w="100%"
          maxW="400px"
          borderRadius="md"
          boxShadow="md"
          role="group"
        >
          {/* Image */}
          <MotionBox
            as={Image}
            src={item.image}
            alt={item.title}
            w="100%"
            h="100%"
            objectFit="cover"
            transition="all 0.4s ease"
            _groupHover={{ height: "100%" }}
            // position="relative"
          />

          {/* Default Text Below Image */}
          <Box p={4} display={{ base: "flex", md: "flex" }} 
           position="absolute"
           top="0"
           left="0"
           w="100%"
           h="100%"
           color="white"
           bg="rgba(68, 163, 89, 0.4)"
           flexDir="column"
           justifyContent="center"
           alignItems="center"
           textAlign="center"
           transition="opacity 0.3s ease"
           _groupHover={{ opacity: 0 }}

          >
            <Heading fontSize="xl" mb={2}  >
              {item.title}
            </Heading>
            <Text>{item.description}</Text>
          </Box>

          {/* Overlay on Hover */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            p={5}
            color="white"
            bg="rgba(0, 0, 0, 0.4)"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            opacity="0"
            textAlign="center"
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 1 }}
            gap={5}
          >
            <Heading fontSize="xl" mb={2}>
              {item.title}
            </Heading>
    
            <LearnMoreButton title="Explore more" onClick={() => handleNavigate(item.id)}/>
          </Box>
        </MotionBox>
      ))}
    </Grid>
         </Box>
    </Box>
      
  )
}

export default Services
