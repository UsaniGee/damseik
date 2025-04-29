import { Box, Image, Text, useToken } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const clientNames = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744147578/3434_wqcjhd.jpg",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744171724/30642_asod8j.jpg",
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744147612/3555_xudfsf.jpg",
  },
];

const OurClientsCarousel = () => {
  const [spacing] = useToken("space", ["8"]);

  return (
    <Box overflow="hidden" py={14} mx={{md: 24, base: 5}} bg="white">
      <Text fontSize="2xl" fontWeight="bold" mb={10} px={6}>
        Our Clients
      </Text>

      <Box px={6}>
        <MotionBox
          display="inline-flex"
          gap={spacing}
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 100,
            repeatDelay: 0.1, 
          }}
        >
          {[...clientNames, ...clientNames].map((client, idx) => (
            <Box
            key={idx}
            minW="200px"
            h="100px"
            bg="gray.100"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            fontSize="xl"
            borderRadius="md"
            boxShadow="md"
            flexShrink={0}
             backgroundImage={`url(${client.image})`}
          >
             <Image src={client.image} alt={`Client ${idx}`} objectFit="contain" h="100%" />
          </Box>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default OurClientsCarousel;
