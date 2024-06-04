import studentsModel from "../models/student.model.js";
import Student from "../models/student.model.js"

export const getStudents = async (req, res) => {
    const students = await Student.find({
        user: req.user.id
    });
    res.json(students);
};

export const createStudents = async (req, res) => {
    const { name, ncohorteint, ncohortenac, yearingreso, codigo, cc, fechanacimiento, pregrados, especializacion, maestria,
        lineafdoctoral, yearactivoenprograma, titulotesis, nombredirnaltesis, year_asigdirnaltesis, actaCade_asigdirnaltesis,uni_Dirnaltesis,
        telefono_Dirnaltesis, correo_uniDirnaltesis, nombre_dirint_tesis, year_asigdirint_tesis, description,date, } = req.body;
    
    const newStudent = new Student({
        name,
        ncohorteint,
        ncohortenac,
        yearingreso,
        codigo,
        cc,
        fechanacimiento,
        pregrados,
        especializacion,
        maestria,
        lineafdoctoral,
        yearactivoenprograma,
        titulotesis,
        nombredirnaltesis,
        year_asigdirnaltesis,
        actaCade_asigdirnaltesis,
        uni_Dirnaltesis,
        telefono_Dirnaltesis,
        correo_uniDirnaltesis,
        nombre_dirint_tesis,
        year_asigdirint_tesis,
        description,
        date,
        user: req.user.id
    });
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
};