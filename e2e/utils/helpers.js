import jwt from "jsonwebtoken";

async function getJwtToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY_TIME
    })
}

export { getJwtToken };