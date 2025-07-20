import { Grid, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { GoogleLogin } from 'react-google-login';
import Layout from "../components/Layout";
import Categories from "../components/Categories";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log(formData);
  };

  const { email, password } = formData;

  return (
    <>
      <Layout>
        <Grid container spacing={2} direction="column" alignItems="center" padding={2}>
          <Typography variant="h5">Login</Typography>

          <form onSubmit={handleSubmit}>
            <Grid item>
              <TextField
                sx={{ minWidth: "20vw" }}
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
              <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Login
              </Button>
            </Grid>
          </form>
        </Grid>
        <Categories/>
      </Layout>
    </>
  );
};

export default LoginPage;
