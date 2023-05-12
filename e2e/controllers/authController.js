import User from "../models/users.js";
import { getJwtToken } from "../utils/helpers.js";
import bcrypt from "bcryptjs";


// Register a new user ==> api/v1/register POST
export const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "Please enter all values" });
        }

        password = await bcrypt.hash(password, 12);

        const user = await User.create({
            name,
            email,
            password
        });

        const token = await getJwtToken(user?._id);
        res.status(201).json({ token });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                error: "Duplicate email"
            })
        }
    }
};


// Login user ==> api/v1/login POST
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please enter email and password" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({
                error: "Invalid password"
            })
        }

        const token = await getJwtToken(user._id);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
};