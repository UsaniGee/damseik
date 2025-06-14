import React from 'react'
import ServicesHero from '../ServicesHero'
import { Box, Grid, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'

const PipelineFacility = () => {
  return (
    <Box pt={{md: "82px", base: "110px"}} >
    <ServicesHero />
      <Grid px={{md: 4, base: 5}} py={{md: 14, base: 5}} gridTemplateColumns={{lg: "1fr 1fr ", base: "1fr"}} gap={5} >
        <Image src='' alt=''/>
<Grid gap={5}>

    <Text fontSize={"24px"} fontWeight={600}>
    Pipeline Maintenance
    </Text>
    <Text fontSize={"16px"}>
      At Dam Seik Services Ltd, we help keep your pipelines running safely and efficiently. Our services cover:
      </Text>
    <UnorderedList display="grid" gap={3}>
     <ListItem>
     Hot Tapping & Live Repairs – Modify pipelines without shutting them down.
     </ListItem>
     <ListItem>
     Cleaning & Pigging – Remove deposits, improve flow, and prepare for inspections.
     </ListItem>
     <ListItem>
     Pipeline Testing – Hydrotesting, dewatering, drying, and nitrogen purging.
     </ListItem>
     <ListItem>
     Integrity & Corrosion Control – We inspect, monitor, and protect pipelines from damage.
     </ListItem>
     <ListItem>
     Valve Maintenance – Ensure every control point operates smoothly and reliably.
     </ListItem>
    </UnorderedList>

</Grid>
    </Grid>
 </Box>
  )
}

export default PipelineFacility
