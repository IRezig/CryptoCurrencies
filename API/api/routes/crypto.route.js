const router = require("express").Router();
const { checkToken } = require("../../auth/token.validation");
const {
  getCMID,
  getCryptos,
  getCrypto,
  getCryptoPeriod,
  addCurrency,
  deleteCrypto
} = require("../controllers/crypto.controller");

//Get All cryptos CMID entered by the admin in database
router.get("/getCMID", getCMID);

// //Get the list of crypto-currencies and their informations
router.get("/cryptos/cmids", getCryptos);

// //Get the list of crypto-currencies and their informations
router.get("/cryptos/:cmid", getCrypto);

//Get the price history of a cryptocurrency
router.get("/cryptos/:cmid/history/:period", getCryptoPeriod);

//Add a cryptocurrency to your platform
router.post("/cryptos", addCurrency);

// Deletes a cryptocurrency
router.delete("/cryptos", deleteCrypto);

module.exports = router;
