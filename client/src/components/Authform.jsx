import { Grid, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { GoogleLogin } from 'react-google-login';


const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const switchMode = () => {
    setIsSignUp((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    // Add your form submission logic here
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Handle the response from Google login (e.g., send data to server)
  };
  const googleFailure = (err)=>{
    console.log("Sign in problem",err)
  }
  const googleSuccess = (response) => {
    console.log(response)
};
  return (
    <Grid container spacing={2} direction="column" alignItems="center" padding={2}>
      <Typography variant="h5">{isSignUp ? "Sign In" : "Sign Up"}</Typography>

      <form onSubmit={handleSubmit}>
        {isSignUp ? (
          <>
            <Grid item>
              <TextField
                onChange={(e) => console.log(e.target.value)}  // Add your handler logic here
                sx={{ minWidth: "20vw" }}
                rows={1}
                multiline
                margin="dense"
                size="small"
                label="Email"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={(e) => console.log(e.target.value)}  // Add your handler logic here
                margin="dense"
                size="small"
                label="Password"
                type="password"
                fullWidth
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <TextField
                onChange={(e) => console.log(e.target.value)}  // Add your handler logic here
                sx={{ minWidth: "18vw" }}
                margin="dense"
                size="small"
                label="Email"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={(e) => console.log(e.target.value)}  // Add your handler logic here
                margin="dense"
                size="small"
                label="Password"
                type="password"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={(e) => console.log(e.target.value)}  // Add your handler logic here
                margin="dense"
                size="small"
                label="Confirm Password"
                type="password"
                fullWidth
              />
            </Grid>
          </>
        )}

        <Grid item>
            
          
          <Button sx={{ marginTop: "12px" }} type="submit" variant="contained" fullWidth>
            {isSignUp ? "Sign In" : "Sign Up"}
          </Button>
        </Grid>
      </form>

      <Grid item>
        <GoogleLogin
        clientId="256569141346-5q6ekpmmks253b24jl1p2nd0hh8crdle.apps.googleusercontent.com"
        render={(renderProps)=>( <Button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} >Google Sign In </Button>)}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
        />
        <Button
          onClick={switchMode}
          sx={{ marginTop: "2px" }}
          type="button"
          fullWidth 
        >
          {isSignUp
            ? "Already have an account? Click here to sign in"
            : "Don't have an account? Please sign up"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default AuthForm;
