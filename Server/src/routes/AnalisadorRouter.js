const AnalisadorController = require('../controllers/AnalisadorController')

module.exports = (app) =>  {
  
  app.post(`${AnalisadorController.rotas().addFundo}`,
              AnalisadorController.addFundoValidation(),      
          new AnalisadorController().addFundo);

  app.get(`${AnalisadorController.rotas().getAllFundo}`,
      new AnalisadorController().getAllFundo);

}
