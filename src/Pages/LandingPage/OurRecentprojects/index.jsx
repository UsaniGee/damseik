import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import LearnMoreButton from '../../../components/LearnMoreBtn'

const OurRecentProjects = () => {
  return (
    <Box p={{md: 24, base: 5}} bg={"#F5F5F5"} display={"grid"} gap={14}>
         <Text color={"#000000"} fontSize={"34px"}>
            Recent Projects
        </Text>
        <Grid gridTemplateColumns={{md: '1fr 1fr 1fr'}} justifyContent={"center"} gap={10}>
            <Grid gap={5}>
                <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg' alt='' />
                <Heading>
                    Hello
                </Heading>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum. Earum dolores quisquam fugiat dolore veritatis dolor nemo eum rerum!
                </Text>
                <LearnMoreButton title={"Read more"} />
            </Grid>
            <Grid gap={5}>
                <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg' alt='' />
                <Heading>
                    Hello
                </Heading>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum. Earum dolores quisquam fugiat dolore veritatis dolor nemo eum rerum!
                </Text>
                <LearnMoreButton title={"Read more"} />
            </Grid>
            <Grid gap={5}>
                <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744149111/5017_jgsf0e.jpg' alt='' />
                <Heading>
                    Hello
                </Heading>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum. Earum dolores quisquam fugiat dolore veritatis dolor nemo eum rerum!
                </Text>
                <LearnMoreButton title={"Read more"} />
            </Grid>
        </Grid>
    </Box>
  )
}

export default OurRecentProjects
