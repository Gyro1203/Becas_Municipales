"usestrict";
// importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");
const apelationSchema = new mongoose.Schema(
    { 
        username: {
            type: String,
            required: true,
        },
        rut: {
            type: String,
            required: true,
        },
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
            required: false,
        },
        estado: [{

            type: String,
            enum: ["Aceptada", "Rechazada", "En revisión"],
            default: "En revisión",
        },    
        ],
    },
    {
        timestamps: { currentTime: ()=> Date.now() - 3 * 60 * 60 * 1000 },
        versionKey: false,
    },
    );

    const Apelation = mongoose.model("Apelation", apelationSchema);

    module.exports = Apelation;
