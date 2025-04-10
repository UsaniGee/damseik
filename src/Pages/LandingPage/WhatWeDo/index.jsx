import { Box, Grid, Image, Text } from '@chakra-ui/react'
// import { SiGooglecloudspanner } from "react-icons/si";
import React from 'react'

const WhatWeDo = () => {
  return (
    <Box p={{md: 24, base: 5}}>
         <Grid gap={14}>
         <Text color={"#989898"}>
            OUR SERVICES
        </Text>
        <Grid gridTemplateColumns={{md: "1fr 1fr 1fr"}} gap={10} justifyContent={"center"} px={{md: 10, }}>
            <Box>
            {/* <SiGooglecloudspanner  fontSize={"100px"} color='red' /> */}
            {/* <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744187339/Equipment-removebg-preview_kgophw.png' alt='' /> */}
            <Text >
                Equipment Leasing
            </Text>
            </Box>
            <Box>
                <Image src='' alt='' />
                <Text>
                    Coating and repair Products(Advanced Mechanical Polymers)
                </Text>
            </Box>
            <Box>
                 <Image src='' alt='' />
                <Text>
                    Process instrumentation
                </Text>
            </Box>
            <Box>
                 <Image src='' alt='' />
                <Text>
                    Quality Control Services
                </Text>
            </Box>
            <Box>
                 <Image src='' alt='' />
                <Text>
                    Pipeline Facility Production/Maintenance
                </Text>
            </Box>
            <Box>
                 <Image src='' alt='' />
                <Text>
                    Valve Services
                </Text>
            </Box>
            <Box>
                 <Image src='' alt='' />
                <Text>
                    Marine support service
                </Text>
            </Box>
            <Box>
                 <Image src='' alt='' />
                <Text>
                    Procurement
                </Text>
            </Box>
        </Grid>
         </Grid>
    </Box>
  )
}

export default WhatWeDo
