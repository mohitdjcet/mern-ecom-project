import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signupUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if(userExists){
            return res.status(400).json({ message: "User already exists" });
        }

        //Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        //Create User
        await User.create({
            name,
            email,
            password: hashPassword
        });

        res.json({ message: "User registered successfully" });
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};