
var express = require('express');
var {AdminService} = require("../service/AdminService");
var router = express.Router();

/* GET users listing. */
router.post('', (req, res) => {
    var AdminService = new AdminService();
    var userData = req.body;

    var result = AdminService.registerUser(userData);
    res.send(result);

});

router.post('/login', (req, res) => {
    var AdminService = new AdminService();
    var userData = req.body;

    var result = AdminService.loginUser(userData);
    res.status(201);
    res.send(result);

});


router.get('',(req,res) => {
        var AdminService = new AdminService();

        var result = AdminService.getAllUsers();
        res.status(200);
        res.send(result);
    }
);

router.put('/:id',(req,res) => {
    var AdminService = new AdminService();
    var userData = req.body;

    console.log("REQ PARAM :::::::::::::::: ",req.params.id);
    var result = AdminService.updateUser(userData,req.params.id);
    res.status(204);
    res.send(result);

});

router.delete('/:id',(req,res) => {
    var AdminService = new AdminService();

    console.log("REQ PARAM :::::::::::::::: ",req.params.id);
    var result = AdminService.deleteUser(req.params.id);
    res.status(204);
    res.send(result);

});

module.exports = router;


