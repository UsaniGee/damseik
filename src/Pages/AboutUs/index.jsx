import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import AboutHero from './AboutHero'
import WhoAreWe from '../LandingPage/WhoAreWe'
import LearnMoreButton from '../../components/LearnMoreBtn'
import { center } from '@cloudinary/url-gen/qualifiers/textAlignment'
import { full } from '@cloudinary/url-gen/qualifiers/fontHinting'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
const clients = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939085/shell_we0rhr.jpg",
     id: "Shell"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Total_ak3xt5.jpg",
     id: "Total"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939085/NNPC_hxrs9q.jpg",
     id: "NNPC"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Agip_qjkvha.jpg",
    id: "Agip Oil"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745939086/Mobil_zbfvom.jpg",
    id: " Mobil"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745940408/Juesco_b1ds4z.jpg",
    id: "Juesco"
  },
]

const partners = [
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745937585/topline_limited_logo_jtnmj7.jpg",
    id: "Topline"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745937810/Serock_tavnle.jpg",
    id: "Serock"
  },
  {
    image: "https://res.cloudinary.com/dnu4lxiie/image/upload/v1745937663/doxa_int_l_engineering_services_ltd_logo_tpacab.jpg",
    id: "Doxa"
  },
  {
    image: "",
    id: "Anikor",
  }
]
 const navigate = useNavigate()
const handleNavigate = () => {
  navigate("/contact")
}

  return (
   <Box
    // 
     >
      <AboutHero />
      <Box bg={"#F5F5F5"}>
        <Grid gridTemplateColumns={{md: "1fr 1fr"}} p={{lg: "84px",md: "50px", base: 5}} gap={{base: "10px", md: "48px"}} gri>
          
           <Grid gap={5}>
              <Box>
                  <Text color={"#D10205"} fontSize={{base: "16px", md: "20px"}}>
                    DAM SEIK
                </Text>
                <Text color={"#5EA52F"} fontSize={{base: "26px", md: "48px"}} fontWeight={400}>
                  Powering Oil & Gas
                </Text>
              </Box>
                <Text fontSize={"16px"}>
                Dam Seik Services Limited is an indigenous oil and gas servicing company in Nigeria providing innovative and cost effective services that have panned the better of 16 years.
                 <br /> 
                The Company has well structured administrative, sales and technical departments, professionally equipped to attend to clients needs. 
                </Text>   
                <div className='hidden lg:block'>
                  <LearnMoreButton title='Contact Us' onClick={() => handleNavigate()} />    
                  </div>      
           </Grid>

              <Flex alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={"15px"}>
                 <Text fontSize={"16px"} display={"grid"} gap={"10px"}>
                  <b>Incorporated in Nigeria with</b> 
                   <div>
                    <b>Head office located at; </b>No 10 Second Avenue Federal Housing Estate Rumuemue, mile 4, Warehouse Plot 224 lyowuna Drive Trans Amadi Industrial Layout, PH.
                    </div> 
                    <div>
                      <b>UK Office; </b>7 Linley Dell, stopsley Luton Bedfordshire Lu 28 TJUK, fax 01592612068.
                    </div>
                </Text> 
                 <Box className='lg:hidden w-full h-full flex justify-start items-end' >
                  <LearnMoreButton title='Contact Us' onClick={() => handleNavigate()}/>    
                  </Box>   
              </Flex>   
        </Grid>        
    </Box>



      

    {/* Mission, Vision, Comittment */}
    <Grid gridTemplateColumns={{md: "1fr 1fr"}} p={{lg: "84px",md: "50px", base: 5}} gap={"34px"} >
         <Flex gap={"14px"}>
               {/* Image */}
           <Box position="relative" w="full" h="full">
                <Image
                  src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1754126040/Frame_2147227074_tbpuua.svg"
                  alt="Hero"
                  objectFit="cover"
                  w="full"
                  h="full"
                  borderRadius={"5%"}
                />

                {/* Overlay */}
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="100%"
                  h="100%"
                   bg="rgba(000, 000, 000, 0.3)"
                  pointerEvents="none"
                  zIndex={1}
                  borderRadius={"5%"}
                />
            </Box>

            <Grid  width={"full"} gap={"14px"}>
                   {/* Image */}
           <Box position="relative" w="full">
                <Image
                  src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1754126040/Frame_2147227074_1_xtaqoe.svg"
                  alt="Hero"
                  objectFit="cover"
                  w="full"
                  h="100%"
                  borderRadius={"5%"}
                />

                {/* Overlay */}
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="100%"
                  h="100%"
                  bg="rgba(000, 000, 000, 0.3)"
                  pointerEvents="none"
                  zIndex={1}
                  borderRadius={"5%"}
                />
            </Box>
            <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}  borderRadius={"5%"}  className='bg-[#0D1806] text-white px-1 py-[20px]'>
              <Text className='text-[40px]'>20+</Text>
              <Text className='text-[16px] text-center'>Years of Experience</Text>
            </Flex>
            </Grid>
         </Flex>

         <Grid gap={"24px"}>
    
            <Grid gap={5} className='bg-[#5EA52F1A] group hover:bg-[#5EA52F] p-[24px] transition-all duration-200 ease-in-out rounded-[24px] hover:text-white'>
            <Text fontWeight={600} fontSize={"20px"} className='group-hover:bg-[#fff] group-hover:text-[#5EA52F] w-fit h-fit px-[8px] py-[4px] rounded-[8px]'>Our Mission</Text>
            <Text>Dam Seik Services Limited mission is to remain the world’s leading provider of un-interrupted quality services.</Text>
          </Grid>

        
            <Grid gap={5} className='bg-[#5EA52F1A] group hover:bg-[#5EA52F] p-[24px] transition-all duration-200 ease-in-out rounded-[24px] hover:text-white'>
           <Text fontWeight={600} fontSize={"20px"} className='group-hover:bg-[#fff] group-hover:text-[#5EA52F] w-fit h-fit px-[8px] py-[4px] rounded-[8px]'>Our Vision</Text>
            <Text>Our vision is to be the reference point in the provision of quality and professional Engineering support services in the oil and gas industry Globally.</Text>
          </Grid>
  
         <Grid gap={5} className='bg-[#5EA52F1A] group hover:bg-[#5EA52F] p-[24px] transition-all duration-200 ease-in-out rounded-[24px] hover:text-white'>
            <Text fontWeight={600} fontSize={"20px"} className='group-hover:bg-[#fff] group-hover:text-[#5EA52F] w-fit h-fit px-[8px] py-[4px] rounded-[8px]'>Our Commitment</Text>
            <Text>To provide Innovative and cost effective services For the Oil and Gas Industry in Nigeria. Our Experience, Professionalism and Robust Experienced Team will be harnessed to meet and exceed expectations.
            </Text>
          </Grid>

         </Grid>
        </Grid>

         {/* Quality Policy */}
         <Grid p={{lg: "84px",md: "50px", base: 5}} gap={10}  bg={"#F5F5F5"}>
         
            <Box display={"grid"} gridTemplateColumns={{md: "1fr 1fr"}} gap={10} alignItems={"center"} >
              <Box>
                  <Box>
                  <Text color={"#D10205"} fontSize={{base: "16px", md: "20px"}}>
                    QUALITY POLICY
                </Text>
                <Text color={"#5EA52F"} fontSize={{base: "26px", md: "48px"}} fontWeight={400}>
                  Policy for Peak Performance
                </Text>
              </Box>
              <Text>
              It is the policy of DAM SEIK SERVICES LIMITED to provide an effective and efficient Engineering Installation, inspection, test and allied services that meet and exceed customer expectations, regulatory and statutory requirement at optimal cost and also to continually improve the Company Quality Management System for effectiveness. This Quality Policy is communicated, understood and implemented throughout the Company and is continually reviewed for continuing suitability.
              </Text>
              </Box>
             <Box position={"relative"}>
               <Image src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744955126/2149354008_nlrbbs.jpg' alt='Quality Policy' borderRadius={"5%"}/>
                {/* Overlay */}
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="100%"
                  h="100%"
                  bg="rgba(000, 000, 000, 0.3)"
                  pointerEvents="none"
                  zIndex={1}
                  borderRadius={"5%"}
                />
             </Box>
            </Box>       
        </Grid>


    <Box bg="#F9FAFB" py={{ base: 10, md: 20 }}>
      {/* Our Clients */}
      <Grid gap={8} px={{ base: 5, md: 24 }} textAlign="center">
        <Text
          color="#D10205"
          fontSize={{ base: '24px', md: '36px' }}
          fontWeight="600"
        >
          OUR CLIENTS
        </Text>
        <Grid
          gridTemplateColumns={{
            base: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(6, 1fr)',
          }}
          gap={{ base: 6, md: 10 }}
          alignItems="center"
          justifyContent="center"
        >
          {clients.map((item, index) => (
            <Box
              key={index}
              p={4}
              borderRadius="lg"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="sm"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'lg',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Image
                src={item.image}
                alt={item.id}
                maxH="100px"
                objectFit="contain"
              />
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* Our Partners */}
      <Grid gap={8} px={{ base: 5, md: 24 }} mt={{ base: 12, md: 16 }} textAlign="center">
        <Text
          color="#D10205"
          fontSize={{ base: '24px', md: '36px' }}
          fontWeight="600"
        >
          OUR PARTNERS
        </Text>
        <Grid
          gridTemplateColumns={{
            base: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(5, 1fr)',
          }}
          gap={{ base: 6, md: 10 }}
          alignItems="center"
          justifyContent="center"
        >
          {partners.map((item, index) => (
            <Box
              key={index}
              p={4}
              borderRadius="lg"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="sm"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'lg',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Image
                src={item.image}
                alt={item.id}
                maxH="100px"
                objectFit="contain"
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>


    </Box>
  )
}

export default AboutUs
