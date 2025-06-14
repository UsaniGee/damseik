import { Box, Grid, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import ServicesHero from '../ServicesHero'

const MarineSupport = () => {
  return (
    <Box pt={{md: "82px", base: "110px"}} >
    <ServicesHero />
     <Grid px={{md: 4, base: 5}} py={{md: 14, base: 5}} gridTemplateColumns={{lg: "1fr 1fr ", base: "1fr"}} gap={5} >
            <Image src='' alt=''/>
    <Grid gap={5}>
    
        <Text fontSize={"24px"} fontWeight={600}>
        Marine Engineering & Vessel Manning
        </Text>
        <Text fontSize={"16px"}>
        Dam Seik Services Ltd provides specialized marine engineering support along with certified vessel crew for offshore operations. Our services include:
          </Text>
        <UnorderedList display="grid" gap={3}>
         <ListItem>
         Vessel Manning – Provision of trained and certified personnel for marine and offshore vessels (engineers, deckhands, technicians, safety officers, etc.).
         </ListItem>
         <ListItem>
         Marine Equipment Procurement – Sourcing of marine-grade machinery, navigation tools, and safety systems.
         </ListItem>
         <ListItem>
         Onboard System Maintenance – Mechanical, hydraulic, and electrical servicing to reduce downtime and extend vessel life.
         </ListItem>
         <ListItem>
         Structural Fabrication & Repairs – Design, welding, and installation of marine components and modifications
         </ListItem>
        </UnorderedList>

        <Text fontSize={"24px"} fontWeight={600}>
        Personnel Training & Capacity Development
        </Text>
        <Text fontSize={"16px"}>
        We provide hands-on, industry-relevant training designed to prepare individuals and teams for real-world operations:
          </Text>

          <UnorderedList display="grid" gap={3}>
         <ListItem>
         Marine & Offshore Personnel Training – Covering STCW, basic seamanship, emergency response, and safety procedures.
         </ListItem>
         <ListItem>
         Oil & Gas Technical Training – For pipeline, well intervention, pressure pumping, and mechanical systems.
         </ListItem>
         <ListItem>
         HSE Certification Programs – Safety awareness, risk management, and compliance-based training.
         </ListItem>
         <ListItem>
         Leadership & Operations Management – Programs tailored for supervisors, foremen, and shift leads.
         </ListItem>
        </UnorderedList>

        <Text fontSize={"16px"}>
        Our goal is to enhance competency, safety, and productivity across your operations.
          </Text>
    </Grid>
        </Grid>
 </Box>
  )
}

export default MarineSupport
