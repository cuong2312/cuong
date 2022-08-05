import User from '../model/user'
import jwt from 'jsonwebtoken'



export const signup = async(req,res) =>{
    const {email, name, pasword} = req.body
    try {
        const exisUser = await User.findOne({email}).exec()
       if(exisUser){
        res.json({
            message: "Email da ton tai"
        })
       }
       const user = await new user({email,name,pasword}).save()
       res.json({
        user:{
            role: user.role,
            name: user.name,
            email: user.email,
            _id: user.id
        }
       })
    } catch (error) {
        res.status(400).json({
            message: "dang ky khong thanh cong"
        })
    }
}

export const sigin = async(req,res) =>{
    const {email,pasword} = req.body
    try {
        const user = await User.findOne({email}).exec()
        if(!user){
            res.status(400).json({
                message: "email khong ton tai"
            })
        }
        if(!user.authenticate(pasword)){
            res.status(400).json({
                message: "mat khau khong chinh xac"
            })
        }
        const token = jwt.sign({_id: user._id},"12345",{expiresIn:60*60})
        res.json({
            token,
            user:{
                role: user.role,
                name: user.name,
                email: user.email,
                _id: user._id
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "email hoac mat khau khong chinh xac"
        })
    }
}