import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        require: true,
    },
    role:{
        type: Number,
        default: 0
    }
    
},{timeseries: true})

userSchema.method = {
    authenticate(password){
        return this.password == this.encryptPasword(password)
        
    },
    encryptPasword(password){
        if(!password) return
        try {
            return createHmac('sha256','abc').update(password).disgest('hex')
        } catch (error) {
            console.log(error);
            
        }
    }
}

userSchema.pre("save",(next) =>{
    this,password = this.encryptPasword(this.password)
    next()
})


export default mongoose.model("User", userSchema);