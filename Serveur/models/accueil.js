const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Acceuil {
  constructor(text, id) {
    this.text = text;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db.collection("home").updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection("home").insertOne(this);
    }
    return dbOp
      .then((result) => {
        // console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("home")
      .find()
      .toArray()
      .then((text) => {
        return text;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(textId) {
    const db = getDb();
    return db
      .collection("home")
      .find({ _id: new mongodb.ObjectId(textId) })
      .next()
      .then((text) => {
        return text;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Acceuil;
