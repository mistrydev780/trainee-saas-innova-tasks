import { AppDataSource } from "../data-source.js";
import User from "../entities/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../config/token.js";

const userRepository = AppDataSource.getRepository(User);



export const signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;


        if (!name || !email || !password) {

            return res.status(400).json({

                message: "All fields are required"

            });

        }


        const existingUser = await userRepository.findOneBy({

            email

        });

        if (existingUser) {

            return res.status(400).json({

                message: "User already exists"

            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const user = userRepository.create({

            name,

            email,

            password: hashedPassword

        });


        await userRepository.save(user);



        const token = generateToken(user.id);
e

        res.cookie("token", token, {

            httpOnly: true,

            secure: false,

            sameSite: "strict",

            maxAge: 7 * 24 * 60 * 60 * 1000

        });

        return res.status(201).json({

            message: "Signup Successfully",

            user

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Internal Server Error"

        });

    }

}


export const signin = async (req, res) => {

    try {

        const { email, password } = req.body;


        if (!email || !password) {

            return res.status(400).json({

                message: "All fields are required"

            });

        }


        const user = await userRepository.findOneBy({

            email

        });

        if (!user) {

            return res.status(400).json({

                message: "User not found"

            });

        }


        const isMatch = await bcrypt.compare(

            password,

            user.password

        );

        if (!isMatch) {

            return res.status(400).json({

                message: "Invalid Password"

            });

        }


        const token = generateToken(user.id);

        res.cookie("token", token, {

            httpOnly: true,

            secure: false,

            sameSite: "strict",

            maxAge: 7 * 24 * 60 * 60 * 1000

        });

        return res.status(200).json({

            message: "Login Successfully",

            user

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Internal Server Error"

        });

    }

}



export const logout = async (req, res) => {

    try {

        res.clearCookie("token", {

            httpOnly: true,

            secure: false,

            sameSite: "strict"

        });

        return res.status(200).json({

            message: "Logout Successfully"

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Internal Server Error"

        });

    }

}

export const getMe = async (req, res) => {

    try {

        const user = await userRepository.findOneBy({

            id: req.userId

        });

        if (!user) {

            return res.status(404).json({

                message: "User Not Found"

            });

        }

        return res.status(200).json({

            message: "User Found",

            user

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Internal Server Error"

        });

    }

}

export const getUsers = async (req, res) => {

    try {

        const users = await userRepository.find();

        return res.status(200).json({

            message: "Users Fetched Successfully",

            users

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Internal Server Error"

        });

    }

}


export const getUser = async (req, res) => {

    try {

        const id = Number(req.params.id);

        const user = await userRepository.findOneBy({

            id

        });

        if (!user) {

            return res.status(404).json({

                message: "User Not Found"

            });

        }

        return res.status(200).json({

            message: "User Found",

            user

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            message: "Internal Server Error"

        });

    }

}
