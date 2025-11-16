"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Links from "./Links";
import { Grid, useColorModeValue, Box } from "@chakra-ui/react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // background + shadow when scrolled
  const bg = useColorModeValue(
    scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
    scrolled ? "rgba(26, 32, 44, 0.9)" : "transparent"
  );
  const shadow = scrolled ? "md" : "none";


  const textColor = useColorModeValue(
    scrolled ? "gray.900" : "white",
    scrolled ? "white" : "white"
  );

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex={1000}
      transition="all 0.3s ease"
      bg={bg}
      backdropFilter={scrolled ? "blur(10px)" : "none"}
      boxShadow={shadow}
    >
      <Grid
        templateColumns="auto auto"
        justifyContent="space-between"
        alignItems="center"
        py={3}
        px={{ base: 4, md: 10 }}
        maxW="1200px"
        color={textColor}
        transition="color 0.2s ease"
      >
        <Logo color={textColor} />
        <Links color={textColor} />
      </Grid>
    </Box>
  );
};

export default Navbar;
