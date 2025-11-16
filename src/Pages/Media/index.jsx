import { Box, Grid, Image, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import MediaHero from './MediaHero'
import SEO from '../../components/SEO'

const Media = () => {
  const mediaItems = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744251092/12709_lwy0ae.jpg",
      title: "Project Site",
      category: "Operations"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744250053/2149057694_x0ohbp.jpg",
      title: "Pipeline Work",
      category: "Pipeline Services"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg",
      title: "Well Services",
      category: "Well Services"
    }
  ];

  return (
    <Box>
      <SEO 
        title="Media"
        description="View images and media from previous projects completed by Dam Seik Services Limited. See our work in pipeline services, well services, and marine engineering."
        keywords="dam seik projects, oil and gas project images, pipeline project photos, well services photos"
      />
      <MediaHero />
      <Box px={{md: 14, base: 5}} py={{md: 16, base: 10}}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={8} textAlign="center" color="#D10205">
          Project Gallery
        </Heading>
        <Text fontSize="md" color="gray.600" textAlign="center" mb={12} maxW="800px" mx="auto">
          Images from previous jobs completed by Dam Seik Services Limited, showcasing our expertise 
          in oil & gas services, pipeline maintenance, and marine engineering.
        </Text>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={6}>
          {mediaItems.map((item) => (
            <Box
              key={item.id}
              position="relative"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="md"
              _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
              transition="all 0.3s ease"
            >
              <Image
                src={item.image}
                alt={item.title}
                w="100%"
                h="300px"
                objectFit="cover"
                loading="lazy"
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                p={4}
                color="white"
              >
                <Text fontWeight="semibold">{item.title}</Text>
                <Text fontSize="sm" opacity={0.9}>{item.category}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Media
