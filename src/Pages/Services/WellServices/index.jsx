import React from 'react'
import ServicesHero from '../ServicesHero'
import { Box, Grid, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'

const WellServices = () => {
  return (
   <Box pt={{md: "82px", base: "65px"}} >
       <ServicesHero />
           <Grid px={{md: 4, base: 5}} py={{md: 14, base: 5}} gridTemplateColumns={{lg: "1fr 1fr ", base: "1fr"}} gap={5} >
              <Image />
      <Grid gap={5}>
      
          <Text fontSize={"24px"} fontWeight={600}>
          Well Services
          </Text>
          <Text fontSize={"16px"}>
          At Dam Seik Services Ltd, we support safe and efficient well operations across the lifecycle — from drilling to production and abandonment. Our key services include:
            </Text>
          <UnorderedList display="grid" gap={3}>
           <ListItem>
           Wellbore Cleaning & Maintenance – Improve flow efficiency and extend well life.
           </ListItem>
           <ListItem>
           Well Intervention – Mechanical and pressure-based solutions to restore or enhance production.
           </ListItem>
           <ListItem>
           Coiled Tubing Services – For scale removal, acidizing, nitrogen lifting, and well stimulation.
           </ListItem>
           <ListItem>
           Pump & Pressure Services – Including high-pressure pumping (HT 400 Triplex) for cementing and stimulation.
           </ListItem>
           <ListItem>
           Well Integrity Testing – Pressure testing and diagnostics to ensure safety and compliance.
           </ListItem>
          </UnorderedList>
      
      </Grid>
          </Grid>
    </Box>
  )
}

export default WellServices
