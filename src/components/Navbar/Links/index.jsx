import {
  Box,
  Flex,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
  { name: "Media", path: "/media" },
  { name: "Contact", path: "/contact" },
];

const Links = ({ color = "white" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const hoverColor = "#D10205";
  const glassBg = useColorModeValue(
    "rgba(255, 255, 255, 0.7)",
    "rgba(26, 32, 44, 0.7)"
  );

  const NavLinks = () => (
    <>
      {navItems.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <ChakraLink
            key={link.name}
            as={Link}
            to={link.path}
            fontSize="lg"
            fontWeight={isActive ? 700 : 600}
            color={isActive ? hoverColor : color}
            _hover={{ color: hoverColor }}
            onClick={onClose}
            transition="color 0.2s ease"
            aria-current={isActive ? "page" : undefined}
            borderBottom={isActive ? "2px solid" : "none"}
            borderColor={isActive ? hoverColor : "transparent"}
            pb={1}
          >
            {link.name}
          </ChakraLink>
        );
      })}
    </>
  );

  return (
    <Box>
      {/* Desktop */}
      <Flex gap={6} display={{ base: "none", md: "flex" }}>
        <NavLinks />
      </Flex>

      {/* Mobile */}
      <Box display={{ base: "block", md: "none" }} position="relative" zIndex="1000">
        {/* Hamburger/X Toggle */}
        <Box
          as="button"
          onClick={isOpen ? onClose : onOpen}
          w="30px"
          h="24px"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          zIndex="1100"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <Box
            as="span"
            position="absolute"
            w="100%"
            h="3px"
            bg={color}
            borderRadius="2px"
            transition="all 0.3s"
            transform={isOpen ? "rotate(45deg)" : "translateY(-8px)"}
          />
          <Box
            as="span"
            position="absolute"
            w="100%"
            h="3px"
            bg={color}
            borderRadius="2px"
            transition="all 0.3s"
            opacity={isOpen ? 0 : 1}
          />
          <Box
            as="span"
            position="absolute"
            w="100%"
            h="3px"
            bg={color}
            borderRadius="2px"
            transition="all 0.3s"
            transform={isOpen ? "rotate(-45deg)" : "translateY(8px)"}
          />
        </Box>

        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent
            bg={glassBg}
            backdropFilter="blur(12px)"
            p={8}
            boxShadow="xl"
            mt="60px" 
            borderLeft="1px solid rgba(255,255,255,0.2)"
          >
            <DrawerBody>
              <Flex
                flexDirection="column"
                gap={6}
                mt={6}
                fontSize="lg"
                fontWeight={500}
              >
                {navItems.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <ChakraLink
                      key={link.name}
                      as={Link}
                      to={link.path}
                      color={isActive ? hoverColor : useColorModeValue("gray.900", "white")}
                      fontWeight={isActive ? 700 : 500}
                      _hover={{ color: hoverColor }}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.name}
                    </ChakraLink>
                  );
                })}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Links;
