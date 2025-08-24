import { Box, Flex, Grid, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import ProjectsHero from '../ProjectsHero'


const WellInterventionProject = () => {

  return (
    <Box  pb={14}>
    <ProjectsHero />      
    <Grid px={{md: 4, base: 5}} py={{md: 14, base: 14}} gridTemplateColumns={{lg: "1fr 1fr ", base: "1fr"}} gap={14} justifyContent={"center"} alignItems={"center"}>
    <Box >
         <Grid gridTemplateColumns={{md: "1fr 1fr"}} gap={5} > 
          {/* <Image display={{md: "block", base: "none"}}  h={"300px"} w={"full"} objectFit={"cover"} objectPosition={"top"} src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_2_ozcsxp.jpg'/> */}
          <Image display={{md: "block", base: "none"}}  h={"700px"} w={"full"} objectFit={"cover"} objectPosition={"center"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746442846/WhatsApp_Image_2025-05-05_at_11.09.56_hqaubl.jpg'/>
          <Image  h={"700px"} w={"full"} objectFit={"cover"} objectPosition={""}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_1_qkia8a.jpg'/>
          {/* <Image display={{md: "block", base: "none"}}  h={"300px"} w={"full"} objectFit={"cover"} objectPosition={"center"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.48_olxkk8.jpg'/> */}
         </Grid>
       </Box>
       <Box px={{lg: 2, base: 5}} >
        <Grid pb={5}>
        <Text>
          UMU15 Well Intervention – Rivers State
        </Text>
        <Text>
          <b>Client:</b>  <span>Confidential </span>
        </Text>
        <Text>
          <b>Location:</b>  <span>UMU15, Rivers State </span>
        </Text>
        <Text>
          <b>Service Areas:</b>  <span> Coil Tubing Support · Zone Change · Well Killing · Pressure Testing </span>
        </Text>     
        </Grid>
        <Grid gap={5}>
          <Text>Dam Seik Services Ltd recently supported a successful well intervention and coil tubing operation at the UMU15 field in Rivers State. The scope of work included a zone change using H₂O sealant, multi-stage flow rate testing, and B.O.P and stack-up pressure tests.
          </Text>
          <Text>Our team executed a full well washing and killing operation using a total of 155 barrels of brine, effectively reducing well pressure to zero. Final activities involved depth tagging at 8,935 ft, with 17 barrels pumped to gain full access.
          </Text>

          <Grid gap={5}>         
          <Text>
            This project reflects our capability to support complex subsurface operations with precision, safety, and operational efficiency.
          </Text>
          </Grid>          
        </Grid> 
       </Box>
    </Grid>
    </Box>
  )
}

export default WellInterventionProject
