import { Box, Button, Grid, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import LearnMoreButton from '../../../components/LearnMoreBtn'

const WhoAreWe = () => {
  return (
    <Box bg={"#F5F5F5"}>
        <Grid gridTemplateColumns={{md: "1fr 1fr"}} p={{md: 24, base: 5}} gap={10}>
           <Grid gap={14}>
                <Text color={"#989898"}>
                    ABOUT US
                </Text>
                <Text fontSize={"23px"}>
                Dam Seik Services Limited is an indigenous oil and gas servicing company in Nigeria providing innovative and cost effective services that have spanned the better of 36 years. The Company has well structured administrative, sales and technical departments, professionally equipped to attend to clients needs. 
                </Text>
               <Link href='/about'>
               <LearnMoreButton title={"LEARN MORE"} />
               </Link>
           </Grid>

           {/* Image */}
           <Box position="relative" w="full" h="full">
                <Image
                  src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1744171724/30642_asod8j.jpg"
                  alt="Hero"
                  objectFit="cover"
                  w="full"
                  h="full"
                   borderRadius={"5%"}
                />

                {/* Overlay */}
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="100%"
                  h="100%"
                  // bg="radial-gradient(circle at left center, rgba(34, 197, 94, 0.35) 0%, rgba(197, 34, 34, 0.7) 30%, transparent 80%)"
                  pointerEvents="none"
                  zIndex={1}
                />
            </Box>

        </Grid>
    </Box>
  )
}

export default WhoAreWe
