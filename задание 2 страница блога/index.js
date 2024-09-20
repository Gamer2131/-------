const express = require("express");
const app = express();


app.set("view engine", "pug");

app.use(express.static('static'));


app.get("/", (req, res) => {
    const recentArticles = [
        { title: "Статья №1 о характере", url: "/blok/1" },
        { title: "Статья №2 о характере" , url: "/blok/2" },
        { title: "Статья №3 о характере", url: "/blok/3" }
    ];

    res.render("index", {
        title: "Дневник Совершенства|Саморазвития",
        recentArticles: recentArticles
    });
});


app.get("/blok", (req, res) => {
    const blok = [
        { title: "Статья №1", url: "/blok/1" },
        { title: "Статья №2", url: "/blot/2" },
        { title: "Статья №3", url: "/blok/3" }
    ];
    
    res.render("blok", {
        title: "Статьи",
        recentArticles: blok
    });
});


app.get("/blok/:id", (req, res) => {
    const articleId = req.params.id;

    const article = {
        title: `Статья №${articleId}`,
        publicationDate: "30.02.2025",
        content: "Каждый человек имеет множество целей, но что дает ему силы на их свершение!? Черты характера! Двигаясь к цели, человека может остановить тот факт, что ему не хватает Дисциплины, Решительности, Уверенности и т.д У него есть выбор: Начать самопознание, улучшить себя и достичь результата или сдаться Вот для чего нам нужно развивать черты характера. Развивать вы их можете под разные цели:-Ведение бизнеса-Знакомства с людьмиИ МНОГОЕ МНОГОЕ ДРУГОЕ!!! Всё зависит от поставленной цели!"
    };
    

    const recentArticles = [
        { title: "Статья №1", url: "/blok/1" },
        { title: "Статья №2", url: "/blok/2" },
        { title: "Статья №3", url: "/blok/3" }
    ];

    res.render("article", {
        title: article.title,
        articleTitle: article.title,
        publicationDate: article.publicationDate,
        articleContent: article.content,
        recentArticles: recentArticles
    });
});

// contacts pages
app.get("/contacts", (req, res) => {
    res.render("contacts", {
        title: "Контакты"
    });
});


app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});