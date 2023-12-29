function errorhandler(message,res,next){
    if (message)res.json({messege});
    next();
};

function logger(reg,res,next){
    console.log("logger")
    next();
};

module.exports={
    errorhandler,
    logger
}