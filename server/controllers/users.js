import LoginItem from "../models/LoginItem.js";
import User from "../models/User.js";
import Folder from "../models/Folder.js";

// Add new Item

export const addItem = (req, res) => {
    try {
        const {
            email,
            type,
            name,
            username,
            value,
            url,
            favourite,
            folder,
            status,
            notes,
        } = req.body

        const newItemAdd = async () => {
            const newItem = new LoginItem({
                type,
                name,
                username,
                value,
                url,
                favourite,
                folder,
                status,
                notes,
            });
            const savedItem = await newItem.save();
            const userEmail = email;
            const user = await User.findOne({ email: userEmail });
            if(user){
            const updatedUser = await User.findOneAndUpdate(
                { email: userEmail },
                {
                    $push: { passwordList: savedItem },
                },
                { new: true}
            );
            const savedUser = await updatedUser.save()
            res.status(201).json(savedItem);
            } else {
                res.status(501).json({ message: "User does not exist"})
            }

        }
        newItemAdd()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


// Delete Existing Item

export const deleteItem = async (req, res) => {
    try {
        const { itemId, email } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
         const itemToRemove = user.passwordList.find(item => item._id == itemId)
        // Remove the item from the user's passwordList
        const itemIndex = user.passwordList.indexOf(itemToRemove);

        if (itemIndex !== -1) {
            user.passwordList.splice(itemIndex, 1);
            await user.save();
            res.status(200).json(user.passwordList);
        } else {
            res.status(404).json({ message: "Item not found in the password list" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update Existing Item

export const updateItem = async (req, res) => {
    try {
        const { email, id } = req.params;
        const updatedItem = req.body
        const user = await User.findOne({ email: email });
        const folderToEdit = user.folders.find(item => item.name == updatedItem.folder)
        

        if(folderToEdit){
            const existingItem = folderToEdit.items.find(item => item.name === newItem.name)
            if(!existingItem){
                folderToEdit.items.push(savedItem)
            }
        } else {
            res.status(500).json({ message: "Folder not found"})
        }

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
         const itemToUpdate = user.passwordList.find(item => item._id == id)
        // Update the Item in the user's passwordList
        const itemIndex = user.passwordList.indexOf(itemToUpdate);

        if (itemIndex !== -1) {
            Object.assign(itemToUpdate, updatedItem);
            await user.save();
            res.status(200).json(user.passwordList);
        } else {
            res.status(404).json({ message: "Item not found in the password list" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//New Add Folder
export const addFolder = async (req, res) => {
    try {
        const { name } = req.body
        const { email } = req.params
        const user = await User.findOne({ email: email });
        if(user){
            user.folders.push(name)
            const savedUser = await user.save();
            res.status(200).json({ message: "Folder created successfully ", folder: savedUser.folders})
        } else {
            res.status(500).json({ message: "User not found"})
        }
        

    } catch (error) {
        res.status(500).json(error)
    }
}