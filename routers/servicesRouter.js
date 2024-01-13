const express = require('express')
// Requerimos el router desde express
const router = express.Router()

// Requerimos el objeto literal para products desde controllers
const servicesController = require('../controller/servicesController.js');

// Requerimos multer y lo guardamos en una constante
const multer = require("multer");

const path = require("path");

// MULTER
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Definimos donde guardamos los archivos
        cb(null, "public/images")
    },
    filename: function(req, file, cb) {
        // Definimos el nombre que tendrán los archivos
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})
// Asignamos en una constante a la ejecucion de multer
const uploadFile = multer({storage: storage});



router.get('/', servicesController.allProducts); // todos los servicios, recordar que como es otro archivo se inicia con / ya ue definimos en app que tiene /services 
router.get('/productCart', servicesController.productCart); //Recordar que para entrar a este la ruta debe ser: Servidor/services/productCart

router.get('/serviceDetail/:id', servicesController.detail)

// Ruteo de formulario create
router.get("/create", servicesController.create) // Para devolverle al usuario el formulario para crear servicio
router.post("/create", uploadFile.single("image"), servicesController.processCreate) // Para agregar el servicio creado

// Ruteo de formulario edit
router.get("/edit/:id", servicesController.edit) // Para devolverle al usuario el formulario para editar servicio
router.put("/edit/:id", servicesController.processEdit) // Para actualizar el producto editado

// Exportamos Router
module.exports = router;
