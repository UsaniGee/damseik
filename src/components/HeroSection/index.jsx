"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text, Button, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    video: "https://res.cloudinary.com/dnu4lxiie/video/upload/v1756036215/aPipe_azt6w2.mp4", 
    title: "Pipeline Integrity",
    subtitle:
      "We provide comprehensive pipeline services including installation, maintenance, and integrity management with cutting-edge technology.",
  },
  {
    video: "https://res.cloudinary.com/dnu4lxiie/video/upload/v1756034085/11996993_3840_2160_30fps_jq0opa.mp4",
    title: "Well Services",
    subtitle:
      "From drilling to well maintenance, we deliver reliable solutions to maximize productivity and ensure operational efficiency.",
  },
  {
    video: "https://res.cloudinary.com/dnu4lxiie/video/upload/v1756036202/aMarine_etslw2.mp4",
    title: "Marine Support Services",
    subtitle:
      "Providing seamless offshore logistics, vessel supply, and diving services to keep your projects running smoothly.",
  },
];

const HeroSection = () => {
  const MotionBox = chakra(motion.div);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <Box position="relative" w="100%" h="100vh" overflow="hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        speed={800}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box w="100%" h="100%" position="relative" overflow="hidden">
              <Box
                as="video"
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                objectFit="cover"
                w="100%"
                h="100%"
                sx={{
                  filter: "brightness(0.7) contrast(1.1) saturate(0.9)",
                  transition: "filter 0.3s ease",
                  "@media (max-width: 768px)": {
                    objectPosition: "center top", 
                  },
                  "@media (min-width: 769px)": {
                    objectPosition: "center", 
                  },
                }}
              />

              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-b, rgba(0, 20, 40, 0.7) 0%, rgba(26, 32, 44, 0.8) 50%, rgba(20, 25, 35, 0.9) 100%)"
                zIndex={1}
              />
              <Box
                position="absolute"
                inset={0}
                bg="rgba(0, 51, 102, 0.4)"
                zIndex={1}
              />

              <MotionBox
                key={index}
                display="flex"
                flexDir="column"
                alignItems="flex-start"
                justifyContent="center"
                position="absolute"
                inset="0"
                p={{ base: 6, md: 16 }}
                maxW={{ base: "100%", md: "600px" }}
                color="white"
                borderRadius="xl"
                bg={{ base: "transparent", md: "rgba(255, 255, 255, 0.05)" }}
                backdropFilter={{ base: "none", md: "blur(10px)" }}
                variants={containerVariants}
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                zIndex={2}
              >
                <MotionBox variants={childVariants} mb={2}>
                  <Text
                    fontSize={{ base: "0.75rem", md: "0.875rem" }}
                    fontWeight="700"
                    letterSpacing="0.1em"
                    textTransform="uppercase"
                    color="white"
                    fontFamily="'Poppins', sans-serif"
                    opacity={0.95}
                  >
                    Powering Oil, Gas & Marine Engineering Solutions
                  </Text>
                </MotionBox>

                <MotionBox variants={childVariants} mb={4}>
                  <Heading
                    fontSize={{ base: "2rem", md: "4rem" }}
                    fontWeight="800"
                    lineHeight="1.2"
                    fontFamily="'Poppins', sans-serif"
                    color="white"
                  >
                    {slide.title}
                  </Heading>
                </MotionBox>

                <MotionBox variants={childVariants} mb={6}>
                  <Text
                    fontSize={{ base: "1rem", md: "1.25rem" }}
                    lineHeight="1.6"
                    maxW="480px"
                    fontWeight="600"
                    color="white"
                    fontFamily="'Poppins', sans-serif"
                  >
                    {slide.subtitle}
                  </Text>
                </MotionBox>

                <MotionBox variants={childVariants}>
                  <Button
                    as={Link}
                    to="/services"
                    size={{ base: "md", md: "lg" }}
                    bg="#D10205"
                    color="white"
                    fontSize={{ base: "0.875rem", md: "1rem" }}
                    fontWeight="700"
                    fontFamily="'Poppins', sans-serif"
                    px={{ base: 6, md: 8 }}
                    py={{ base: 5, md: 6 }}
                    borderRadius="full"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.trackCTA) {
                        window.trackCTA('Explore Our Services', 'hero_section');
                      }
                    }}
                    _hover={{
                      bg: "#D10201",
                      transform: "translateY(-2px)",
                      boxShadow: "0 0 20px rgba(0, 51, 102, 0.6), 0 10px 25px rgba(0, 0, 0, 0.3)",
                    }}
                    transition="all 0.3s ease"
                    boxShadow="0 4px 15px rgba(0, 51, 102, 0.4)"
                  >
                    Explore Our Services
                  </Button>
                </MotionBox>
              </MotionBox>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSection;
