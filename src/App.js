import { Box, Typography, IconButton, ButtonGroup, Button, Avatar } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import ChartComponent from './Components/Chart';
import Add from './Components/Add';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import View from './Components/View';
import LoginButton from './Components/Login';
import LogoutButton from './Components/Logout';

function App() {
  const [showComponent, setShowComponent] = useState('add');
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className='App'>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 5 }}>
        <Typography variant='h3'>FinanSense™</Typography>
        <Typography sx={{ color: 'grey' }} variant='caption'>Designed and built by Håkon Sunde</Typography>
        <Box sx={{ display: 'flex', marginBottom: 3 }}>
          <IconButton href='https://x.com/lordsunde' target='_blank' disableRipple sx={{ backgroundColor: 'transparent' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton href='https://www.instagram.com/sunde.hakon/' target='_blank' disableRipple sx={{ backgroundColor: 'transparent' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href='https://github.com/sundehakon' target='_blank' disableRipple sx={{ backgroundColor: 'transparent' }}>
            <GitHubIcon />
          </IconButton>
          <IconButton href='https://sundehakon.tech/' target='_blank' disableRipple sx={{ backgroundColor: 'transparent' }}>
            <LanguageIcon />
          </IconButton>
        </Box>
        {!isAuthenticated && 
          <Box sx={{ marginBottom: 3 }}>
            <LoginButton />
          </Box>
        }
        {isAuthenticated &&
          <div>
            <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 1 }}>
              <LogoutButton />
              <Avatar alt='User picture' src={user.picture} />
              <Typography>{user.nickname}</Typography>
            </Box>
            <ChartComponent />
            <ButtonGroup variant='contained' color='secondary' sx={{ marginTop: 4 }}>
              <Button onClick={() => setShowComponent('add')}>Add Expenses</Button>
              <Button onClick={() => setShowComponent('view')}>View Expenses</Button>
            </ButtonGroup>
            {showComponent === 'add' &&
              <Add />
            }
            {showComponent === 'view' &&
              <View />
            }
          </div>
        }
      </Box>
    </div>
  );
}

export default App;
