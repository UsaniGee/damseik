import React, { Component } from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
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
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
              color="#D10205"
            >
              Something went wrong
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </Text>
            {this.state.error && (
              <Box
                p={4}
                bg="red.50"
                borderRadius="md"
                maxW="100%"
                overflow="auto"
              >
                <Text fontSize="sm" color="red.800" fontFamily="mono">
                  {this.state.error.toString()}
                </Text>
              </Box>
            )}
            <VStack spacing={4} mt={4}>
              <Button
                onClick={() => window.location.reload()}
                size="lg"
                bg="#D10205"
                color="white"
                _hover={{ bg: "#B00204" }}
                borderRadius="full"
                px={8}
              >
                Refresh Page
              </Button>
              <Button
                as={Link}
                to="/"
                size="md"
                variant="outline"
                borderColor="#D10205"
                color="#D10205"
                _hover={{ bg: "#D10205", color: "white" }}
                borderRadius="full"
                px={6}
              >
                Go to Homepage
              </Button>
            </VStack>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

