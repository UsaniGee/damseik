import { Box, Grid, Heading, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from 'react'
import ServicesHero from './ServicesHero'
import { useNavigate } from "react-router-dom";


const MotionBox = motion(Box);

const ourCoreServices = [
  {
    id: "pipeline-facility-production-maintenace",
    title: "Pipeline Maintenance",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
  },
  {
    id: "marine-support-services",
    title: "Marine Engineering & Vessel Manning",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
  },
  {
    id: "well-service",
    title: "Well Services",   
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
  },
  {
    id: "production-chemical-services",
    title: "Production Chemical Services ",   
    // image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
    // icon: <PiPipeWrenchFill />
    
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
    <Box  pb={{md: "50px", base: "20px"}} >
 <Text color={"#989898"}>
            OUR CORE SERVICES
        </Text>
        </Box>
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={10} >
      {ourCoreServices.map((item, index) => (
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
          />

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
