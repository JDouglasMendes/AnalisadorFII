const { validationResult } = require('express-validator');

class CheckParameters {
  check(req, res, functionSuccess) {

    const errors = validationResult(req);
        
    if (!errors.isEmpty()) {
       return res.status(422).json({ errors: errors.array() });     
    }
  
    functionSuccess();
  };
}


module.exports = CheckParameters 