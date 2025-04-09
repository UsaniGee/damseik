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
    title: "Marine Support Services",
    subtitle: "Dam Seik Services Limited have the ability to supply you with any number of barges on request to enable you maintain a steady flow of operations.",
    // buttonText: "Explore", 
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744148635/19224_svfglc.jpg",
    title: "Valve Services",
    subtitle: "DAM SEIK SERVICES offers you the most up-to-date and advanced technical solutions for valve repair and production. It is our aim to offer unique products and support services.",
    // buttonText: "Learn More",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744147578/3434_wqcjhd.jpg",
    title: "Pipeline/ Pipeline Integrity",
    subtitle: "Ultrasonic inspection Long Range Ultrasonic Testing (LRUT) is one of the latest technologies in pipeline integrity inspection which is now widely accepted in the oil and gas industry because of its versatility, real time data accuracy and cost effectiveness.",
    // buttonText: "Explore", 
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
              <Box
                position="absolute"
                top={0}
                right={0}
                h="100%"
                w="100%"
                zIndex={1}
                pointerEvents="none"
              bg="radial-gradient(circle at right center, rgba(34, 197, 94, 0.35) 0%, rgba(34, 197, 94, 0.7) 30%, transparent 70%)"
/>

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
                zIndex={2}
              >
                <MotionBox variants={childVariants} mb={5}>
                  <Heading fontSize={{ base: "xl", md: "53px" }} color="white" textShadow="2px 2px #000000" w={{md: "500px"}} >
                    {slide.title}
                  </Heading>
                </MotionBox>

                <MotionBox variants={childVariants}>
                  <Text fontSize={{ base: "12px", md: "16px" }} mt={2} color="white" w={{md: "500px"}} textShadow="1px 1px #000000">
                    {slide.subtitle}
                  </Text>
                </MotionBox>
{/* 
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
                </MotionBox> */}
              </MotionBox>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSection;
