import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import AboutHero from './AboutHero'
import WhoAreWe from '../LandingPage/WhoAreWe'
import LearnMoreButton from '../../components/LearnMoreBtn'
import { center } from '@cloudinary/url-gen/qualifiers/textAlignment'
import { full } from '@cloudinary/url-gen/qualifiers/fontHinting'
import { useNavigate } from 'react-router-dom'
import SEO from '../../components/SEO'

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
   <Box>
      <SEO 
        title="About Us"
        description="Learn about Dam Seik Services Limited - Over 36 years of excellence in oil & gas services. Our mission, vision, and commitment to quality engineering solutions in Nigeria."
        keywords="about dam seik, oil and gas company nigeria, pipeline services company, well services provider, marine engineering services"
      />
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
                At Dam Seik Services Ltd, we are driven by a commitment to excellence, innovation, and reliability in the Oil & Gas and Marine sectors. Established to provide quality engineering and technical services, our operations span Well Services, Marine Support, and Pipeline Integrity — ensuring efficiency, safety, and long-term asset performance for our clients. <br /><br />

                Our team comprises highly skilled professionals with years of hands-on experience across both offshore and    onshore environments. We combine local expertise with international best practices, allowing us to deliver    cost-effective solutions that meet the evolving demands of the energy industry. <br /><br />

                </Text>   
                <div className='hidden lg:block'>
                  <LearnMoreButton title='Contact Us' onClick={() => handleNavigate()} />    
                  </div>      
           </Grid>

              <Flex alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={"15px"}>
                 <Text fontSize={"16px"} display={"grid"} gap={"10px"}>
                  <p>
                  Headquartered in Port Harcourt, Nigeria, Dam Seik Services is strategically positioned to serve clients across West Africa and beyond. We work closely with our partners and clients to understand their unique operational needs, ensuring every project is executed with precision, integrity, and sustainability in mind.

                  <br /><br />
                  At Dam Seik, customer satisfaction is not just our goal — it is our promise. Through innovation, safety, and                  service excellence, we continue to support the success of our clients and the growth of the industry.
                  </p>
                  
                </Text> 
                 <Box className='lg:hidden w-full h-full flex justify-start items-end' >
                  <LearnMoreButton title='Contact Us' onClick={() => handleNavigate()}/>    
                  </Box>   
              </Flex>   
        </Grid>        
    </Box>


    <Grid gridTemplateColumns={{md: "1fr 1fr"}} p={{lg: "84px",md: "50px", base: 5}} gap={"34px"} >
         <Flex gap={"14px"}>
           <Box position="relative" w="full" h="full">
                <Image
                  src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1754126040/Frame_2147227074_tbpuua.svg"
                  alt="Dam Seik Services team and operations"
                  objectFit="cover"
                  w="full"
                  h="full"
                  borderRadius={"5%"}
                  loading="lazy"
                />

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
           <Box position="relative" w="full">
                <Image
                  src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1754126040/Frame_2147227074_1_xtaqoe.svg"
                  alt="Dam Seik Services operations and facilities"
                  objectFit="cover"
                  w="full"
                  h="100%"
                  borderRadius={"5%"}
                  loading="lazy"
                />

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
               <Image 
                 src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1744955126/2149354008_nlrbbs.jpg' 
                 alt='Dam Seik Services quality policy and standards' 
                 borderRadius={"5%"}
                 loading="lazy"
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
            </Box>       
        </Grid>


    <Box bg="#F9FAFB" py={{ base: 10, md: 20 }}>

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
                alt={`${item.id} - Client of Dam Seik Services`}
                maxH="100px"
                objectFit="contain"
                loading="lazy"
              />
            </Box>
          ))}
        </Grid>
      </Grid>

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
                alt={`${item.id} - Client of Dam Seik Services`}
                maxH="100px"
                objectFit="contain"
                loading="lazy"
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
