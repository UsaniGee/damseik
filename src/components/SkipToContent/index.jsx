import { Box, Link } from '@chakra-ui/react';
import React from 'react';

const SkipToContent = () => {
  return (
    <Link
      href="#main-content"
      position="absolute"
      top="-40px"
      left="0"
      bg="#D10205"
      color="white"
      padding="8px 16px"
      zIndex={9999}
      _focus={{
        top: "0",
      }}
      _hover={{
        bg: "#B00204",
      }}
      fontSize="sm"
      fontWeight="semibold"
      borderRadius="0 0 4px 0"
    >
      Skip to main content
    </Link>
  );
};

export default SkipToContent;

