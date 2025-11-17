import {
  Box,
  Flex,
  Grid,
  Link as ChakraLink,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6"; // Modern icons
import React from "react";
import Logo from "../Navbar/Logo";

const MotionBox = motion.create(Box);

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

const SOCIALS = [
  { name: "Facebook", href: "#", icon: FaFacebookF },
  { name: "X", href: "#", icon: FaXTwitter },
  { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { name: "Instagram", href: "#", icon: FaInstagram },
];

const Footer = () => {
  return (
    <Box
      bg="linear-gradient(135deg, rgba(90,2,5,0.85), rgba(140,0,0,0.75))"
      backdropFilter="blur(12px)"
      color="white"
      pt={16}
      pb={10}
    >
      <Grid
        px={{ base: 5, md: 14 }}
        templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }}
        gap={10}
        alignItems="start"
      >
        {/* Left Section */}
        <VStack align="start" spacing={4}>
          <Logo />
          <Text fontSize="sm" color="whiteAlpha.700">
            © {new Date().getFullYear()} Dam Seik Services. All rights reserved.
          </Text>
          <HStack spacing={4} pt={2}>
            {SOCIALS.map((s, i) => (
              <MotionBox
                key={i}
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ChakraLink
                  href={s.href}
                  aria-label={s.name}
                  color="whiteAlpha.900"
                  _hover={{ color: "#5EA52F" }}
                  fontSize="xl"
                  isExternal
                >
                  <s.icon />
                </ChakraLink>
              </MotionBox>
            ))}
          </HStack>
        </VStack>

        {/* Middle Section */}
        <FooterSection title="Navigation" links={NAV_LINKS} />

        {/* Right Section */}
        <VStack align="start" spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color="white">
            Get in Touch
          </Text>
          <Text fontSize="sm" color="whiteAlpha.800">
            Head office: #10 Second Avenue, Federal Housing Estate Rumuemue,
            Mile 4, Warehouse Plot 224 Iyowuna Drive, Trans Amadi Industrial
            Layout, PH.
          </Text>
          <ChakraLink
            href="mailto:info@damseik.com"
            fontSize="sm"
            color="#5EA52F"
            _hover={{ textDecoration: "underline" }}
          >
            info@damseik.com
          </ChakraLink>
        </VStack>
      </Grid>

      {/* Bottom Bar */}
      <Flex justify="center" mt={10} fontSize="sm" color="whiteAlpha.600">
        Built by Suarani Technologies (FitTechy)
      </Flex>
    </Box>
  );
};

const FooterSection = ({ title, links }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        justify="space-between"
        align="center"
        onClick={onToggle}
        cursor={{ base: "pointer", md: "default" }}
        mb={4}
      >
        <Text fontSize="lg" fontWeight="bold" color="white">
          {title}
        </Text>
        <Box display={{ base: "block", md: "none" }}>
          <ChevronDownIcon />
        </Box>
      </Flex>
      <Collapse in={isOpen || true} animateOpacity>
        <VStack align="start" spacing={3}>
          {links.map((link, idx) => (
            <ChakraLink
              key={idx}
              as={Link}
              to={link.href}
              fontSize="sm"
              color="whiteAlpha.800"
              _hover={{ color: "#5EA52F", textDecoration: "underline" }}
            >
              {link.name}
            </ChakraLink>
          ))}
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Footer;
