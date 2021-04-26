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
////////////////HEAD section//////////////////////////

router.head('resumes', (req,res)=>{
    return res.send(resumes)
})

router.head('/resume/basisc/:key', (req,res) =>{
    if(key in resumes[0].basics){
        return res.send(messages[0].basics[key]);
    }
    else
        return res.status(404).send("page not found");
})


////////////////POST section//////////////////////////

router.post('/resume', (req, res) => {
    const newkey = req.body;
    if(newkey.section){
        newkey.section = newkey.section.trim()
        if (newkey.section.length > 0) {
            if (newkey.section in resumes[0])
                return res.status(400).send("Section '" + newkey.section + "' already exists")
            
            resumes[0][newkey.section] = newkey.data ? newkey.data: {}
            return res.send(resumes[0][newkey.section])
        }
        return res.status(400).send("Key must contain at least 1 letter")
    }
    return res.status(400).send("'section' key is required")

})

//POST format example 
// {
//     "section": "favorite food",
//     "data":{
//         "name": "chicharron"
//     }
// }

////////////////PUT section//////////////////////////

router.put('/resume/:key', (req, res) =>{
    const newkey = req.body;
    const topLevel = req.params.key;
    if(newkey.section){
        newkey.section = newkey.section.trim()
        if (newkey.section.length > 0) {
            resumes[0][topLevel][newkey.section] = newkey.data ? newkey.data : {}
            return res.send(resumes[0][topLevel][newkey.section])
        }
        return res.status(400).send("Key must contain at least 1 letter")
    }
    return res.status(400).send("'section' key is required")

})

////////////////DELETE section//////////////////////////

router.delete('/resume/:key',(req, res)=>{
    const key = req.params.key;
    if (delete resumes[0][key])
    return res.send("Object '" + key + "'has been deleted")
    return res.send ("Could not delete '" + key + "'.")
})

router.delete('/resume/basics/:key', (req, res) =>{
    const key = req.params.key;
    if (delete resumes[0].basics[key])
    return res.send("Object '" + key + "'has been deleted")
    return res.send ("Could not delete '" + key + "'.")

})

//Need to see how to delete in array 
// router.delete('/resume/work/:key', (req, res) =>{
//     const key = req.params.key;
//     if (delete resumes[0].basics[key])
//     return res.send("Object '" + key + "'has been deleted")
//     return res.send ("Could not delete '" + key + "'.")
// })
module.exports = router;