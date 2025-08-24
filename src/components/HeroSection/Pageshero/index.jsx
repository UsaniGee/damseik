import React from "react";
import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
} from "@chakra-ui/react";

const PagesHero = ({ imageSrc, title, subtitle, subtitle1, breadcrumb }) => {
  return (
    <Box position="relative" w="100%" h={{ base: "420px", md: "520px" }} overflow="hidden">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        objectPosition="center"
        w="100%"
        h="100%"
        filter="brightness(60%)"
      />

      {/* Subtle Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient="linear(to-b, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)"
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
                    color: "red.400",
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
      </Box>
    </Box>
  );
};

export default PagesHero;
