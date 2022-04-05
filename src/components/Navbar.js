import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const logOut = async () => {
      await signOut(auth)
      navigate("/login")

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 2rem",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
            onClick={() => navigate("/")}
          >
            Movie App
          </IconButton>
          <Box>
            {currentUser ? (
              <Button color="inherit">{currentUser.displayName}</Button>
            ) : (
              <Button onClick={() => navigate("/login")} color="inherit">login</Button>
            )}
            {currentUser ? (
              <Button onClick={() => logOut()} color="inherit">logout</Button>
            ) : (
              <Button onClick={() => navigate("/register")} color="inherit">register</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
