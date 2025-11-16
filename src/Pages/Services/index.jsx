import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from 'react';
import ServicesHero from './ServicesHero';
import { useNavigate } from "react-router-dom";
import LearnMoreButton from '../../components/LearnMoreBtn/index';
import SEO from '../../components/SEO';

const MotionBox = motion(Box);

const ourCoreServices = [
  {
    id: "pipeline-facility-production-maintenace",
    title: "Pipeline Maintenance",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1752251634/2142_ozfhbr.jpg",
  },
  {
    id: "marine-support-services",
    title: "Marine Engineering & Vessel Manning",
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1752251664/ship-drydock_m7izeg.jpg",
  },
  {
    id: "well-service",
    title: "Well Services",   
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
  },
  {
    id: "production-chemical-services",
    title: "Production Chemical Services",   
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1752251636/305_w61sdu.jpg",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <Box>
      <SEO 
        title="Our Services"
        description="Comprehensive oil & gas services including pipeline maintenance, well services, marine engineering, production chemical services, and more. Quality solutions for the energy industry."
        keywords="oil and gas services, pipeline maintenance, well services, marine engineering, production chemicals, equipment leasing, valve services"
      />
      <ServicesHero />
      <Box p={{ md: "50px", base: 10 }} display="grid" justifyContent="center">
        <Box pb={{ md: "50px", base: "20px" }}>
          <Text color="#989898" textAlign="center" fontSize={{ base: "18px", md: "20px" }} letterSpacing="1px">
            OUR CORE SERVICES
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="32px">
          {ourCoreServices.map((item, index) => (
            <MotionBox
              key={index}
              position="relative"
              w="100%"
              h="280px"
              maxW="400px"
              borderRadius="2xl"
              overflow="hidden"
              cursor="pointer"
              role="group"
              whileHover={{ scale: 1.03, y: -5 }}
              transition="0.3s ease"
              boxShadow="0 8px 24px rgba(0, 0, 0, 0.1)"
            >
              {/* Image with default dim */}
              <Image
                src={item.image}
                alt={`${item.title} service by Dam Seik Services`}
                w="100%"
                h="100%"
                objectFit="cover"
                filter="brightness(0.7)"
                transition="all 0.4s ease"
                _groupHover={{ filter: "brightness(0.5)" }}
                loading="lazy"
              />

              {/* Always Visible Title Layer */}
              <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                pointerEvents="none"
              >
                <Heading
                  fontSize="xl"
                  color="white"
                  fontWeight="600"
                  textAlign="center"
                  px={3}
                  pointerEvents="none"
                >
                  {item.title}
                </Heading>
              </Box>

              {/* Mobile: Show button always */}
              <Box
                position="absolute"
                bottom="10px"
                left="50%"
                transform="translateX(-50%)"
                display={{ base: "block", lg: "none" }}
              >
                <LearnMoreButton title="Explore More" onClick={() => handleNavigate(item.id)} />
              </Box>

              {/* Desktop: Glassy Hover Overlay */}
              <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                p={6}
                display={{ base: "none", lg: "flex" }}
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                color="white"
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(12px)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                borderRadius="2xl"
                opacity="0"
                transition="opacity 0.3s ease"
                _groupHover={{ opacity: 1 }}
              >
                <Heading fontSize="xl" mb={2} fontWeight="600">
                  {item.title}
                </Heading>
                <Box mt={4}>
                  <LearnMoreButton title="Explore More" onClick={() => handleNavigate(item.id)} />
                </Box>
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
