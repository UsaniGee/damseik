import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)"
      px={5}
    >
      <VStack spacing={8} textAlign="center" maxW="600px">
        <Heading
          fontSize={{ base: "6xl", md: "8xl" }}
          fontWeight="bold"
          color="#D10205"
          lineHeight="1"
        >
          404
        </Heading>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="semibold"
          color="gray.800"
        >
          Page Not Found
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="500px">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </Text>
        <VStack spacing={4} mt={4}>
          <Button
            as={Link}
            to="/"
            size="lg"
            bg="#D10205"
            color="white"
            _hover={{ bg: "#B00204" }}
            borderRadius="full"
            px={8}
          >
            Go to Homepage
          </Button>
          <Button
            as={Link}
            to="/contact"
            size="md"
            variant="outline"
            borderColor="#D10205"
            color="#D10205"
            _hover={{ bg: "#D10205", color: "white" }}
            borderRadius="full"
            px={6}
          >
            Contact Us
          </Button>
        </VStack>
      </VStack>
    </Box>
  )
}

export default NotFound

