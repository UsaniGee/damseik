

import { Box, Flex, Link, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';


const Links = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState("Media")

  const handleOnClick = (name) => {
    setActive(name)
    if (onClose) onClose()
  }

  const NavLinks = ({ handleOnClick, active }) => (
  <>
    {[
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Project', href: '/projects' },
      { name: 'Careers', href: 'careers' },
      { name: 'Media', href: '/media' },
      { name: 'Contact', href: '/contact' },     
    ].map((link) => (
      <Link
        key={link.name}
        href={link.href}
        fontSize="md"
        fontWeight={600}
        // color={ active === link.name ? "red.500" : "black" }
        _hover={{ color: 'red.600' }}
        onClick={() => handleOnClick(link.name)}         
      >
        {link.name}
      </Link>
    ))}
  </>
);

  return (
    <Box>
      {/* Desktop View */}
      <Flex gap={6} display={{ base: 'none', md: 'flex' }} >
        <NavLinks active={active} handleOnClick={handleOnClick}/>
      </Flex>

      {/* Mobile View - Hamburger Menu */}
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          colorScheme="green"
          onClick={onOpen}
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex flexDirection="column" gap={4}>
                <NavLinks onClose={onClose} active={active} handleOnClick={handleOnClick}/>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};




export default Links;

