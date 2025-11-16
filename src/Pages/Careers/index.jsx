import { Box, Grid, Heading, Text, VStack, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import CareersHero from './CareersHero'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

const Careers = () => {
  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Professional development opportunities",
    "Work-life balance",
    "Collaborative team environment",
    "Career growth opportunities"
  ];

  const values = [
    {
      title: "Diversity & Inclusion",
      description: "We value diverse perspectives and create an inclusive environment where everyone can thrive."
    },
    {
      title: "Innovation",
      description: "We encourage creative thinking and innovative solutions to industry challenges."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, setting high standards for ourselves."
    },
    {
      title: "Safety First",
      description: "Safety is our top priority in all operations and work environments."
    }
  ];

  return (
    <Box>
      <SEO 
        title="Careers"
        description="Join Dam Seik Services - Be part of a diverse team delivering excellence in oil & gas services. Explore career opportunities and employee benefits."
        keywords="careers, jobs, employment, oil and gas jobs nigeria, engineering careers"
      />
      <CareersHero />
      
      {/* Main Content */}
      <Box px={{ md: 14, base: 5 }} py={{ md: 16, base: 10 }}>
        {/* Introduction Section */}
        <VStack spacing={6} textAlign="center" mb={12}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="#D10205">
            Join Our Team
          </Heading>
          <Text fontSize={{ base: "16px", md: "18px" }} color="gray.700" maxW="800px">
            At Dam Seik Services, we believe that our people are our greatest asset. 
            We are committed to providing a work environment that treats all employees with respect 
            and encourages individual growth. Our diverse values and perspectives drive innovation 
            and excellence in the oil & gas industry.
          </Text>
        </VStack>

        {/* Why Join Us Section */}
        <Box mb={16}>
          <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={8} textAlign="center">
            Why Join Dam Seik Services?
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} mb={12}>
            {values.map((value, index) => (
              <Box
                key={index}
                p={6}
                borderRadius="xl"
                bg="white"
                boxShadow="md"
                _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
              >
                <Heading fontSize="lg" fontWeight="semibold" color="#5EA52F" mb={3}>
                  {value.title}
                </Heading>
                <Text fontSize="md" color="gray.600">
                  {value.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Benefits Section */}
        <Box mb={16} bg="#F5F5F5" p={{ base: 6, md: 10 }} borderRadius="xl">
          <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={8} textAlign="center">
            Employee Benefits
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            {benefits.map((benefit, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box
                  w="8px"
                  h="8px"
                  borderRadius="full"
                  bg="#5EA52F"
                  flexShrink={0}
                />
                <Text fontSize="md" color="gray.700">
                  {benefit}
                </Text>
              </Flex>
            ))}
          </Grid>
        </Box>

        {/* Open Positions Section */}
        <Box mb={16}>
          <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={8} textAlign="center">
            Open Positions
          </Heading>
          <Box
            p={8}
            borderRadius="xl"
            bg="white"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontSize="lg" color="gray.600" mb={6}>
              We are always looking for talented individuals to join our team. 
              While we don't have any open positions listed at the moment, we encourage 
              you to reach out to us with your resume.
            </Text>
            <Button
              as={Link}
              to="/contact"
              size="lg"
              bg="#D10205"
              color="white"
              _hover={{ bg: "#B00204" }}
              borderRadius="full"
              px={8}
            >
              Contact Us
            </Button>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box
          bg="linear-gradient(135deg, rgba(209,2,5,0.1), rgba(94,165,47,0.1))"
          p={{ base: 8, md: 12 }}
          borderRadius="xl"
          textAlign="center"
        >
          <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={4} color="#D10205">
            Ready to Start Your Career with Us?
          </Heading>
          <Text fontSize="md" color="gray.700" mb={6} maxW="600px" mx="auto">
            Send us your resume and cover letter, and we'll keep your information 
            on file for future opportunities that match your skills and experience.
          </Text>
          <Button
            as={Link}
            to="/contact"
            size="lg"
            bg="#5EA52F"
            color="white"
            _hover={{ bg: "#4d8a2f" }}
            borderRadius="full"
            px={8}
          >
            Submit Your Resume
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Careers
