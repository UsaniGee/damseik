import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkipToContent from '../components/SkipToContent'
import Analytics from '../components/Analytics'

const Root = () => {
  return (
    <Box position="relative">
      <Analytics />
      <SkipToContent />
      <Box id="main-content">
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  )
}

export default Root
