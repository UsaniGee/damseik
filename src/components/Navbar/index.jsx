import React from 'react'
import Logo from './Logo'
import { Flex, Grid } from '@chakra-ui/react'
import Links from './Links'
import { px } from 'framer-motion'


const Navbar = () => {
  return (
    <Grid gridTemplateColumns={"auto auto"} justifyContent={"space-between"} py={2} px={{base: 2, md: 10}}  position={"fixed"} zIndex={10} bg={"white"} w={"full"} alignItems={"center"}>
        <Logo />
         <Links />
    </Grid>
  )
}

export default Navbar
