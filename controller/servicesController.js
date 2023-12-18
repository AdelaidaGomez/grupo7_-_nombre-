const fs = require('fs')
const path = require('path')

// Trabajando con el archivo JSON 
const servicesFilePath = path.join(__dirname, '../src/data/servicesDataBase.json')

// Creamos el objeto literal que nos permite navegar dentro del home en diferentes items
const servicesController = {
    allProducts: function(req, res) {
        //Utilizamos el archivo JSON Para mostrar los productos
        const services = JSON.parse(fs.readFileSync(servicesFilePath, 'utf-8'))
        res.render('services', {services: services});
    },
    productCart: function(req, res) {
      res.render('productCart');
    }
  };
  
  // Exportamos 
  module.exports = servicesController;