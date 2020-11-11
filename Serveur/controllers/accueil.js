const Accueil = require("../models/accueil");

exports.getText = (req, res, next) => {
  Accueil.fetchAll()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => console.log(err));
};

exports.postEditText = (req, res, next) => {
  const prodId = req.body._id;
  const updatedText = req.body.text;

  const acceuil = new Accueil(updatedText, prodId);

  acceuil
    .save()
    .then((result) => {
      console.log("UPDATED PRODUCT!");
    })
    .catch((err) => console.log(err));
};
