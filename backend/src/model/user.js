// const UserData = [
//     {
//         name: 'John Doe',
//         age: 30,
//         college: 'Harvard University',
//     },
//     {
//         name: 'Jane Smith',
//         age: 25,
//         college: 'Stanford University',
//     },
//     {
//         name: 'Alice Johnson',
//         age: 28,
//         college: 'MIT',
//     },
//     {
//         name: 'Bob Brown',
//         age: 22,
//         college: 'University of California, Berkeley',
//     },
// ]
// module.exports = UserData;




const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})


const User  = mongoose.model('User', userSchema);
module.exports = User;