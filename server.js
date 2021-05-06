const express = require("express");
const app = express();

//const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("user"));

app.get("/", (req, res) => {
    res.send(__dirname + "/user/index.html") //con esto hago que me muestre un html donde tengo el formulario
})

app.post("/form", (req, res) => {

    const nombre = req.body.nombre;

    res.send(nombre);

    /* json({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.edad
    })
 */

});

app.get("*", (req, res) => {
    res.redirect("/");
})


app.listen(process.env.PORT || 3000, () => {
    console.log("Server ???????????? iniciado en puerto 3000");
})

/*
app.listen(port, () => {
    console.log(`server is vfffffffflistening on port: ${port}`)
})*/