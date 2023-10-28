import mongoose from "mongoose";

const FolderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            max: 20
        },
        items: {
            type: Array,
            default: []
        }
    }, { timestamps: true }
)

const Folder = mongoose.model("Folder", FolderSchema);
export default Folder