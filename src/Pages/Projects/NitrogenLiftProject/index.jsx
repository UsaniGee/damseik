import { Box, Grid, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import ProjectsHero from '../ProjectsHero'

const NitrogenLiftProject = () => {
  return (
    <Box pt={{md: "82px", base: "110px"}} pb={14}>
    <ProjectsHero />      
    <Grid px={{md: 4, base: 5}} py={{md: 14, base: 14}} gridTemplateColumns={{lg: "1fr 1fr ", base: "1fr"}} gap={14}>
    <Box >
         <Grid gridTemplateColumns={{md: "1fr 1fr "}} gap={14} > 
          {/* <Image display={{md: "block", base: "none"}}  h={"300px"} w={"full"} objectFit={"cover"} objectPosition={"top"} src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_2_ozcsxp.jpg'/> */}
          {/* <Image display={{md: "block", base: "none"}}  h={"300px"} w={"full"} objectFit={"cover"} objectPosition={"top"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_mkn9vp.jpg'/> */}
          <Image  h={"700px"} w={"full"} objectFit={"cover"} objectPosition={"top"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_1_qkia8a.jpg'/>
          <Image display={{md: "block", base: "none"}}  h={"700px"} w={"full"} objectFit={"cover"} objectPosition={"top"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.48_olxkk8.jpg'/>
         </Grid>
       </Box>
       <Box px={{md: 24, base: 5}} w={"80%"}>
        <Grid pb={5}>
        <Text>
        Nitrogen Lift Operation – CAWC Well 45T, Rivers State Swamp
        </Text>
        <Text>
          <b>Client Location:</b>  <span> Rivers State Swamp, Nigeria</span>
        </Text>
        <Text>
          <b>Well:</b>  <span> CAWC 45T</span>
        </Text>
        <Text>
          <b>Service Provided:</b>  <span>Nitrogen Lift Operation </span>
        </Text>
        <Text>
          <b>Equipment Deployed:</b>  <span>HT400 Triplex Pump (Support Pumping)</span>
        </Text>
        </Grid>
        <Grid gap={5}>
          <Text>Dam Seik Services Ltd recently executed a nitrogen lift operation at CAWC Well 45T, located in the swamp terrain of Rivers State. The objective was to assist in unloading the well by displacing heavy fluid columns and enabling easier flowback, following a coil tubing intervention.
          </Text>
          <Text>Despite the challenging swamp conditions, our operations team mobilized swiftly and executed the job with precision, ensuring all safety and technical protocols were maintained.</Text>

          <Grid gap={5}>
            <b>Key Deliverables:</b>

          <UnorderedList>
            <ListItem>Successful nitrogen lift pumping support using the HT400 Triplex Pump</ListItem>
            <ListItem>Efficient well unloading to restore flow and allow further well intervention</ListItem>
            <ListItem>Coordinated operation with client’s team under strict environmental and safety controls</ListItem>
            <ListItem>Seamless execution in a remote swamp location, demonstrating Dam Seik’s adaptability and field capability</ListItem>
          </UnorderedList>

          <Text>
          This project underscores Dam Seik Services Ltd’s expertise in delivering high-pressure and nitrogen-assisted well support operations across both land and swamp terrains, using reliable equipment and skilled personnel.
          </Text>
          </Grid>
          
        </Grid> 
       </Box>
    </Grid>
    </Box>
  )
}

export default NitrogenLiftProject
