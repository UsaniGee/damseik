import React from 'react'
import Logo from './Logo'
import { Flex, Grid } from '@chakra-ui/react'
import Links from './Links'


const Navbar = () => {
  return (
    <Grid gridTemplateColumns={"auto auto"} justifyContent={"space-between"} p={10}>
        <Logo />
         <Links />
    </Grid>
  )
}

export default Navbar
