import { Box } from '@chakra-ui/react'
import React from 'react'
import ProjectsHero from './ProjectsHero'

const Projects = () => {
  return (
    <Box pt={{md: "82px", base: "110px"}} >
    <ProjectsHero />
    <Box px={{md: 14, base: 5}}>
      Projects
    </Box>
</Box>
 
  )
}

export default Projects
