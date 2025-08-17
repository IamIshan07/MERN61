const UserData = require('../model/user');
const exampleApi = (req, res) => {
    res.send("Hello Worls")
}
const ShowUser = (req, res) => 
    {
    if (req) {
        return res.status(200).json({
            data: UserData, msg: "Data fetched successfully"
        });
    }
}

 module.exports = {
        exampleApi,
        ShowUser
    }
    
