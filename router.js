const router = require("express").Router();
const resumes = require("./resume")

router.get('/resumes', (req, res) =>{
    return res.send(resumes);
})