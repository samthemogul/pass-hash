import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        lastname: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        recoveryEmail: {
            type: String,
            default: "",
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        picturePath: {
            type: String,
            default: "",
        },
        passwordList: {
            type: Array,
            default: [],
        },
        folders: {
            type: Array,
            default: [],
        },
        passwordSettings: {
            type: Object,
            default: {
                passwordLength: 12,
                includeCapitals: true,
                includeSmall: true,
                includeNumbers: true,
                includeSymbols: true,
            }
        },
        usernameSettings: {
            type: Object,
            default: {
                capitalize: true,
                includeDigits: true
            }
        }
    }, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User
