import { Box, Grid, Image, Link, Text } from '@chakra-ui/react'
// import { SiGooglecloudspanner } from "react-icons/si";
import React from 'react'

const WhatWeDo = () => {
    const Services = [
        {
            id: "services/pipeline-facility-production-maintenace",
            title: "Pipeline Maintenance",
            image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744187339/Equipment-removebg-preview_kgophw.png",
            color: "red.200"
        },
        {
            id: "services/well-services",
            title: "Well Services",
            image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744187339/Equipment-removebg-preview_kgophw.png",
            color: "green.200"
        },
        {
            id: "services/marine-support-services",
            title: "Marine Engineering & Vessel Manning",
            image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744187339/Equipment-removebg-preview_kgophw.png",
             color: "red.200"
        },
        
    ]
    
  return (
    <Box p={{md: 24, base: 5}}>
         <Grid gap={14}>
         <Text color={"#989898"}>
            OUR CORE SERVICES
        </Text>
        <Grid gridTemplateColumns={{md: "1fr 1fr 1fr"}} gap={8} justifyContent={"center"} alignItems={"center"} px={{md: 10 }}  >
            {Services.map((item, index) => (
                <Link key={index} href={item.id} textDecoration="none"
                _hover={{ textDecoration: "none" }}>
              <Grid justifyContent={"center"} alignItems={"center"}  bg={"gray.100"} _hover={{ bg: "white", transform: "scaleX(0.9)", cursor: "pointer", boxShadow: "lg", }} py={10} px={{base: 3}} borderRadius={"10px"} boxShadow={"2xl"} transition="transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"> 
               <Grid justifyContent={"center"} alignItems={"center"}>
               <Image h={"50px"} src={item.image} alt='' />
               </Grid>
                <Text textAlign={"center"} fontWeight={600} > 
                    {item.title}
                </Text>
              </Grid>
            </Link>
            ))}
            {/* <Box>
            <SiGooglecloudspanner  fontSize={"100px"} color='red' />
            <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744187339/Equipment-removebg-preview_kgophw.png' alt='' />
            <Text >
                Equipment Leasing
            </Text>
            </Box> */}
            {/* <Box>
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
            </Box> */}
        </Grid>
         </Grid>
    </Box>
  )
}

export default WhatWeDo
