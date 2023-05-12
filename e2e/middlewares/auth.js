import jwt from "jsonwebtoken";

import User from "../models/users.js";

export const isAuth = async (req, res, next) => {
    try {
        if (!req?.headers?.authorization?.startsWith("Bearer")) {
            return res.status(403).json({ error: "Missin auth token in header" });
        }

        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ error: "Authentication failed" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id);

        next();
    } catch (err) {
        return res.status(500).json({
            error: "User authentication failed"
        })
    }
}