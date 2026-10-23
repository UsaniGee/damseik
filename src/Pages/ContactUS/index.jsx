import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import { CONTACT_EMAIL } from '../../config/site'

const Contact = () => {
  return (
   <Box>
      <ContactHero />
      <Box p={{md: 24, base: 5}}>
         <Grid gridTemplateColumns={{md: "1fr 1fr 1fr"}} gap={20}>
          <Box display={"grid"} gap={5}>
            <Text fontWeight={600} fontSize={"20px"}>
              Port Harcourt
            </Text>
            <Text>
            5 Eusco Estate, Destiny Drive, Okuru-Ama, Off Peter Odili Road, Port harcourt, Rivers State
            </Text>
            <Text as="a" href="tel:+2348033433350">
            (+234) (0) 803 343 3350
            </Text>
            <Text as="a" color="#D10205" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </Text>
          </Box>
          <Box display={"grid"} gap={5}>
            <Text fontWeight={600} fontSize={"20px"}>
              United Kingdom
            </Text>
            <Text>
            UK Office7 Linley Dell,stopsley Luton Bedfordshire Lu 28 TJUK, fax 01592612068.
            </Text>
            <Text as="a" href="tel:+2348033433350">
            (+234) (0)  803 343 3350
            </Text>
            <Text as="a" color="#D10205" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </Text>
          </Box>
          <Box>
            
          </Box>
          </Grid>      
      </Box>
      <ContactForm />

    </Box>
  )
}

export default Contact
