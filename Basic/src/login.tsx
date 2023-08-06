import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, InputLabel } from "@mui/material";
import { FormControl } from '@mui/material';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <form className="form-login" onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>

        <div>
          <FormControl fullWidth className="input-form" margin="normal">
            <InputLabel>Username: </InputLabel>
            <Input fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth className="input-form" margin="normal">
            <InputLabel>Password: </InputLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </div>
        <Button variant="contained" type="submit">Login</Button>
      </form>
    </>
  );
};