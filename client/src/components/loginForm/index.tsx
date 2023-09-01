import { Box, Button } from "@mui/joy"
import { TextField } from "@mui/material"
// import GenericButton from "../genericButton"
import { useAuth } from "../../services/UseAuthContext"
import { useNavigate } from "react-router-dom"
import React, { FormEvent } from "react"; 


const LoginForm = () => {

    const auth = useAuth()
    const navigate = useNavigate()


    const onFinish = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            await auth.authenticate(email, password);

            navigate("/");
            console.log('Login Successful');
            console.log("Login bem-sucedido");
        } catch (error) {
            console.error("Email ou senha inválidos!");
            console.log("Email ou senha inválidos");
        }
    };

        
    return (
        <div className='login-form'>
            <h2>Editar Dados</h2>
            <form onSubmit={onFinish}>
                <Box
                    component="div"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        flexDirection: 'column',
                        display: "flex"
                    }}
                >
                    <TextField id="filled-basic" name="email" label="Email" variant="outlined"/>
                    <TextField id="standard-basic" name="password" label="Senha" variant="outlined"/>
                    
                    <div>
                        <Button
                        type="submit"
                        >
                            Entrar
                        </Button>
                        {/* <GenericButton
                            onClick={handleUpdateClick}
                            icon
                            margin='0.4em 0em'
                            text='Cancelar'
                            width='250px'
                        /> */}
                    </div>
                </Box>
            </form>
            </div>
    )
}
export default LoginForm;