const Accueil = require("../models/accueil");

exports.getText = (req, res, next) => {
  Accueil.find()
    .then((text) => {
      return res.send({ token: req.session.csrfToken, text: text[0] });
    })
    .catch((err) => console.log(err));
};

exports.postEditText = (req, res, next) => {
  const textId = req.body._id;
  const updatedText = req.body.text;

  Accueil.findById(textId)
    .then((text) => {
      text.text = updatedText;
      return text.save();
    })
    .catch((err) => console.log(err));
};
