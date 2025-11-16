import {
  Box,
  Grid,
  Image,
  Link as ChakraLink,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import LearnMoreButton from "../../../components/LearnMoreBtn";

const WhoAreWe = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)"
      py={{ base: 12, md: 20, lg: 24 }}
      px={{ base: 6, md: 10, lg: 20 }}
      position="relative"
      overflow="hidden"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        alignItems="center"
        gap={{ base: 10, lg: 16 }}
      >
        {/* Text Content */}
        <VStack align="start" spacing={6} zIndex={2}>
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="bold"
            color="#D10205"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            About Us
          </Text>

          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            lineHeight="1.2"
            maxW="90%"
          >
            Over 36 Years of{" "}
            <Box as="span" bgGradient="linear(to-r, #D10205, #A60000)" bgClip="text">
              Excellence in Oil & Gas Services
            </Box>
          </Heading>

          <Text fontSize={{ base: "16px", md: "18px" }} color="gray.700" maxW="90%">
            Dam Seik Services Limited is an indigenous oil and gas servicing company
            in Nigeria, delivering innovative and cost-effective solutions for over
            three decades. Our dedicated administrative, sales, and technical teams
            are equipped to meet the evolving needs of our clients with precision
            and professionalism.
          </Text>

          <ChakraLink as={Link} to="/about" _hover={{ textDecoration: "none" }}>
            <LearnMoreButton />
          </ChakraLink>
        </VStack>

        {/* Image with Overlay */}
        <Box position="relative" w="full" h="full" borderRadius="2xl" overflow="hidden">
          <Image
            src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1744171724/30642_asod8j.jpg"
            alt="About Dam Seik Services - Oil and gas engineering team"
            objectFit="cover"
            w="full"
            h={{ base: "250px", md: "100%" }}
            borderRadius="2xl"
            loading="lazy"
          />

          {/* Floating Card */}
          <Box
            position="absolute"
            bottom={6}
            left={6}
            bg="rgba(255,255,255,0.8)"
            backdropFilter="blur(8px)"
            p={4}
            borderRadius="lg"
            boxShadow="lg"
            maxW="80%"
          >
            <Text fontSize="sm" color="gray.600">
              Serving the oil & gas sector with trust and innovation since 1989.
            </Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default WhoAreWe;
