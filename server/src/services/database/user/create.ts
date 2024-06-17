import { prisma } from "../../.."

const CreateUser = async () => {
    const newUser = await prisma.user.create({
        data: {
            username,
            password,
            nameTitle,
        }
    })
}