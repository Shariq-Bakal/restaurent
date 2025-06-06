
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Grid
} from '@mui/material';

const Reservations= () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    subscribe: false,
    plan: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
    <Box sx={{mx:'auto',width:'fit-content'}}>
        <Typography variant='h3'>Book a Table Now</Typography>
    </Box>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 3,
        boxShadow: 1,
        borderRadius: 2,
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr",
        gap : 2,
        marginTop: 2
      }}
    >
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        margin="normal"
        required
        size='small'
      />

      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        margin="normal"
        required
        size='small'
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
        size='small'
      />

      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
        size='small'
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
        size='small'
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
        size='small'
      />
       <Button 
    variant="contained"
    sx={{
      gridColumn: "1 / -1", // Makes the button span all columns
      justifySelf: "center", // Centers horizontally
      width: "fit-content", // Makes button only as wide as its content
      mt: 2 // Optional margin top
    }}
  >
    Centered Button
  </Button> 
    </Box>
    </>
    
  );
};

export default Reservations;