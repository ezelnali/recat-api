const express = require("express");
const router = express.Router();

let numapplications = 0
let applications = [
    {

        "id": 1,
        "firstName": "lihem",
        "lastName": "lastName",
        "email": "test@map.com",
        "utbildning": "asdads"
    },
    {

        "id": 2,
        "firstName": "",
        "lastName": "",
        "email": "",
        "utbildning": ""
    },
    {

        "id": 3,
        "firstName": "",
        "lastName": "",
        "email": "",
        "utbildning": ""
    },
    {

        "id": 4,
        "firstName": "",
        "lastName": "",
        "email": "",
        "utbildning": ""
    },
    {

        "id": 5,
        "firstName": "",
        "lastName": "",
        "email": "",
        "utbildning": ""
    },
    {

        "id": 6,
        "firstName": "",
        "lastName": "",
        "email": "",
        "utbildning": ""
    }]

let numApplications = applications.length

router.get("/clear", (req, res) => {
    res.status(200).send()
})

router.get("/read", (req, res) => {
    console.log({ method: req.method, data: applications })

    res.json({
        status: "lyckat",
        method: req.method,
        data: applications,
    })
})

router.post("/create", (req, res) => {
    // console.log('create', { method: req.method, body: req.body, })

    let data = req.body
    data.id = ++numApplications
    applications.push(data)

    res.json({
        status: "lyckat",
        method: req.method,
        data: data,
    })
    console.log(data)
})

router.put("/update/:id", (req, res) => {
    const id = req.params.id;
  
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const utbildning = req.body.utbildning;

    console.log('ansokan ID:', id)
    console.log('firstName:', firstName)
    console.log('lastName:', lastName)
    console.log('email:', email)
    console.log('utbildning:', utbildning)

    const data = applications.find((application) => application.id == id)
 
    data.firstName = firstName;
    data.lastName = lastName;
    data.email = email;
    data.utbildning = utbildning;

    res.json({
        status: "lyckat",
        method: req.method,
        data: data,
    })
})


router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const index = applications.findIndex((application) => application.id == id)
    if (index !== -1) {
        applications.splice(index, 1)
    }

    res.json({
        status: "lyckat",
        method: req.method,
        data: { removed: id }
    })
})

module.exports = router;