"use strict";

const express = require("express");
const formController = require("../controllers/form.controller.js");
const router = express.Router();
// const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

router.get("/", formController.getForms);
router.get("/:id", formController.getFormById);
router.post("/", formController.createFrom);
router.delete("/:id", formController.deleteForm);

module.exports = router;
