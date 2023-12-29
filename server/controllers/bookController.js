let users=[
    {
        name:"nafis", id:2

    }
]

exports.Getbooks = (req,res,next) => {
    const {id} = req.params;
    let findeduser = users.find((user)=>user.id==id);
    // if (!findeduser) ErrorHandler("user not found",res,next);

    res.json({
        books:findeduser,
    })
} 