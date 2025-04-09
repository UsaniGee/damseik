import React from 'react'
import Logo from './Logo'
import { Flex, Grid } from '@chakra-ui/react'
import Links from './Links'


const Navbar = () => {
  return (
    <Grid gridTemplateColumns={"auto auto"} justifyContent={"space-between"} p={10} position={"fixed"} zIndex={10} bg={"white"} w={"full"} >
        <Logo />
         <Links />
    </Grid>
  )
}

export default Navbar
