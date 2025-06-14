import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectsHero from '../ProjectsHero'

const HighPressurePumpProject = () => {
  return (
    <Box pt={{md: "82px", base: "110px"}} pb={14}>
      <ProjectsHero />      
       <Grid px={{md: 4, base: 5}} py={{md: 14, base: 5}}  gridTemplateColumns={{lg: "1fr 1fr ", base: "1fr"}} gap={14} >
       <Box >
           <Grid gridTemplateColumns={{md: "1fr 1fr "}} gap={14} > 
            {/* <Image display={{md: "block", base: "none"}}  h={"300px"} w={"full"} objectFit={"cover"} objectPosition={"top"} src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_2_ozcsxp.jpg'/> */}
            <Image display={{md: "block", base: "none"}}  h={"700px"} w={"full"} objectFit={"cover"} objectPosition={"top"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_mkn9vp.jpg'/>
            {/* <Image  h={"300px"} w={"full"} objectFit={"cover"} objectPosition={"top"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.49_1_qkia8a.jpg'/> */}
            <Image display={{md: "block", base: "none"}}  h={"700px"} w={"full"} objectFit={"cover"} objectPosition={"top"}  src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1746017625/WhatsApp_Image_2025-04-30_at_10.55.48_olxkk8.jpg'/>
           </Grid>
         </Box>
         <Box px={{md: 24, base: 5}} w={"80%"}>
          <Grid pb={5}>
          <Text fontSize={"20px"}> 
            High-Pressure Pumping Support for Coil Tubing Operation – Ubima, Rivers State
          </Text>
          <Text>
            <b>Client:</b>  <span>Confidential</span>
          </Text>
          <Text>
            <b>Location:</b>  <span>Ubima, Ikwerre LGA, Rivers State, Nigeria </span>
          </Text>
          <Text>
            <b>Service Provided:</b>  <span>High-Pressure Pumping  
</span>
          </Text>
          <Text>
            <b>Equipment Deployed:</b>  <span>HT400 Triplex Pump​</span>
          </Text>
          </Grid>
          <Grid gap={5}>
            <Text>
            Dam Seik Services Ltd successfully executed high-pressure pumping operations in Ubima, a key onshore oil-producing community in Rivers State. The project aimed to achieve a target well depth of 9,615 feet using coil tubing techniques, addressing challenges posed by downhole obstructions such as scale and mud accumulation.​
            ResearchGate
            </Text>
            <Text>
                <b>Project Highlights:</b>
            </Text>
            <Text>
            Precision Pumping: Utilized the HT400 Triplex Pump to deliver controlled fluid displacement at rates ranging from 0.2 to 1.0 barrels per minute.
            </Text>

            <Text>
            Volume Management: Successfully pumped over 879 barrels of brine and chemical mixtures to facilitate well cleaning and depth progression.
            </Text>

            <Text>
          <b>Pressure Testing: </b> 
          Conducted multiple stack-up pressure tests up to 2,700 psi to ensure well integrity and operational safety.
            </Text>

            <Text>
          <b>Nitrogen Lifting: </b> 
          Implemented nitrogen lift operations to assist in removing obstructions and enhancing fluid circulation.​
            </Text>

            <Text>
            This operation underscores Dam Seik’s commitment to delivering reliable, high-performance solutions using advanced equipment and experienced personnel to meet complex well intervention needs.​
            </Text>
          </Grid> 
         </Box>
       </Grid>
      </Box>
  )
}

export default HighPressurePumpProject
