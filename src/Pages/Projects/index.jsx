import { Box, Grid, Heading, Text, Image, Link as ChakraLink, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import ProjectsHero from './ProjectsHero'
import { projects } from '../LandingPage/OurRecentprojects'
import LearnMoreButton from '../../components/LearnMoreBtn'
import SEO from '../../components/SEO'

const Projects = () => {
  return (
    <Box>
      <SEO 
        title="Projects"
        description="Explore our featured projects in oil & gas services. Water re-injection, well intervention, high-pressure pumping, and nitrogen lift operations across Nigeria."
        keywords="oil and gas projects, pipeline projects, well intervention projects, water injection projects, nigeria oil projects"
      />
      <ProjectsHero />

      <Box p={{ lg: "84px", md: "50px", base: 5 }} bg={"#F5F5F5"}>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gap={{ base: 8, md: 10 }}
          justifyContent={"center"}
          alignItems={"stretch"}
        >
          {projects.map((item, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="24px"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s ease-in-out"
              _hover={{ boxShadow: "xl", transform: "translateY(-6px)" }}
            >
              <Box
                position="relative"
                overflow="hidden"
                h="240px"
                w="full"
                borderTopRadius="24px"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} project by Dam Seik Services`}
                  h="full"
                  w="full"
                  objectFit="cover"
                  transition="transform 0.4s ease-in-out"
                  _hover={{ transform: "scale(1.08)" }}
                  loading="lazy"
                />
               
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bg="linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.35))"
                  pointerEvents="none"
                />
              </Box>

              <Flex flexDirection="column" gap={3} p={5}>
                <Heading fontSize="20px" color="#5EA52F" fontWeight="600">
                  {item.title}
                </Heading>
                <Text fontSize="16px" color="gray.600">
                  {item.subTitle}
                </Text>
                <ChakraLink as={Link} to={item.id} _hover={{ textDecoration: "none" }}>
                  <LearnMoreButton title="Read more" />
                </ChakraLink>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects
