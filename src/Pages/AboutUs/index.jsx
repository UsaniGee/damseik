import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import AboutHero from './AboutHero'
import WhoAreWe from '../LandingPage/WhoAreWe'

const AboutUs = () => {
const clients = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939085/shell_we0rhr.jpg",
     id: "Shell"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Total_ak3xt5.jpg",
     id: "Total"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939085/NNPC_hxrs9q.jpg",
     id: "NNPC"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Agip_qjkvha.jpg",
    id: "Agip Oil"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Mobil_zbfvom.jpg",
    id: " Mobil"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745940408/Juesco_b1ds4z.jpg",
    id: "Juesco"
  },
]

const partners = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745937585/topline_limited_logo_jtnmj7.jpg",
    id: "Topline"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745937810/Serock_tavnle.jpg",
    id: "Serock"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745937663/doxa_int_l_engineering_services_ltd_logo_tpacab.jpg",
    id: "Doxa"
  },
  {
    image: "",
    id: "Anikor",
  }
]

  return (
   <Box pt={{md: "82px", base: "110px"}} >
      <AboutHero />
      <Box bg={"#F5F5F5"}>
        <Grid gridTemplateColumns={{md: "1fr 1fr"}} p={{md: 24, base: 5}} gap={10} gri>
           <Grid gap={14}>
                <Text color={"#989898"}>
                    DAM SEIK
                </Text>
                <Text fontSize={"23px"}>
                Dam Seik Services Limited is an indigenous oil and gas servicing company in Nigeria providing innovative and cost effective services that have panned the better of 16 years.
                 <br />  
                The Company has well structured administrative, sales and technical departments, professionally equipped to attend to clients needs. 
                <br />
                <br />
                Incorporated in Nigeria with head office located at #10 Second Avenue Federal Housing Estate Rumuemue, mile 4 ,Warehouse Plot 224 lyowuna Drive Trans Amadi Industrial Layout, PH. UK Office7 Linley Dell, stopsley Luton Bedfordshire Lu 28 TJUK, fax 01592612068.
                </Text>               
           </Grid>

           {/* Image */}
           <Box position="relative" w="full" h="full">
                <Image
                  src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1744171724/30642_asod8j.jpg"
                  alt="Hero"
                  objectFit="cover"
                  w="full"
                  h="full"
                />

                {/* Overlay */}
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="100%"
                  h="100%"
                  bg="radial-gradient(circle at left center, rgba(34, 197, 94, 0.35) 0%, rgba(197, 34, 34, 0.7) 30%, transparent 80%)"
                  pointerEvents="none"
                  zIndex={1}
                />
            </Box>

        </Grid>        
    </Box>

    {/* Mission, Vision, Comittment */}
    <Grid gridTemplateColumns={{md: "1fr 1fr 1fr"}} p={{md: 24, base: 5}} gap={10} bg={""}>
          <Grid gap={5}>
            <Text fontWeight={600} fontSize={"34px"}>Our Mission</Text>
            <Text>Dam Seik Services Limited mission is to remain the world’s leading provider of un-interrupted quality services.</Text>
          </Grid>
          <Grid gap={5}>
            <Text fontWeight={600} fontSize={"34px"}>Our Vision</Text>
            <Text>Our vision is to be the reference point in the provision of quality and professional Engineering support services in the oil and gas industry Globally.</Text>
          </Grid>
          <Grid gap={5}>
            <Text fontWeight={600} fontSize={"34px"}>Our Commitment</Text>
            <Text>To provide Innovative and cost effective services For the Oil and Gas Industry in Nigeria. Our Experience, Professionalism and Robust Experienced Team will be harnessed to meet and exceed expectations.
            </Text>
          </Grid>
        </Grid>

         {/* Quality Policy */}
         <Grid p={{md: 24, base: 5}} gap={10}  bg={"#F5F5F5"}>
            <Text color={"#989898"}>
              QUALITY POLICY
            </Text>
            <Box display={"grid"} gridTemplateColumns={{md: "1fr 1fr"}} gap={10} alignItems={"center"}>
              <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744955126/2149354008_nlrbbs.jpg' alt='Quality Policy'/>
              <Text>
              It is the policy of DAM SEIK SERVICES LIMITED to provide an effective and efficient Engineering Installation, inspection, test and allied services that meet and exceed customer expectations, regulatory and statutory requirement at optimal cost and also to continually improve the Company Quality Management System for effectiveness. This Quality Policy is communicated, understood and implemented throughout the Company and is continually reviewed for continuing suitability.

              </Text>
            </Box>       
        </Grid>

        {/* Our Clients */}
        <Grid  px={{md: 24, base: 5}} py={{md: 5, base: 5}} gap={10} bg={""}>
        <Text color={"#989898"}> 
            OUR CLIENTS
          </Text>
          <Grid gridTemplateColumns={{md: "1fr 1fr 1fr 1fr 1fr 1fr"}} justifyContent={"center"} alignItems={"center"} gap={5}>
            {clients.map((item, index) => (
              <Grid key={index}>
                <Image src={item.image} alt={item.id} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Our Partners */}
        <Grid  px={{md: 24, base: 5}} py={{md: 14, base: 5}} gap={10} bg={""}>
        <Text color={"#989898"}>
            OUR PARTNERS
          </Text>
          <Grid gridTemplateColumns={{md: "1fr 1fr 1fr 1fr 1fr"}} justifyContent={"center"} alignItems={"center"} gap={5}>
            {partners.map((item, index) => (
              <Grid key={index} >
                <Image src={item.image} alt={item.id} />
              </Grid>
            ))}
          </Grid>
        </Grid>
    </Box>
  )
}

export default AboutUs
