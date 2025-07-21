import { Box, Image, Link, textDecoration } from '@chakra-ui/react'
import { none } from '@cloudinary/url-gen/qualifiers/fontHinting'
import React from 'react'

const Logo = () => {
  return (
        <Link href='/' textDecoration={"none"} _hover={{textDecoration: "none"}}>
  <Box className='flex justify-center items-center decoration-0'>
      <Box className=' aspect-square w-10 md:w-14' fontWeight={600} color={"red"}>
 
     <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744211989/Dam_Seik_Services_Limited_Logo_2-removebg-preview_xuimnd.png' alt='Logo' />

    </Box>
    <Box className='pl-1' >
      <p className='font-bold text-[#5EA52F] leading-2 pt-2 '>DAM SEIK</p>
      <p className='font-bold text-[#D10205]'>SERVICES</p>
     </Box>
  </Box>
       </Link>
  )
}

export default Logo
