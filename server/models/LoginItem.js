import mongoose from "mongoose";

const LoginItemSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            default: "Login"
        },
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            required: true,
            min: 8
        },
        url: {
            type: String,
            required: true,
            min: 5
        },
        favourite: {
            type: Boolean,
            default: false
        },
        folder: {
            type: String,
            default: "No folder"
        },
        status: {
            type: String,
            default: "strong"
        },
        notes: {
            type: String,
            default: ""
        }


}, { timestamps: true })

const LoginItem = mongoose.model("LoginItem", LoginItemSchema);
export default LoginItem