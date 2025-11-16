import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Heading,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const FAQ = ({ faqs, title = "Frequently Asked Questions" }) => {
  const defaultFAQs = [
    {
      question: "What services does Dam Seik Services provide?",
      answer: "Dam Seik Services provides comprehensive oil & gas solutions including pipeline maintenance, well services, marine engineering, production chemical services, equipment leasing, valve services, and quality control services."
    },
    {
      question: "How long has Dam Seik Services been in operation?",
      answer: "Dam Seik Services has been serving the oil & gas industry for over 36 years, with extensive experience in Nigeria and across West Africa."
    },
    {
      question: "Where is Dam Seik Services located?",
      answer: "Our head office is located in Port Harcourt, Rivers State, Nigeria. We also have operations across Nigeria and provide services throughout West Africa."
    },
    {
      question: "What industries do you serve?",
      answer: "We primarily serve the oil & gas industry, providing services to upstream, midstream, and downstream operations including exploration, production, pipeline, and refinery sectors."
    },
    {
      question: "How can I contact Dam Seik Services?",
      answer: "You can contact us through our contact form on the website, email us at inquiries@damseikservices.com, or call us at (+234) (0) 803 343 3350."
    },
    {
      question: "Does Dam Seik Services provide emergency services?",
      answer: "Yes, we provide 24/7 emergency response services for critical pipeline and well operations. Our team is available to respond to urgent situations."
    }
  ];

  const faqData = faqs || defaultFAQs;

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 5, md: 10 }}>
      <VStack spacing={8} mb={10}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="#D10205"
          textAlign="center"
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          textAlign="center"
          maxW="800px"
        >
          Find answers to common questions about our services and operations
        </Text>
      </VStack>

      <Box maxW="900px" mx="auto">
        <Accordion allowToggle>
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              mb={4}
              _hover={{ borderColor: "#D10205" }}
            >
              <AccordionButton
                py={6}
                px={6}
                _hover={{ bg: "gray.50" }}
                _expanded={{ bg: "#D10205", color: "white" }}
              >
                <Box flex="1" textAlign="left" fontWeight="semibold" fontSize={{ base: "md", md: "lg" }}>
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={6} px={6} fontSize={{ base: "sm", md: "md" }} color="gray.700">
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;

