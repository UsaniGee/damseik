import { Box, Image, Link as ChakraLink, textDecoration } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { none } from '@cloudinary/url-gen/qualifiers/fontHinting'
import React from 'react'

const Logo = () => {
  return (
        <ChakraLink as={Link} to='/' textDecoration={"none"} _hover={{textDecoration: "none"}} aria-label="Dam Seik Services Home">
  <Box className='flex justify-center items-center decoration-0'>
      <Box className=' aspect-square w-10 md:w-14' fontWeight={600} color={"red"}>
 
     <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744211989/Dam_Seik_Services_Limited_Logo_2-removebg-preview_xuimnd.png' alt='Dam Seik Services Limited Logo' />

    </Box>
    <Box className='pl-1' >
      <p className='font-bold text-[#5EA52F] leading-2 pt-2 '>DAM SEIK</p>
      <p className='font-bold text-[#D10205]'>SERVICES</p>
     </Box>
  </Box>
       </ChakraLink>
  )
}

export default Logo
