import React from "react";
import { Box, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image } from "@chakra-ui/react";

const PagesHero = ({ imageSrc, title, subtitle, subtitle1, breadcrumb }) => {
  return (
    <Box position="relative" w="100%" h={{ base: "300px", md: "500px" }}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        objectPosition={"center"}
        w="100%"
        h="100%"
        filter="brightness(50%)"
      />
      
      {/* Overlay Text */}
      <Box
        position="absolute"
        top="50%"
        left="5%"
        transform="translateY(-50%)"
        color="white"
        display={"grid"}
        gap={3}
      >
        <Text fontSize={{ base: "12px", md: "12px" }} fontWeight="bold" >
          {title}
        </Text>

        <Text w={{md: "600px"}} fontSize={{ base: "30px", md: "40px" }} fontWeight="bold" lineHeight={"50px"}>
          {subtitle}
        </Text>

        <Text w={{md: "500px", base: "auto"}} fontSize={{ base: "14px", md: "18px" }} fontWeight="bold">
          {subtitle1}
        </Text>


        {/* Breadcrumb Navigation */}
        <Breadcrumb   fontSize="sm" color="green.300" mt={2}>
          {breadcrumb.map((item, index) => (
            <BreadcrumbItem key={index} isCurrentPage={index === breadcrumb.length - 1}>
              <BreadcrumbLink _hover={{ color: "red.600", textDecoration: "underline" }} href={item.link}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Box>
    </Box>
  );
};

export default PagesHero;
