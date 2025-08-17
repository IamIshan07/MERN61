
const User = require('../model/user');

const AddUser = async (req, res) => {
    try {
        // console.log(req,res);
        const user = new User(req.body);
        await user.save();
        return res.json({msg:"User added successfully",data:req.body});
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error",
            error: error.message
        });
    }
}
const GetUser = async (req, res) => {
    try {
        const users = await User.find();
        return res.json({msg:"Data fetched successfully",data: users,});
    } catch (error) {
        
    }
}
const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const isDelete = await User.findByIdAndDelete(id);
        if (!isDelete) {
            return res.status(404).json({msg: "User not found"});
        }
        return res.json({msg: "User deleted successfully"});
    } catch (error) {
        return res.status(500).json({
            msg: "Internal Server Error",error: error.message
        });
    }
}
const UpdateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userUpdate = await User.findByIdAndUpdate(id, req.body, {new: true});
        if (!userUpdate) {
            return res.status(404).json({msg: "User not found"});
        }
    } catch (error) {
        
    }
}

module.exports = {
    AddUser,
    GetUser,
    DeleteUser,
    UpdateUser
};