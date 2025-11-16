import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Heading,
    Input,
    Stack,
    Text,
    Textarea,
    useColorModeValue,
    useToast,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react";
  import { useForm } from "react-hook-form";
  import { useState } from "react";
  
  const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); 
    const toast = useToast();
    
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
  
    const onSubmit = async (values) => {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        // Simulate API call - Replace with actual endpoint
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Here you would typically send to your backend:
        // const response = await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(values),
        // });
        
        setSubmitStatus('success');
        
        // Track form submission in analytics
        if (typeof window !== 'undefined' && window.trackFormSubmission) {
          window.trackFormSubmission('contact_form');
        }
        
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        reset();
      } catch (error) {
        setSubmitStatus('error');
        toast({
          title: "Error sending message",
          description: "Please try again or contact us directly.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <Flex
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("gray.100", "gray.900")}
        p={{ base: 6, md: 14 }}
      >
        {/* Left Section */}
        <Box flex="1" bg="gray.200" p={8}>
          <Text fontSize="sm" fontWeight="bold" textTransform="uppercase" mb={2}>
            We are here to help
          </Text>
          <Heading fontSize="2xl" mb={4}>
            If you have any questions, we are happy to help.
          </Heading>
          <Text fontSize="md">
            If you want to contact us, please fill out the form or send an email
            to{" "}
            <Text as="a" color="#D10205" href="mailto:inquiries@damseikservices.com">
              inquiries@damseikservices.com
            </Text>
          </Text>
        </Box>
  
        {/* Right Section */}
        <Box
          flex="1"
          bg="white"
          p={8}
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Text
            fontSize="sm"
            fontWeight="bold"
            textTransform="uppercase"
            color="gray.800"
            mb={4}
          >
            Leave us a message
          </Text>
  
          <Stack spacing={4}>
            {/* Success/Error Alert */}
            {submitStatus === 'success' && (
              <Alert status="success" borderRadius="md" mb={4}>
                <AlertIcon />
                <Box>
                  <AlertTitle>Message sent!</AlertTitle>
                  <AlertDescription>
                    Thank you for contacting us. We'll respond as soon as possible.
                  </AlertDescription>
                </Box>
              </Alert>
            )}
            
            {submitStatus === 'error' && (
              <Alert status="error" borderRadius="md" mb={4}>
                <AlertIcon />
                <Box>
                  <AlertTitle>Error sending message</AlertTitle>
                  <AlertDescription>
                    Please try again or email us directly at inquiries@damseikservices.com
                  </AlertDescription>
                </Box>
              </Alert>
            )}

            {/* Name */}
            <FormControl isInvalid={!!errors.name} isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                borderColor={errors.name ? "red.500" : "#D10205"}
                _focus={{ borderColor: "#D10205", boxShadow: "0 0 0 1px #D10205" }}
                {...register("name", { 
                  required: "Please enter your name",
                  minLength: { value: 2, message: "Name must be at least 2 characters" }
                })}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              <FormErrorMessage id="name-error">
                {errors.name?.message}
              </FormErrorMessage>
            </FormControl>
  
            {/* Email */}
            <FormControl isInvalid={!!errors.email} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                borderColor={errors.email ? "red.500" : "#D10205"}
                _focus={{ borderColor: "#D10205", boxShadow: "0 0 0 1px #D10205" }}
                {...register("email", { 
                  required: "Please enter your email address",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                })}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              <FormErrorMessage id="email-error">
                {errors.email?.message}
              </FormErrorMessage>
            </FormControl>
  
            {/* Subject */}
            <FormControl isInvalid={!!errors.subject} isRequired>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                id="subject"
                borderColor={errors.subject ? "red.500" : "#D10205"}
                _focus={{ borderColor: "#D10205", boxShadow: "0 0 0 1px #D10205" }}
                {...register("subject", { 
                  required: "Please enter a subject",
                  minLength: { value: 3, message: "Subject must be at least 3 characters" }
                })}
                aria-invalid={errors.subject ? "true" : "false"}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              <FormErrorMessage id="subject-error">
                {errors.subject?.message}
              </FormErrorMessage>
            </FormControl>
  
            {/* Message */}
            <FormControl isInvalid={!!errors.message} isRequired>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                borderColor={errors.message ? "red.500" : "#D10205"}
                _focus={{ borderColor: "#D10205", boxShadow: "0 0 0 1px #D10205" }}
                rows={6}
                {...register("message", { 
                  required: "Please enter your message",
                  minLength: { value: 10, message: "Message must be at least 10 characters" }
                })}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <FormErrorMessage id="message-error">
                {errors.message?.message}
              </FormErrorMessage>
            </FormControl>
  
            {/* reCAPTCHA Placeholder */}
            {/* <Box
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              p={4}
              mt={2}
              w="fit-content"
            >
              <Text fontSize="sm">[reCAPTCHA here]</Text>
            </Box> */}
  
            {/* Submit */}
            <Button
              mt={4}
              bg="#D10205"
              color="white"
              size="lg"
              type="submit"
              px={10}
              w="fit-content"
              isLoading={isSubmitting}
              loadingText="Sending..."
              _hover={{
                bg: "#B00204",
              }}
              _disabled={{
                opacity: 0.6,
                cursor: "not-allowed",
              }}
            >
              SUBMIT
            </Button>
  
            <Text fontSize="xs" color="gray.500">
              By clicking the "Submit" button, you confirm that you give the
              company your consent for processing your personal data.
            </Text>
          </Stack>
        </Box>
      </Flex>
    );
  };
  
  export default ContactForm;
  