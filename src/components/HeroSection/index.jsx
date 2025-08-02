import React, { useState } from "react";
import { motion } from "framer-motion";
import { chakra, Box, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LearnMoreButton from "../LearnMoreBtn";


const slides = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1746091329/IMG_3031_lflfbg.jpg",
    title: "Pipeline/ Pipeline Integrity",
    subtitle: "We provide comprehensive pipeline services including installation, maintenance, and integrity management. Using advanced technologies like Long Range Ultrasonic Testing (LRUT), we ensure your pipeline systems operate safely and efficiently.",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
    title: "Well Services",
    subtitle: "Our well services encompass drilling support, completion operations, workover services, and well maintenance. We deliver reliable solutions to maximize your well productivity and operational efficiency.",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1746091329/IMG_2835_rjlteg.jpg",
    title: "Marine Support Services",
    subtitle: "We provide comprehensive marine support services for offshore operations, including vessel supply, equipment transport, diving services, and specialized marine logistics to keep your projects running smoothly.",
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
              bg="rgba(000, 000, 000, 0.5)"
/>

              <MotionBox
                key={activeIndex === index ? `slide-${index}` : undefined}
                display="flex"
                flexDir="column"
                position="absolute"
                top="50%"
                left={{ base: "auto", md: "" }}
                transform="translateY(-50%)"
                p={{md: "84px", base: 4}}
                borderRadius="md"
                variants={containerVariants}
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                zIndex={2}
              >
                <MotionBox variants={childVariants} mb={5}>
                  <Heading fontSize={{ base: "40px", md: "4em" }} color="white" textShadow="2px 2px #000000" w={{md: ""}} className="font-sora" >
                    {slide.title}
                  </Heading>
                </MotionBox>

                <MotionBox variants={childVariants}>
                  <Text fontSize={{ base: "16px", md: "20px" }} mt={2} color="white" w={{md: "500px", base: "auto"}} textShadow="1px 1px #000000">
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
