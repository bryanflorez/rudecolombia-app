import tasksModel from '../models/tasks.model.js';
import Task from '../models/tasks.model.js'

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    });
    res.json(tasks);
};

export const createTasks = async (req, res) => {
    const { title, description, date } = req.body;
    
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
};

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada"});
    res.json(task)

};

export const updateTasks = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({message: 'Tarea no encontrada'});
    res.json(task)
};

export const deleteTasks = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({message: 'Tarea no encontrada'});;
    res.json(task)
};