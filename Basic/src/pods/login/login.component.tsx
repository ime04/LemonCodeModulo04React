import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React from "react";

interface Props {
    onLogin: (username: string, password: string) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
    const { onLogin } = props;
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onLogin(username, password);
    };
    return (
        <div className="container">
            <form className="form-login" onSubmit={handleNavigation}>
                <span>Login</span>
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
        </div>
    );
};