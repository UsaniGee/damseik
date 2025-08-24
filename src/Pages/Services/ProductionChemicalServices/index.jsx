import React from 'react'
import { Box, Grid, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import ServicesHero from '../ServicesHero'

const ProductionChemicalServices  = () => {
  return (
    <Box  >
    <ServicesHero />
      <Grid px={{md: 4, base: 5}} py={{md: 14, base: 5}} gridTemplateColumns={{lg: "1fr 1fr ", base: "1fr"}} gap={5} >
        <Image src='' alt=''/>
<Grid gap={5}>

    <Text fontSize={"24px"} fontWeight={600}>
    Production Chemical Services
    </Text>
    <Text fontSize={"16px"}>
     At Dam Seik Services Limited, we specialize in delivering tailored Production Chemical Services designed to keep your oil and gas operations running smoothly, efficiently, and safely.
      </Text>
       <Text fontSize={"16px"}>
    In a complex industry where flow assurance, asset integrity, and production optimization are key, we work closely with you to select and apply specialized chemicals that match your unique conditions — from wellbore to pipeline and processing facilities. Our Services Include:
      </Text>
    <UnorderedList display="grid" gap={3}>
     <ListItem>
   Corrosion Inhibition – Prevents internal pipeline and equipment damage, extending asset life and reducing maintenance costs.
     </ListItem>
     <ListItem>
    Scale Control – Inhibits scale deposits that can restrict flow and compromise production.
     </ListItem>
     <ListItem>
     Biocide Applications – Controls microbial growth — such as sulfate-reducing bacteria — protecting against souring and microbial-induced corrosion.
     </ListItem>
     <ListItem>
     Demulsification – Facilitates the separation of water from crude oil, improving processing and delivery.
     </ListItem>
     <ListItem>
     Antifoaming – Controls and prevents foaming during production and refining operations.
     </ListItem>
     <ListItem>
     Paraffin and Asphaltene Treatments – Mitigates wax and heavy deposit formations that can affect flow and reduce throughput.
     </ListItem><ListItem>
     Hydrate Prevention – Prevents hydrate formation under high pressure and low temperature conditions, avoiding blockages and flow interruptions.
     </ListItem>
     <ListItem>
     Other Specialty Chemicals – We can customize solutions to match your unique production conditions and operational goals.
     </ListItem>     
    </UnorderedList>

</Grid>
    </Grid>
 </Box>
  )
}

export default ProductionChemicalServices 
