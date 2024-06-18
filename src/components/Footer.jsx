import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#ffffff', color:'#2f2f2f'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="AssignmentTurnedInTwoToneIcon"
            sx={{ mr: 2 }}
          >
            <AssignmentTurnedInTwoToneIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          © 2024 KartikayChugh, LLC. All rights reserved
          </Typography>
          <IconButton color="inherit" href="https://www.facebook.com" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.twitter.com" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.github.com" aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
