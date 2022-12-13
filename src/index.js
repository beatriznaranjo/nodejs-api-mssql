import app from "./app.js";


app.listen(app.get("port"));

console.log("API escuchando desde puerto", app.get("port"));