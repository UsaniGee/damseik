import React from "react";
import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PagesHero = ({ imageSrc, title, subtitle, subtitle1, breadcrumb, ctaText, ctaLink }) => {
  return (
    <Box position="relative" w="100%" h={{ base: "420px", md: "520px" }} overflow="hidden">
  
      <Image
        src={imageSrc}
        alt={`${title} - Dam Seik Services`}
        objectFit="cover"
        objectPosition="center"
        w="100%"
        h="100%"
        loading="eager"
        sx={{
          filter: "brightness(0.7) contrast(1.1) saturate(0.9)",
          transition: "filter 0.3s ease",
        }}
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient="linear(to-b, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)"
        zIndex="1"
      />
      
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.3)"
        zIndex="1"
      />

      {/* Overlay Content */}
      <Box
        position="absolute"
        top="50%"
        left={{ base: "50%", md: "8%" }}
        transform={{ base: "translate(-50%, -50%)", md: "translateY(-50%)" }}
        color="white"
        textAlign={{ base: "center", md: "left" }}
        w={{ base: "90%", md: "auto" }}
        zIndex="2"
      >
        {/* Main Title */}
        <Text
          fontSize={{ base: "28px", md: "56px", lg: "64px" }}
          fontWeight="extrabold"
          lineHeight={{ base: "36px", md: "72px" }}
          letterSpacing="-0.5px"
        >
          {title}
        </Text>

        {/* Subtitle */}
        {subtitle && (
          <Text
            mt={2}
            w={{ base: "100%", md: "600px" }}
            fontSize={{ base: "20px", md: "32px" }}
            fontWeight="semibold"
            lineHeight={{ base: "28px", md: "44px" }}
            opacity={0.9}
          >
            {subtitle}
          </Text>
        )}

        {/* Secondary Subtitle */}
        {subtitle1 && (
          <Text
            mt={3}
            w={{ base: "100%", md: "500px" }}
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="medium"
            opacity={0.85}
          >
            {subtitle1}
          </Text>
        )}

        {/* Breadcrumb Navigation */}
        {breadcrumb && breadcrumb.length > 0 && (
          <Breadcrumb
            mt={5}
            fontSize={{ base: "14px", md: "18px" }}
            separator="›"
            color="whiteAlpha.800"
          >
            {breadcrumb.map((item, index) => (
              <BreadcrumbItem
                key={index}
                isCurrentPage={index === breadcrumb.length - 1}
              >
                <BreadcrumbLink
                  href={item.link}
                  _hover={{
                    color: "#D10205",
                    textDecoration: "underline",
                  }}
                  fontWeight={index === breadcrumb.length - 1 ? "bold" : "medium"}
                >
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        )}

        {(ctaText && ctaLink) && (
          <Box mt={6}>
            <Button
              as={Link}
              to={ctaLink}
              size={{ base: "md", md: "lg" }}
              bg="#D10205"
              color="white"
              fontSize={{ base: "0.875rem", md: "1rem" }}
              fontWeight="semibold"
              px={{ base: 6, md: 8 }}
              py={{ base: 5, md: 6 }}
              borderRadius="full"
              _hover={{
                bg: "#B00204",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(209, 2, 5, 0.4)",
              }}
              transition="all 0.3s ease"
              boxShadow="0 4px 15px rgba(209, 2, 5, 0.3)"
            >
              {ctaText}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PagesHero;
