import { getUserToLogin  } from "../services/user/AuthUser";
import { Request, Response } from "express";
import { createUser } from "../services/user/createUser";
import { getAllUsers } from "../services/user/getUsers";

export const createUserController = async (req: Request, res: Response) => {
    try {
        const userData = req.body;

        const createdUser = await createUser(userData)

        if (!userData.name || !userData.email || !userData.password) {
            return res.status(400).json({
                message: "Todos os campos devem ser preenchidos!"
            });
        }

        if(createdUser){
            res.status(201).json({
                message: "Usuario criado com sucesso!",
                data: createdUser
            })
        }else{
            res.status(400).json({
                message: "Erro ao criar usuário!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}
export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers()

        if(users){
            res.status(200).json({
                // message: "Usuários encontrados com sucesso!",
                data: users
            })
        }else{
            res.status(404).json({
                message: "Nenhum usuário encontrado!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}
export const getUserToLoginController = async (req: Request, res: Response) => {

    try {
        const userData = req.body;
        const { email, password } = userData;
        
        if (!email || !password) {
            return res.status(400).json({
                message: "Todos os campos devem ser preenchidos!"
            });
        }

        const user = await getUserToLogin(userData)
        if(user){
            res.status(200).json({
                message: "Usuário encontrado com sucesso!",
                data: user
            });
        }else{
            res.status(404).json({
                message: "Usuário não encontrado!",
            });
        }
        
    } catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        });
    }
}