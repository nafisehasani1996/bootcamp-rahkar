function logger(reg ,res,next){
    console.log ("logger")
    next();
}

model.exports=logger;