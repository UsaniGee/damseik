import { Box, Grid, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import LearnMoreButton from '../../../components/LearnMoreBtn'


export const projects = [
    {
        image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745947383/Um15_wrriqn.jpg",
        title: "UMU15 Well Intervention – Rivers State",
        subTitle: "Dam Seik Services Ltd recently supported a successful well intervention and coil tubing operation at the UMU15 field in Rivers State. The scope of work included a zone change using H₂O sealant, multi-stage flow rate testing, and B.O.P and stack-up pressure tests.",
        id: "projects/well-intervention-rivers-state"
    },
    {
        image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1746446912/What-is-Coiled-Tubing_yetqt5.webp",
        title: "High-Pressure Pumping Support for Coil Tubing Operation – Ubima, Rivers State",
        subTitle: "Dam Seik Services Ltd successfully executed high-pressure pumping operations in Ubima, a key onshore oil-producing community in Rivers State. The project aimed to achieve a target well depth of 9,615 feet using coil tubing techniques, addressing challenges posed by downhole obstructions such as scale and mud accumulation.​ResearchGate",
         id: "projects/high-Pressure-pumping-support-for-coil-tubing-operation-rivers-state"
    },
    {
        image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1752248671/IMG_0537_hbtoel.jpg",
        title: "Nitrogen Lift Operation – CAWC Well 45T, Rivers State Swamp",
        subTitle: "Dam Seik Services Ltd recently executed a nitrogen lift operation at CAWC Well 45T, located in the swamp terrain of Rivers State. The objective was to assist in unloading the well by displacing heavy fluid columns and enabling easier flowback, following a coil tubing intervention.",
        id: "projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp"
    },
    {
        image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1746453400/WhatsApp_Image_2025-05-05_at_13.29.01_q5urwx.jpg",
        title: "Water Re-Injection Project – Umusadege 1, Kwale, Delta State",
        subTitle: "Dam Seik Services Ltd successfully executed a high-volume water re-injection project for Midwestern Oil & Gas at the Umusadege 1 wellsite in Kwale, Delta State. The operation was designed to support reservoir pressure maintenance and enhance oil recovery through sustained water re-injection.",
        id: "projects/water-re-injection-project-umusadege-1-kwale-delta-state"
    },  

]

const OurRecentProjects = () => {


  return (
    <Box p={{lg: "84px",md: "50px", base: 5}} bg={"#F5F5F5"} display={"grid"} gap={14}>
         <Text color={"#5EA52F"} fontSize={{base: "26px", md: "48px"}} fontWeight={400}>
            Recent Projects
        </Text>
        <Grid gridTemplateColumns={{md: '1fr 1fr 1fr'}} justifyContent={"center"} gap={5}>
            {projects.slice(0,3)?.map((item, index) => (
                <Grid key={index} gap={5}>
               <Box h={"300px"}  overflow="hidden">
                 <Image 
                 h={"300px"} 
                 w={"600px"} 
                 objectFit={"cover"} 
                 transition="transform 0.4s ease-in-out"  
                 _hover={{ transform: "scale(1.1)",  cursor: "pointer" }} 
                 src={item.image} alt='' />
               </Box>
{/* 
               <Box w="600px" h="200px" overflow="hidden">
  <Image
    w="600px"
    h="200px"
    objectFit="cover"
    transition="transform 0.4s ease-in-out"
    _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
    src={item.image}
    alt=""
  />
</Box> */}
                <Heading fontSize={"20px"}>
                {item.title}
                </Heading>
                <Text>
                {item.subTitle.length > 120 ? item.subTitle.slice(0,120) + "...": item.subTitle}
                </Text>
               <Link href={item.id}>
               <LearnMoreButton  title={"Read more"} />
               </Link>
            </Grid>
            ))}
        </Grid>
    </Box>
  )
}

export default OurRecentProjects
