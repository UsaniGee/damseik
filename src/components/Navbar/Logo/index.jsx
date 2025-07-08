import { Box, Image, Link } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
  <Box className='flex justify-center items-center'>
      <Box className=' aspect-square w-10 md:w-14' fontWeight={600} color={"red"}>
     <Link href='/'>
     <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744211989/Dam_Seik_Services_Limited_Logo_2-removebg-preview_xuimnd.png' alt='Logo' />
     </Link>
    </Box>
    <div>
      <p className='font-bold text-green-900'>DAM SEIK</p>
      <p className='font-bold text-red-700'>SERVICES</p>
     </div>
  </Box>
  )
}

export default Logo
