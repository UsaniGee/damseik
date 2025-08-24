import { Box, Grid, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import ProjectsHero from '../ProjectsHero'

const WaterInjection = () => {
  return (
    
    <Box  pb={14}>
      <ProjectsHero />      
       <Grid px={{md: 24, base: 5}} py={{md: 14, base: 5}} gridTemplateColumns={{lg: "1fr 1fr ", base: "1fr"}} gap={5} alignItems={"center"}>
       <Box >
           <Grid gridTemplateColumns={{md: "1fr 1fr "}} gap={5} > 
            {/* <Image display={{md: "block", base: "none"}}  h={"300px"} w={"full"} objectFit={"cover"} objectPosition={"top"} src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_2_ozcsxp.jpg'/> */}
            {/* <Image display={{md: "block", base: "none"}}  h={"300px"} w={"full"} objectFit={"cover"} objectPosition={"top"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_mkn9vp.jpg'/> */}
            <Image  h={"700px"} w={"full"} objectFit={"cover"} objectPosition={"top"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746442844/WhatsApp_Image_2025-05-05_at_11.09.45_1_oxkch9.jpg'/>
            <Image display={{md: "block", base: "none"}}  h={"700px"} w={"full"} objectFit={"cover"} objectPosition={"top"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746091379/IMG_2244_q0nbx4.jpg'/>
           </Grid>
         </Box>
         <Box px={{md: 1, base: 5}} w={"80%"}>
          <Grid pb={5}>
          <Text>
          Water Re-Injection Project – Umusadege 1, Kwale, Delta State 
          </Text>
          <Text>
            <b>Client:</b>  <span>Midwestern Oil & Gas  </span>
          </Text>
          <Text>
            <b>Location:</b>  <span>Umusadege 1, Kwale, Delta State, Nigeria  </span>
          </Text>
          <Text>
            <b>Service Provided:</b>  <span>Water Re-Injection Operations </span>
          </Text>
          <Text>
            <b>Equipment Deployed:</b>  <span>Two HT400 Triplex Pumps</span>
          </Text>
          </Grid>
          <Grid gap={5}>
            <Text>Dam Seik Services Ltd successfully executed a high-volume water re-injection project for Midwestern Oil & Gas at the Umusadege 1 wellsite in Kwale, Delta State. The operation was designed to support reservoir pressure maintenance and enhance oil recovery through sustained water re-injection.</Text>
            <Text>Two HT400 Triplex Pumps were deployed to run 12 hours daily, each delivering 5 barrels per minute, ensuring efficient, continuous, and reliable re-injection into the formation.</Text>

            <Grid gap={5}>
              <b>Key Achievements</b>

            <UnorderedList>
              <ListItem>Daily pumping operations of up to 3,600 barrels of water per unit</ListItem>
              <ListItem>Seamless integration* with Midwestern’s on-site production and injection facilities</ListItem>
              <ListItem>Maintenance of safe operating pressures* and optimal flow rates</ListItem>
              <ListItem>Zero downtime recorded during operation, with full operator and equipment readiness</ListItem>
            </UnorderedList>

            <Text>
            This project highlights Dam Seik’s capability to provide critical pressure pumping support for E&P operations, utilizing robust equipment and skilled technicians to deliver cost-effective and uninterrupted service.
            </Text>
            </Grid>
            
          </Grid> 
         </Box>
       </Grid>
      </Box>
  )
}

export default WaterInjection
