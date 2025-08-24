import {
  Box,
  Flex,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Project", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

const Links = ({ color = "white" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState("Media");

  const handleOnClick = (name) => {
    setActive(name);
    if (onClose) onClose();
  };

  const hoverColor = useColorModeValue("red.600", "red.400");
  const drawerBg = useColorModeValue("white", "gray.900");
  const drawerText = useColorModeValue("gray.900", "white");

  const NavLinks = ({ onItemClick }) => (
    <>
      {navItems.map((link) => (
        <ChakraLink
          key={link.name}
          href={link.href}
          fontSize="lg"
          fontWeight={600}
          color={color}
          _hover={{ color: hoverColor }}
          onClick={() => onItemClick?.(link.name)}
          transition="color 0.2s ease"
          aria-current={active === link.name ? "page" : undefined}
        >
          {link.name}
        </ChakraLink>
      ))}
    </>
  );

  return (
    <Box>
      {/* Desktop */}
      <Flex gap={6} display={{ base: "none", md: "flex" }}>
        <NavLinks onItemClick={handleOnClick} />
      </Flex>

      {/* Mobile */}
      <Box display={{ base: "block", md: "none" }}>
        {/* Animated Hamburger Icon */}
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

        {/* Modern Drawer Menu */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent
            bg={drawerBg}
            color={drawerText}
            p={6}
            boxShadow="xl"
            borderLeft="1px solid"
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <DrawerCloseButton top="20px" right="20px" />
            <DrawerHeader fontSize="xl" fontWeight="bold" borderBottomWidth="1px">
              Menu
            </DrawerHeader>
            <DrawerBody>
              <Flex
                flexDirection="column"
                gap={6}
                mt={6}
                fontSize="lg"
                fontWeight={500}
              >
                {navItems.map((link) => (
                  <ChakraLink
                    key={link.name}
                    href={link.href}
                    color={drawerText}
                    _hover={{ color: hoverColor }}
                    onClick={() => handleOnClick(link.name)}
                  >
                    {link.name}
                  </ChakraLink>
                ))}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Links;
