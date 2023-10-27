import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const saltRounds = 10;

// REGISTER USER

export const register = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            password,
        } = req.body;
        

    
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            const newUser = new User({
                firstname,
                lastname,
                email,
                password: hash,
                recoveryEmail: ''
            });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        });

        
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// ?LOGGING IN
export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if (!user) return res.status(400).json({ msg: "User does not exist." })

        bcrypt.compare(password, user.password, async function(err, result) {
            if(result){
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
                delete user.password;
                res.status(200).json({ token, user })
            } else {
                res.status(500).json({ msg: "Invalid Credentials" })
            }
        }
    );

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}