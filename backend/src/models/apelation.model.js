"usestrict";
// importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");
const apelationSchema = new mongoose.Schema(
    { 
        User: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false,
        },
    ],
        apelacion: {
            type: String,
            required: true,
        },
        razon: {
            type: String,
            required: true,
        },
        fecha: {
            type: Date,
            default: Date.now,
            required: false,
        },
    });
    
    apelationSchema.pre("findOne", function(next) {
        this.populate("User");
        next();
    });

    const Apelation = mongoose.model("Apelation", apelationSchema);

    module.exports = Apelation;
