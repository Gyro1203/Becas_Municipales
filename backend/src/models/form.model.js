"use strict";
    
const mongoose = require("mongoose");
    
const formSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
    },
    {
        versionKey: false,
    },
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;

