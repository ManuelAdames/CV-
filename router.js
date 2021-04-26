const router = require("express").Router();
const resumes = require("./resume")

router.get('/resume', (req, res) =>{
    return res.send(resumes);
})

module.exports = router;