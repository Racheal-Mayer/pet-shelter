console.log("pet.routes/js");

const Pets = require("../controllers/pet.controller");

module.exports = app => {
    app.get("/api", Pets.getAll);
    app.post("/api/pets/new", Pets.create);
    app.put("/api/pets/:_id", Pets.update);
    app.get("/api/pets/:_id", Pets.getPet);
    app.delete("/api/pets/:_id", Pets.remove);
}