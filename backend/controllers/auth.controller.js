
import User from "../lib/database/entities/User.js";

export const signup = async (req, res) => {
    try {
        const {email, name, password} = req.body;
        
        const userExists = await User.findOne({ email });
        
        if (!userExists.isNewRecord) return res.status(400).json({message: "User already exists"});
        const user = await User.create({name, email, password});
        
        res.status(201).json({user, message: 'User created successfully'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}

export const login = async (req, res) => {
    res.send("Login route called");
    
}

export const logout = async (req, res) => {
    res.send("Logout route called");
}

