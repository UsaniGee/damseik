import { Button, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

const LearnMoreButton = (props) => {
  return (

   <div
  class="cursor-pointer group relative font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-12 bg-green-900 hover:bg-red-200 hover:text-red-800 text-green-200"
>
  <div className=" relative flex items-center justify-center gap-2">
    <span className="relative inline-block overflow-hidden">
      <span
        className="block transition-transform duration-300 group-hover:-translate-y-full"
      >
        Learn More
      </span>
      <span
        className=" absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
      >
        Learn More
      </span>
    </span>

    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
      viewBox="0 0 24 24"
    >
      <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        stroke="white"
        d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
      ></path>
    </svg>
  </div>
</div>




    // <Button
    // w={"200px"}
    //   position="relative"
    //   overflow="hidden"
    //   px={6}
    //   py={3}
    //   bg="white"
    //   color="green.600"
    //   border="2px solid blue.600"
    //   _hover={{ color: "white" }}
    //   transition="all 0.4s ease-in-out"
    //   _before={{
    //     content: `""`,
    //     position: "absolute",
    //     top: 0,
    //     left: "-100%",
    //     width: "100%",
    //     height: "100%",
    //     background:
    //     "linear-gradient(120deg, transparent, hsla(0, 100.00%, 51.20%, 0.78), transparent)",
    //     transition: "left 0.4s ease-in-out",
    //     zIndex: 1,
    //   }}
    //   _hover={{
    //     _before: { left: "0%" },
    //   }}
    //   border={props.border}
    // >
    //   <Box
    //     position="relative"
    //     zIndex={2}
    //     display="flex"
    //     alignItems="center"
    //     gap={2}
    //   >
    //     <Text>{props.title}</Text>
    //     <MotionBox
    //       as={ChevronRightIcon}
    //       boxSize={5}
    //       initial={{ x: -5, opacity: 0 }}
    //       whileHover={{ x: 0, opacity: 1 }}
    //       transition={{ duration: 0.3 }}
    //     />
    //   </Box>
    // </Button>
  );
};

export default LearnMoreButton;
