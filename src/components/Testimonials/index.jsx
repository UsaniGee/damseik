import {
  Box,
  Grid,
  Text,
  VStack,
  Heading,
  Avatar,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion(Box);

const Testimonials = ({ testimonials, title = "What Our Clients Say" }) => {
  const defaultTestimonials = [
    {
      name: "John Doe",
      position: "Operations Manager",
      company: "Major Oil Company",
      content: "Dam Seik Services has been our trusted partner for pipeline maintenance. Their expertise and professionalism are unmatched. Highly recommended!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      position: "Project Director",
      company: "Energy Corporation",
      content: "Outstanding service quality and attention to safety. Dam Seik's team delivered our well intervention project on time and within budget.",
      rating: 5,
    },
    {
      name: "Michael Johnson",
      position: "Facilities Manager",
      company: "Petroleum Services Ltd",
      content: "Their marine support services are excellent. Reliable, professional, and always ready to support our offshore operations.",
      rating: 5,
    },
  ];

  const testimonialData = testimonials || defaultTestimonials;
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      py={{ base: 12, md: 20 }}
      px={{ base: 5, md: 10 }}
      bg="linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)"
    >
      <VStack spacing={6} mb={12} textAlign="center">
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="#D10205"
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          maxW="700px"
        >
          Trusted by industry leaders across Nigeria and West Africa
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        gap={8}
        maxW="1200px"
        mx="auto"
      >
        {testimonialData.map((testimonial, index) => (
          <MotionBox
            key={index}
            bg={bgColor}
            p={8}
            borderRadius="xl"
            boxShadow="md"
            border="1px solid"
            borderColor={borderColor}
            whileHover={{ y: -5, boxShadow: "xl" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <VStack align="start" spacing={4}>
              {/* Rating Stars */}
              <Flex gap={1}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Text key={i} color="#FFD700" fontSize="lg">
                    ★
                  </Text>
                ))}
              </Flex>

              {/* Testimonial Content */}
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.700"
                lineHeight="tall"
                fontStyle="italic"
              >
                "{testimonial.content}"
              </Text>

              {/* Author Info */}
              <Flex align="center" gap={3} pt={2} borderTop="1px solid" borderColor="gray.200" w="100%">
                <Avatar
                  size="md"
                  name={testimonial.name}
                  bg="#D10205"
                  color="white"
                />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="semibold" fontSize="sm" color="gray.800">
                    {testimonial.name}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {testimonial.position}
                  </Text>
                  <Text fontSize="xs" color="#5EA52F" fontWeight="medium">
                    {testimonial.company}
                  </Text>
                </VStack>
              </Flex>
            </VStack>
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;

