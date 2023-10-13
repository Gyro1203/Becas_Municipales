"use strict";

const express = require("express");
const formController = require("../controllers/form.controller.js");
const router = express.Router();
// const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

router.get("/", formController.getForms);
router.post("/", formController.createFrom);

module.exports = router;
