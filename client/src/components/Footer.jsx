
import { Box, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#bdbdbd', color: '#fff', padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Company</Typography>
          <Typography>About Us</Typography>
          <Typography>Careers</Typography>
          <Typography>Privacy Policy</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Services</Typography>
          <Typography>Web Development</Typography>
          <Typography>App Development</Typography>
          <Typography>SEO</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Follow Us</Typography>
          <Link href="https://twitter.com" target="_blank" color="inherit">
            Twitter
          </Link>
          <br />
          <Link href="https://facebook.com" target="_blank" color="inherit">
            Facebook
          </Link>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2">&copy; 2025 Hangul. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
