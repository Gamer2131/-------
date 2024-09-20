const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "pug");

app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: true }));

let todos = [
    { id: 1, text: "поиграть в доту", completed: true },
    { id: 2, text: "выйграть в доту", completed: false },
    { id: 3, text: "регнуть некст?", completed: false }
];

app.get("/", (req, res) => {
    res.render("index", {
        title: "Главная"
    });
});

app.get("/quests", (req, res) => {
    res.render("quests", {
        title: "to-do list",
        todos: todos
    });
});

app.post("/quests/add", (req, res) => {
    const newTaskText = req.body.task;
    if (newTaskText) {
        const newTask = {
            id: todos.length + 1,
            text: newTaskText,
            completed: false
        };
        todos.push(newTask);
    }
    res.redirect("/quests");
});

app.post("/quests/complete", (req, res) => {
    const taskId = parseInt(req.body.id);
    const task = todos.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
    }
    res.redirect("/quests");
});

app.post("/quests/delete", (req, res) => {
    const taskId = parseInt(req.body.id);
    todos = todos.filter(t => t.id !== taskId);
    res.redirect("/quests");
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
