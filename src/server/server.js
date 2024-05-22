const express = require("express");
const path = require("path");

const startServer = (options) => {
    const { port, public_path = "public" } = options;

    const app = express();

    //para poder usar middlewares se usa "use" (express)
    app.use(express.static(public_path)); //contenido estatico que ponemos disponible

    app.get("*", (req, res) => {
        const indexPath = path.join(__dirname + `../../${public_path}/index.html`)
        res.sendFile(indexPath)
    });

    app.listen(port, () => {
        console.log(`escuchando en el puerto ${port}`)
    })
};

module.exports = {
    startServer,
};
