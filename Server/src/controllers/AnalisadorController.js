const Fundo = require('../models/Fundo');
const { validationResult } = require('express-validator');
const { check } = require('express-validator');
class AnalisadorController {

   static rotas(){
      return {
         addFundo: '/analisador',
         getAllFundo: '/analisador/:referencia'
      }      
   }

   static addFundoValidation() {
      return [
         check('fundo').not().isEmpty().withMessage('Descrição do fundo deve ser informado')
      ]      
   }

   async addFundo(req, res) {    

      const errors = validationResult(req);
        
      if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.array() });     
      }

      const { fundo } = req.body;
      const { valorCotaReferencia } = req.body;
      const { ultimo } = req.body;
      const { tresMeses } = req.body;
      const { seisMeses } = req.body;
      const { noveMeses } = req.body;
      const { desdeIPO } = req.body;
      const { referencia } = req.body;
      
      let fii = await Fundo.findOne({ fundo, referencia });

      if (!fii) {
        fii = await Fundo.create({fundo,valorCotaReferencia,ultimo,tresMeses,
                                  seisMeses,noveMeses,desdeIPO, referencia});
      }
          
      return res.json(fii);                                        
   }
   
   async getAllFundo(req, res) {   
      let referencia  = req.params.referencia
      console.log(referencia)
      const fundos = await Fundo.find({referencia});
      return res.json(fundos);      
   }
}

module.exports = AnalisadorController