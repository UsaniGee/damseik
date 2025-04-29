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
  } from "@chakra-ui/react";
  import { useForm } from "react-hook-form";
  
  const ContactForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (values) => {
      console.log(values);
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
            <Text as="a" color="red.600" href="mailto:inquiries@damseikservices.com">
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
            {/* Name */}
            <FormControl isInvalid={errors.name}>
              <FormLabel>Name</FormLabel>
              <Input
                borderColor="red.700"
                {...register("name", { required: "Please enter name" })}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
  
            {/* Email */}
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                borderColor="red.700"
                {...register("email", { required: "Please enter email" })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
  
            {/* Subject */}
            <FormControl isInvalid={errors.subject}>
              <FormLabel>Subject</FormLabel>
              <Input
                borderColor="red.700"
                {...register("subject", { required: "Please enter subject" })}
              />
              <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
            </FormControl>
  
            {/* Message */}
            <FormControl isInvalid={errors.message}>
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor="red.700"
                {...register("message", { required: "Please enter message" })}
              />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
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
              colorScheme="red"
              bg="rgba(221, 33, 33, 0.9)"
              size="lg"
              type="submit"
              px={10}
              w="fit-content"
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
  