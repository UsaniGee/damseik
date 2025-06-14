import { Button, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

const LearnMoreButton = (props) => {
  return (
    <Button
    w={"200px"}
      position="relative"
      overflow="hidden"
      px={6}
      py={3}
      bg="white"
      color="green.600"
      border="2px solid blue.600"
      _hover={{ color: "white" }}
      transition="all 0.4s ease-in-out"
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background:
        "linear-gradient(120deg, transparent, hsla(0, 100.00%, 51.20%, 0.78), transparent)",
        transition: "left 0.4s ease-in-out",
        zIndex: 1,
      }}
      _hover={{
        _before: { left: "0%" },
      }}
      border={props.border}
    >
      <Box
        position="relative"
        zIndex={2}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <Text>{props.title}</Text>
        <MotionBox
          as={ChevronRightIcon}
          boxSize={5}
          initial={{ x: -5, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Box>
    </Button>
  );
};

export default LearnMoreButton;
