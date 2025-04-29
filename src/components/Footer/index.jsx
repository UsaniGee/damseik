import { Box, Flex, Grid, Link } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
  return (
   <Box p={{md: 14, base: 5}} bg={"red.600"} >
      <Grid fontWeight={600} gridTemplateColumns={{md: "1fr 1fr 1fr 1fr 1fr 1fr"}} justifyContent={{md: "center"}} px={{md: "300px"}} color={"white"} w={{base: "100px" , md: "100%"}}>
      <NavLinks />
      </Grid>
       
      <Box textAlign={"center"} paddingTop={5} >
           {/* Bottom Section */}
           <div className="container mx-auto flex flex-col justify-between items-center">      

           <Flex gap={4} justify="center" mt={4}>
  {/* Facebook */}
  <Link href="#" color="white" _hover={{ color: "blue.500" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  </Link>

  {/* X (Twitter) */}
  <Link href="#" color="white" _hover={{ color: "gray.300" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.41 3H17.3l-4.22 5.56L8.57 3H3l6.95 9.07L3.33 21h3.11l4.75-6.26L15.43 21H21l-7.38-9.63L20.41 3z" />
    </svg>
  </Link>

  {/* LinkedIn */}
  <Link href="#" color="white" _hover={{ color: "blue.800" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </Link>

  {/* Instagram */}
  <Link href="#" color="white" _hover={{ color: "red.400" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </Link>
</Flex>

      </div>
    </Box>
      
   </Box>
  )
}


const NavLinks = ({ onClose }) => (
  <>
    {[
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Project', href: '/projects' },
      { name: 'Careers', href: 'careers' },
      { name: 'Media', href: '/media' },
      { name: 'Contact', href: '/contact' },     
    ].map((link) => (
      <Link
        key={link.name}
        href={link.href}
        fontSize="md"
        fontWeight={600}
        color="white"
        _hover={{ color: 'green.600' }}
        onClick={onClose}         
      >
        {link.name}
      </Link>
    ))}
  </>
);
export default Footer