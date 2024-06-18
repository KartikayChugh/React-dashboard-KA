import React from 'react'
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";


export default function About() {
  return (
    <>
        <Navbar />
        <Box height={30} />
    <Box sx={{ display: 'flex' }}>
        <Sidenav />
        {/*10. */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div>About</div>
      </Box>
    </Box>
    
    </>
    
  )
}
