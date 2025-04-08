import React, { useState } from "react";
import { motion } from "framer-motion";
import { chakra, Box, Button, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
    title: "Marine Services",
    subtitle: "Learn. Grow. Lead.",
    buttonText: "Explore", 
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744148635/19224_svfglc.jpg",
    title: "Welcome to Damseik",
    subtitle: "Leading Business School",
    buttonText: "Learn More",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744147578/3434_wqcjhd.jpg",
    title: "Welcome to RSUBS",
    subtitle: "Learn. Grow. Lead.",
    buttonText: "Explore", 
  },
];

const HeroSection = () => {
  const MotionBox = chakra(motion.div);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box position="relative" w="100%" h={{ base: "60vh", md: "100vh" }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              backgroundImage={`url(${slide.image})`}
              backgroundSize="cover"
              backgroundPosition="center"
              w="100%"
              h="100%"
              position="relative"
            >
              <MotionBox
                key={activeIndex === index ? `slide-${index}` : undefined}
                display="flex"
                flexDir="column"
                position="absolute"
                top="50%"
                left={{ base: "20%", md: "10%" }}
                transform="translateY(-50%)"
                // bg="rgba(255, 255, 255, 0.7)"
                p={6}
                borderRadius="md"
                variants={containerVariants}
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
              >
                <MotionBox variants={childVariants}>
                  <Heading fontSize={{ base: "xl", md: "53px" }} color="white" textShadow="2px 2px #000000">
                    {slide.title}
                  </Heading>
                </MotionBox>

                <MotionBox variants={childVariants}>
                  <Text fontSize={{ base: "16px", md: "2xl" }} mt={2} color="white">
                    {slide.subtitle}
                  </Text>
                </MotionBox>

                <MotionBox variants={childVariants}>
                  <Link to="/about">
                    <Button
                      mt={4}
                      colorScheme="blue"
                      size="lg"
                      _hover={{ bg: "blue.700" }}
                    >
                      {slide.buttonText}
                    </Button>
                  </Link>
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
