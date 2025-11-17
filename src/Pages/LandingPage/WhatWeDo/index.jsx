import {
  Box,
  Grid,
  Link,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { PiPipeWrenchFill } from "react-icons/pi";
import { FaOilWell } from "react-icons/fa6";
import { GiAnchor } from "react-icons/gi";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion.create(Box);

const WhatWeDo = () => {
  const Services = [
    {
      id: "services/pipeline-facility-production-maintenace",
      title: "Pipeline Maintenance",
      icon: PiPipeWrenchFill,
      gradient: "linear(to-br, rgba(209,2,5,0.9), rgba(209,2,5,0.7))",
    },
    {
      id: "services/well-service",
      title: "Well Services",
      icon: FaOilWell,
      gradient: "linear(to-br, rgba(94,165,47,0.9), rgba(94,165,47,0.7))",
    },
    {
      id: "services/marine-support-services",
      title: "Marine Engineering & Vessel Manning",
      icon: GiAnchor,
      gradient: "linear(to-br, rgba(209,2,5,0.9), rgba(209,2,5,0.7))",
    },
  ];

  return (
    <Box
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bg="linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)"
    >
      <VStack spacing={6} textAlign="center" mb={12}>
        <Text
          fontSize={{ base: "14px", md: "18px" }}
          fontWeight="bold"
          color="#D10205"
          letterSpacing="wide"
        >
          Our Core Services
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          maxW="600px"
        >
          Delivering Exceptional Solutions for the Oil & Gas Industry
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        gap={8}
      >
        {Services.map((service, index) => (
          <Link
            key={index}
            href={service.id}
            _hover={{ textDecoration: "none" }}
          >
            <MotionBox
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              bg="rgba(255, 255, 255, 0.8)"
              backdropFilter="blur(12px)"
              borderRadius="2xl"
              p={8}
              textAlign="center"
              shadow="lg"
              border="1px solid rgba(0,0,0,0.05)"
            >
              <Box
                w="80px"
                h="80px"
                mx="auto"
                mb={4}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgGradient={service.gradient}
                color="white"
                fontSize="36px"
                shadow="md"
              >
                <Icon as={service.icon} boxSize={8} />
              </Box>
              <Text
                fontSize="lg"
                fontWeight="600"
                color="gray.800"
                _groupHover={{ color: "#D10205" }}
              >
                {service.title}
              </Text>
            </MotionBox>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatWeDo;
