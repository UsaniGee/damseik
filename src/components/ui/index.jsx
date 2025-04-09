import { Box, Text, useToken } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const clientNames = [
  "Client A",
  "Client B",
  "Client C",
  "Client D",
  "Client E",
  "Client F",
  "Client G",
];

const OurClientsCarousel = () => {
  const [spacing] = useToken("space", ["8"]);

  return (
    <Box overflow="hidden" py={14} mx={20} bg="white">
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
            duration: 50,
            repeatDelay: 2, 
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
          >
            {client}
          </Box>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default OurClientsCarousel;
