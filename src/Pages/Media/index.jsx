import { Box } from '@chakra-ui/react'
import React from 'react'
import MediaHero from './MediaHero'

const Media = () => {
  return (
    <Box 
    // pt={{md: "82px", base: "110px"}}
     >
         <MediaHero />
    <Box px={{md: 14, base: 5}}>
        Media     
    </Box>
    </Box>
  )
}

export default Media
