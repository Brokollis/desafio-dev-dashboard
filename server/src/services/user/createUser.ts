import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// const prisma = new PrismaClient();

export async function createUser(userData: User) {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const createdUser = await prisma.user.create({
      data: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: hashedPassword,
        token: "",
        isAdmin: userData.isAdmin,
        avatar: userData.avatar,
      },
    });

    return createdUser;
  } catch (error) {
    console.error("Erro na criação do usuário", error);
    throw error;
  }
}