const PaymenVerfication =(req,res,next)=>{
    if(req.query.isPayment){
        next()
    }else{
        res.status(400).send("Invalid Payment")
    }
}
module.exports=PaymenVerfication