"use strict"

const express = require("express")
const router = express.Router()

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.hello)

router.get("/login", ctrl.output.login)
router.post("/login", ctrl.process.login)

router.get("/sign", ctrl.output.sign)
router.post("/sign", ctrl.sign_process.sign)

module.exports = router;