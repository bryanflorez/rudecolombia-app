import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        ncohorteint:{
            type: String,
            required: true,
        },
        ncohortenac:{
            type: String,
            required: true,
        },
        yearingreso:{
            type: String,
            required: true,
        },
        codigo:{
            type: String,
            required: true,
        },
        cc: {
            type: String,
            required: true,
        },
        fechanacimiento: {
            type: Date
        },
        pregrados: {
            type: String,
            required: true,
        },
        especializacion: {
            type: String,
            required: true,
        },
        maestria: {
            type: String,
            required: true,
        },
        lineafdoctoral: {
            type: String,
            required: true,
        },
        yearactivoenprograma: {
            type: Number,
            required: true,
        },
        titulotesis: {
            type: String,
            required: true,
        },
        nombredirnaltesis: {
            type: String,
            required: true,
        },
        year_asigdirnaltesis: {
            type: String,
            required: true,
        },
        actaCade_asigdirnaltesis: {
            type: String,
            required: true,
        },
        telefono_Dirnaltesis: {
            type: String,
            required: true,
        },
        correo_uniDirnaltesis: {
            type: String,
            required: true,
        },
        uni_Dirnaltesis: {
            type: String,
            required: true,
        },
        nombre_dirint_tesis: {
            type: String,
            required: true,
        },
        nombredirnaltesis: {
            type: String,
            required: true,
        },
        year_asigdirint_tesis: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }, {
        timestamps: true
    });
    
    export default mongoose.model("Student", studentSchema);