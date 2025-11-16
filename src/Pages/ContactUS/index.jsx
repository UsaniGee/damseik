import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import SEO from '../../components/SEO'

const Contact = () => {
  return (
   <Box>
      <SEO 
        title="Contact Us"
        description="Get in touch with Dam Seik Services. Contact our team for inquiries about oil & gas services, pipeline maintenance, well services, and marine support."
        keywords="contact dam seik, inquiry, oil and gas services contact, pipeline services contact"
      />
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
            <Text as="a" color="#D10205" href="mailto:inquiries@damseikservices.com">
              inquiries@damseikservices.com
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
            <Text as="a" color="#D10205" href="mailto:inquiries@damseikservices.com">
              inquiries@damseikservices.com
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
