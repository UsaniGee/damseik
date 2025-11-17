import {
  Box,
  Grid,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import LearnMoreButton from "../../../components/LearnMoreBtn";

export const projects = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745947383/Um15_wrriqn.jpg",
    title: "UMU15 Well Intervention – Rivers State",
    subTitle:
      "Dam Seik Services Ltd recently supported a successful well intervention and coil tubing operation at the UMU15 field in Rivers State. The scope of work included a zone change using H₂O sealant, multi-stage flow rate testing, and B.O.P and stack-up pressure tests.",
    id: "/projects/well-intervention-rivers-state",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1746446912/What-is-Coiled-Tubing_yetqt5.webp",
    title:
      "High-Pressure Pumping Support for Coil Tubing Operation – Ubima, Rivers State",
    subTitle:
      "Dam Seik Services Ltd successfully executed high-pressure pumping operations in Ubima, a key onshore oil-producing community in Rivers State. The project aimed to achieve a target well depth of 9,615 feet using coil tubing techniques, addressing challenges posed by downhole obstructions such as scale and mud accumulation.",
    id: "/projects/high-Pressure-pumping-support-for-coil-tubing-operation-rivers-state",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1752248671/IMG_0537_hbtoel.jpg",
    title: "Nitrogen Lift Operation – CAWC Well 45T, Rivers State Swamp",
    subTitle:
      "Dam Seik Services Ltd recently executed a nitrogen lift operation at CAWC Well 45T, located in the swamp terrain of Rivers State. The objective was to assist in unloading the well by displacing heavy fluid columns and enabling easier flowback, following a coil tubing intervention.",
    id: "/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1746453400/WhatsApp_Image_2025-05-05_at_13.29.01_q5urwx.jpg",
    title: "Water Re-Injection Project – Umusadege 1, Kwale, Delta State",
    subTitle:
      "Dam Seik Services Ltd successfully executed a high-volume water re-injection project for Midwestern Oil & Gas at the Umusadege 1 wellsite in Kwale, Delta State. The operation was designed to support reservoir pressure maintenance and enhance oil recovery through sustained water re-injection.",
    id: "/projects/water-re-injection-project-umusadege-1-kwale-delta-state",
  },
];

const MotionBox = motion.create(Box);

const OurRecentProjects = () => {
  return (
    <Box
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bg="linear-gradient(135deg, #f7f7f7 0%, #ffffff 100%)"
    >
      <VStack spacing={4} textAlign="center" mb={12}>
        <Text fontSize={{ base: "16px", md: "20px" }} color="#5EA52F">
          Recent Projects
        </Text>
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          maxW="600px"
        >
          Transforming Oil & Gas Operations Across Nigeria
        </Heading>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={10}
      >
        {projects.slice(0, 3).map((item, index) => (
          <MotionBox
            key={index}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 180, damping: 15 }}
            bg="white"
            shadow="md"
            borderRadius="xl"
            overflow="hidden"
            display="flex"
            flexDirection="column"
          >
            <Box position="relative" h="220px" overflow="hidden">
              <Image
                src={item.image}
                alt={item.title}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.5s ease"
                _hover={{ transform: "scale(1.1)" }}
                loading="lazy"
              />
            </Box>

            <Box p={6} display="flex" flexDirection="column" flex="1">
              <Heading fontSize="lg" mb={3} color="gray.800">
                {item.title}
              </Heading>
              <Text fontSize="sm" color="gray.600" flex="1">
                {item.subTitle.length > 120
                  ? item.subTitle.slice(0, 120) + "..."
                  : item.subTitle}
              </Text>
              <ChakraLink as={Link} to={item.id} mt={4} _hover={{ textDecoration: "none" }}>
                <LearnMoreButton title="Read more" />
              </ChakraLink>
            </Box>
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
};

export default OurRecentProjects;
