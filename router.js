const router = require("express").Router();
const resumes = require("./resume")


////////////////GET section//////////////////////////
router.get('/resume', (req, res) =>{
    return res.send(resumes);
})

//basics route
router.get('/resume/basics/', (req, res) =>{
    return res.send(resumes[0].basics);
})

//basics key routes
router.get('/resume/basics/:key', (req, res) =>{
    const key = req.params.key;
    if(key in resumes[0].basics){
        return res.send(resumes[0].basics[key]);
    }
    else 
        return res.status(404).send("Page not found :(");
})

module.exports = router;