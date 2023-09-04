import {Schema, model, models} from "mongoose"

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, "Email is required"],
    },
    userName: {
        type: String,
        unique: [true, "username already exists"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    }
})

const User = models.User || model("User", userSchema)

export default User