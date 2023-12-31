"use strict";
    
const mongoose = require("mongoose");
    
const formSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        rut: {
            type: String,
            require: true,
        },
        typeBeca: {
            type: String,
            require: true,
        },
        birthdate: {
            type: Date,
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
        handicap: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: { currentTime: ()=> Date.now() - 3 * 60 * 60 * 1000 },
        versionKey: false,
    },
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;

