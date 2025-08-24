import { Box, Image, Text, useToken, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const clientLogos = [
  { image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939085/shell_we0rhr.jpg" },
  { image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Total_ak3xt5.jpg" },
  { image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939085/NNPC_hxrs9q.jpg" },
  { image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Agip_qjkvha.jpg" },
  { image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Mobil_zbfvom.jpg" },
  { image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745940408/Juesco_b1ds4z.jpg" },
];

const OurClientsCarousel = () => {
  const [spacing] = useToken("space", ["12"]);
  const bgColor = useColorModeValue("white", "gray.900");
  const fadeColor = useColorModeValue("white", "gray.900");

  return (
    <Box bg={bgColor} py={16} position="relative" overflow="hidden">
      <Text
        color="#D10205"
        mb={12}
        px={{ base: 5, md: 10 }}
        fontSize={{ base: "22px", md: "36px" }}
        fontWeight="bold"
        textAlign="center"
      >
        Trusted by Industry Leaders
      </Text>

      {/* Fading edges for a premium look */}
      <Box
        position="absolute"
        left="0"
        top="0"
        bottom="0"
        w="100px"
        bg={`linear-gradient(to right, ${fadeColor} 50%, transparent 100%)`}
        zIndex={2}
      />
      <Box
        position="absolute"
        right="0"
        top="0"
        bottom="0"
        w="100px"
        bg={`linear-gradient(to left, ${fadeColor} 50%, transparent 100%)`}
        zIndex={2}
      />

      {/* Carousel */}
      <Box px={{ base: 4, md: 10 }} overflow="hidden">
        <MotionBox
          display="inline-flex"
          gap={spacing}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...clientLogos, ...clientLogos].map((client, idx) => (
            <MotionBox
              key={idx}
              flexShrink={0}
              bg="white"
              borderRadius="xl"
              boxShadow="lg"
              p={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "120px", md: "160px" }}
              h={{ base: "80px", md: "100px" }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <MotionImage
                src={client.image}
                alt={`Client ${idx}`}
                objectFit="contain"
                maxH="100%"
                maxW="100%"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default OurClientsCarousel;
