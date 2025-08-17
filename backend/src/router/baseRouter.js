const express = require("express");
const PaymentVeryfication = require("../middleware/payementMiddleware");
const router = express.Router();
const {exampleApi, ShowUser} = require("../controller/baseController");
// const baseController = require("../controllers/baseController");
router.get("/",PaymentVeryfication,exampleApi);
router.get("/showuser",ShowUser); 



module.exports = router;