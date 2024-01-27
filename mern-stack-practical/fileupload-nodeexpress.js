// getting file in ui side 

app.use("/uploads", express.static("uploads"))




const fileUpload = require("express-fileupload")

app.use(fileUpload())

router.post("/imageupload",function(req,res){
    const filename = Date.now() + "-" + req.files.image.filename
    const file = req.files.image;
    let uploadPath = __dirname + "/uploads"  +filename
    file.mv(uploadPath,function(err,data){
        if(err){
            return res.send(err)
        }else {
            res.send("file uploaded successfully")
        }
    })
})
