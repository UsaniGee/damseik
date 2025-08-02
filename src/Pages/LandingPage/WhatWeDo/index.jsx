import { Box, Grid, Image, Link, Text } from '@chakra-ui/react'
// import { SiGooglecloudspanner } from "react-icons/si";
import { PiPipeWrenchFill } from "react-icons/pi";
import { FaOilWell } from "react-icons/fa6";
import { GiAnchor } from 'react-icons/gi'
import React from 'react'

const WhatWeDo = () => {
    const Services = [
        {
            id: "services/pipeline-facility-production-maintenace",
            title: "Pipeline Maintenance",
            image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744187339/Equipment-removebg-preview_kgophw.png",
            color: "red.200",
            icon: <PiPipeWrenchFill />
        },
        {
            id: "services/well-service",
            title: "Well Services",
            image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744187339/Equipment-removebg-preview_kgophw.png",
            color: "green.200",
            icon: <FaOilWell />
        },
        {
            id: "services/marine-support-services",
            title: "Marine Engineering & Vessel Manning",
            image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744187339/Equipment-removebg-preview_kgophw.png",
             color: "red.200",
             icon:<GiAnchor />
        },
        
    ]
    
  return (
    <Box p={{lg: "84px",md: "50px", base: 5}}>
         <Grid gap={14}>
         <Text color={"#D10205"} fontSize={{base: "16px", md: "20px"}}>
            OUR CORE SERVICES
        </Text>
        <Grid gridTemplateColumns={{md: "1fr 1fr 1fr"}} gap={8} justifyContent={"center"} alignItems={"center"} px={{md: 1 }}  >
            {Services.map((item, index) => (
                <Link key={index} href={item.id} textDecoration="none"
                _hover={{ textDecoration: "none" }}>
              <Grid justifyContent={"center"} alignItems={"center"}  bg={"#F5F5F5"} 
            //   _hover={{ bg: "#F5F5F5", transform: "scaleX(0.9)", cursor: "pointer",  }} 
              py={10} px={{base: 3}} borderRadius={"10px"} h={"300px"} transition="transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"> 
               <Grid justifyContent={"center"} alignItems={"center"}>
               {/* <Image h={"50px"} src={item.image} alt='' /> */}
               <p className='text-[100px] text-[#D10205]'>{item.icon}</p>
               </Grid>
                <Text textAlign={"center"} fontWeight={600} fontSize={"1.25em"} className='text-[#5EA52F]' > 
                    {item.title}
                </Text>
              </Grid>
            </Link>
            ))}
        </Grid>
         </Grid>
    </Box>
  )
}

export default WhatWeDo
