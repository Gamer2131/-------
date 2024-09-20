const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", {
        title: "Hey",
        message: "Hello there!",
     });
    });
    app.use("/contact", function (request, response) {
        response.render("contact", {
             title: "Мои контакты",
            emailsVisible: true,
            emails: ["banban@mycorp.com", "bacbac@mycorp.com"],
            phone: "+1234567890",
         });
        });
        app.use("/faq", function (request, response) {
            response.render("faq", {
                title: "Страница обо мне великом",
                name: "Арсений",
                age: "19",
                rod_zanyatiy: "Учёба/Трата денег",
                hobby: "Видиоигры, походы, рыбалка"
            });
        });



app.post("/", (req, res) => {
    res.send("Got a POST request");
        });
app.put("/user", (req, res) => {
     res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
     res.send("Got a DELETE request at /user");
});

const myLogger = (req, res, next) => {
    console.log("LOGGED");
    next();
 };

app.use(myLogger);

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

app.use(requestTime);
app.get("/", (req, res) => {
    var responseText = "Hello World!<br>";
    responseText += "<small>Requested at: " + req.requestTime + "</small>";
    res.send(responseText);
});
                                    
app.use('/static', express.static('gg'));
    
app.use((req, res, next) => {
    res.status(404).send("Sorry cant find that!");
});  

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.use( (req, res, next) =>{
    console.log('Time:', Date.now());
    next();

});

app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
