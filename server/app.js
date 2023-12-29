const express = require ('express');
const cors = require ('cors');
const bookroutes =require('./routes/bookrouter');
const app =express();

    let usere=[

    ];

app.use(cors());
app.use(express.json());
app.use("/api/book",bookroutes);


app.get('/',(reg,res)=>{
    res.json('hello')
    })

    app.listen(4000,()=>{
        console.log("is ok");
    });