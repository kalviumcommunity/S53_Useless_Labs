import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = async(userId,res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"15d"})
    return token
    // res.cookie("jwt",token,{
    //     maxAge : 15 * 60 * 60 * 1000 , //! Milliseconds Format
    //     httpOnly: true, //* Prevent Xss Attack
    //     sameSite:"strict",
    //     secure: process.env.NODE_ENV !== "development"
    // })
}

export default generateTokenAndSetCookie