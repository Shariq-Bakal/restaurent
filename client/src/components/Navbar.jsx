
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const navItems = ['Home', 'About', 'Contact'];

export default function Navbar() {
  const user = null;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  color='info' position="fixed" enableColorOnDark>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            Hangul
          </IconButton>
    
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hangul
          </Typography>
            <Box sx={{ flexGrow:1, display: { xs: 'none', sm: 'block', } }}>
            {navItems.map((item) => ( 
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <div>
            {user ?  (
              <Button color="inherit">Logout</Button>
            ):(
              <Button color="inherit">Login</Button>
            )}
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
