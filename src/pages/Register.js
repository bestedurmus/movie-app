import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import React from "react";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../auth/firebase-config";

const Schema = Yup.object().shape({
  username: Yup.string()
    .required("Display name is required")
    .min(2, "Too short")
    .max(15, "Must be 15 char or less"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!?.@#$%^&*()-+]+/, "Password must have a special char"),
  confirm: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: Schema,
    onSubmit:async (values) => {
      try {
        let user = await createUserWithEmailAndPassword(auth, values.email, values.password)
        console.log(user)
        await updateProfile(auth.currentUser, {displayName: values.username})
        navigate("/")
        
      } catch (error) {
        alert(error.message)
      }
    }
  });

  return (
    <Container
      sx={{
        height: "32rem",
        marginTop: "1rem",
        bgcolor: "Background.paper",
        boxShadow: 2,
        borderRadius: 2,
        textAlign: "center",
        padding: "1rem",
      }}
      maxWidth="sm"
    >
      <Avatar
        sx={{
          margin: "auto",
          bgcolor: "primary.main",
        }}
      >
        <PersonAddAltIcon />
      </Avatar>
      <Typography sx={{ marginTop: "1rem", marginBottom: "1rem" }} variant="h4">
        Register
      </Typography>
      <Formik>
        {({
          values,
          handleSubmit,
          touched,
          errors,
          handleBlur,
          handleChange,
        }) => (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="username"
                  label="User Name"
                  variant="outlined"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.username && formik.errors.username}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.email && formik.errors.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.password && formik.errors.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="confirm"
                  label="Confirm"
                  type="password"
                  variant="outlined"
                  value={formik.values.confirm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.confirm && formik.errors.confirm}
                  error={
                    formik.touched.confirm && Boolean(formik.errors.confirm)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" type="submit">
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
