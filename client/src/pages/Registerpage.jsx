import { Grid, Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import Layout from "../components/Layout";
const RegisterPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // This effect will run when formData changes
  useEffect(() => {
    console.log(formData); // Logs the formData state when it changes
  }, [formData]);

  const { name, email, password, password2 } = formData;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    // Add your form submission logic here
    console.log("Form Submitted:", formData);
  };

  return (
    <>
    <Layout>
    <Grid container spacing={2} direction="column" alignItems="center" padding={2}>
      <Typography variant="h5">Sign up</Typography>

      <form onSubmit={handleSubmit}>
        <Grid item>
          <TextField
            sx={{ minWidth: "18vw" }}
            margin="dense"
            size="small"
            label="Name"
            type="text"
            fullWidth
            name="name"
            value={name}
            onChange={onChange}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ minWidth: "18vw" }}
            margin="dense"
            size="small"
            label="Email"
            type="email"
            fullWidth
            name="email"
            value={email}
            onChange={onChange}
          />
        </Grid>
        <Grid item>
          <TextField
            margin="dense"
            size="small"
            label="Password"
            type="password"
            fullWidth
            name="password"
            value={password}
            onChange={onChange}
          />
        </Grid>
        <Grid item>
          <TextField
            margin="dense"
            size="small"
            label="Confirm Password"
            type="password"
            fullWidth
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </Grid>

        <Grid item>
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            {isSignUp ? "Sign Up" : "Log In"}
          </Button>
        </Grid>
      </form>
      
      {/* You can add Google Login here if needed */}
      {/* <GoogleLogin 
        clientId="YOUR_GOOGLE_CLIENT_ID" 
        buttonText="Login with Google" 
        onSuccess={responseGoogle} 
        onFailure={responseGoogle} 
      /> */}
    </Grid>
    </Layout>
    </>
  );
};

export default RegisterPage;
