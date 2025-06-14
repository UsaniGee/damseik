import { Box, Grid, Heading, Text, Image, Link } from '@chakra-ui/react'
import React from 'react'
import ProjectsHero from './ProjectsHero'
import {projects} from '../LandingPage/OurRecentprojects'
import LearnMoreButton from '../../components/LearnMoreBtn'

const Projects = () => {
  return (
    <Box pt={{md: "82px", base: "110px"}} >
    <ProjectsHero />
    <Grid gridTemplateColumns={{md: '1fr 1fr 1fr'}} justifyContent={"center"} gap={5} p={{md:10, base: 5}}>
            {projects.map((item, index) => (
                <Grid key={index} gap={5}>
                <Image h={"200px"} w={"full"} objectFit={"cover"} objectPosition={"10px -60px"} transition="transform 0.4s ease-in-out" _hover={{ transform: "scale(1.1)",  cursor: "pointer", }} src={item.image} alt='' />
                <Heading fontSize={"20px"}>
                {item.title}
                </Heading>
                <Text>
                {item.subTitle}
                </Text>
                <Link href={item.id}>
                <LearnMoreButton border={"1px solid red"} title={"Read more"} />
                </Link>
            </Grid>
            ))}
          </Grid>
</Box>
 
  )
}

export default Projects
