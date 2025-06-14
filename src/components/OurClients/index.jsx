import { Box, Image, Text, useToken } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const clientNames = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939085/shell_we0rhr.jpg",
  },
  {
        image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Total_ak3xt5.jpg",
  },
  {
       image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939085/NNPC_hxrs9q.jpg",
  },
  {
        image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Agip_qjkvha.jpg",
  },
  {
      image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Mobil_zbfvom.jpg",
  },
  {
       image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745940408/Juesco_b1ds4z.jpg",
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
          {[...clientNames, ...clientNames].map((client, id) => (
            <Box
            key={id}
            // minW="200px"
            h="100px"
            bg="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            fontSize="xl"
            borderRadius="md"
            boxShadow="md"
            flexShrink={0}
            p={3}
            //  backgroundImage={`url(${client.image})`}
          >
             <Image src={client.image} alt={`Client ${id}`} objectFit="contain" h="100%" />
          </Box>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default OurClientsCarousel;
