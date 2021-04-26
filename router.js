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

//work route
router.get('/resume/work/', (req, res) =>{
    return res.send(resumes[0].work);
})

//volunteer route
router.get('/resume/volunteer/', (req, res) =>{
    return res.send(resumes[0].volunteer);
})

//education route
router.get('/resume/education/', (req, res) =>{
    return res.send(resumes[0].education);
})

//awards route
router.get('/resume/awards/', (req, res) =>{
    return res.send(resumes[0].awards);
})

//publications route
router.get('/resume/publications/', (req, res) =>{
    return res.send(resumes[0].publications);
})

//skills route
router.get('/resume/skills/', (req, res) =>{
    return res.send(resumes[0].skills);
})

//interests route
router.get('/resume/interests/', (req, res) =>{
    return res.send(resumes[0].interests);
})

//languages route
router.get('/resume/languages/', (req, res) =>{
    return res.send(resumes[0].languages);
})

//references route
router.get('/resume/references/', (req, res) =>{
    return res.send(resumes[0].references);
})


module.exports = router;