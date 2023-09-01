import React, { FormEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios"; 

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/users", formData);

            console.log("User registration successful!", response.data);
        } catch (error) {
            console.error("User registration failed:", error);
        }
    };

    return (
        <div className="sign-up-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <Box
                    component="div"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                        flexDirection: "column",
                        display: "flex",
                    }}
                >
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Button type="submit" variant="contained" color="primary">
                            Sign Up
                        </Button>
                    </div>
                </Box>
            </form>
        </div>
    );
};

export default SignUp;
