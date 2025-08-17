const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post("/add-user",userController.AddUser);
router.get("/get-user",userController.GetUser);
router.delete("/delete-user/:id",userController.DeleteUser);

module.exports = router;