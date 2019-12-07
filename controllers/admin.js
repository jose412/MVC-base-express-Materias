const materias = require('../models/materias');
exports.materiasInq = function (req, res) {
materias.find({},{_id:0,nombre:1,clave:1,maestro:1,semestre:1},function
    (err, doc) {
        if (err) return console.log(err);
        console.log("Clientes encontrados...");
        console.log(doc);
        res.send(doc);
    }).sort({nombre:1});
};
exports.materiasAdd = function (req, res) {
    client = new materias({
        _id: req.body._id,
        nombre: req.body.nombre,
        clave: req.body.clave,
        maestro: req.body.maestro,
        semestre: req.body.semestre
    })
    console.log(client);
    client.save(function (err, client) {
        if (err) return console.error(err);
        res.send(client.cliente + " insertado en la coleccion ...")
    });
}






exports.muchasmateriasAdd = function (req, res) {
    materias = req.body;
    console.log(materias);


    
/*
    client.insertMAny(function (err, client) {
        if (err) return console.error(err);
        res.send(client.cliente + " insertado en la coleccion ...")
    });
    */

}