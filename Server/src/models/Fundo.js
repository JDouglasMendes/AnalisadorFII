const mongoose = require('mongoose');

const FundoSchema = new mongoose.Schema({
  fundo: String,
  valorCotaReferencia: String,
  ultimo: String,
  tresMeses: String,
  seisMeses:String,
  noveMeses: String,
  desdeIPO: String,
  referencia: String
});

module.exports = mongoose.model('Fundo', FundoSchema)