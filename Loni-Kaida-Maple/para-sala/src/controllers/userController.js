const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};

async function createUser (req, res){
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;

  const emailExists = await UserSchema.exists({ email: req.body.email });

  if(emailExists){
    return res.status(409).send({
      message: "Email já está em uso!"
    })
  }

  try {
    const newUser = new UserSchema(req.body);
    const SavedUser = await newUser.save();

    res.status(201).send({
      message: "Nyah criado com sucesso!",
      SavedUser
    });


  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message
    })
  }
} 


module.exports = {
  getAll, createUser
};
