"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text, chakra } from "@chakra-ui/react";
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box position="relative" w="100%" h={{ base: "70vh", md: "100vh" }} overflow="hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 6000 }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box w="100%" h="100%" position="relative" overflow="hidden">
              {/* Video Background */}
              <Box
                as="video"
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                objectFit="cover"
                w="100%"
                h="100%"
                sx={{
                  "@media (max-width: 768px)": {
                    objectPosition: "center top", // Keep focus on top for mobile
                  },
                  "@media (min-width: 769px)": {
                    objectPosition: "center", // Normal desktop centering
                  },
                }}
              />

              {/* Glassmorphism Overlay */}
              <Box
                position="absolute"
                inset={0}
                bg="rgba(0, 0, 0, 0.4)"
                zIndex={1}
              />

              {/* Text Content */}
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
                bg="rgba(255, 255, 255, 0.05)"
                backdropFilter="blur(10px)"
                variants={containerVariants}
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                zIndex={2}
              >
                <MotionBox variants={childVariants} mb={4}>
                  <Heading
                    fontSize={{ base: "2rem", md: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.2"
                    className="font-sora"
                  >
                    {slide.title}
                  </Heading>
                </MotionBox>

                <MotionBox variants={childVariants}>
                  <Text
                    fontSize={{ base: "1rem", md: "1.25rem" }}
                    lineHeight="1.6"
                    maxW="480px"
                  >
                    {slide.subtitle}
                  </Text>
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
