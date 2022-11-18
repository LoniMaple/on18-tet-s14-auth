const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const { checkAuth } = require("../middlewares/auth");

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
};

async function updateUser (rez, res){
  //haha
  //authController
  //auth.checkAuth();

  const emailExists = await UserSchema.exists({ email: req.body.email });

  if(!emailExists){
    return res.status(404).send({
      message: "Email não encontrado!"
    });
  }

  try {
    const modifyUser = new UserSchema(req.body);
    const patchedUser = await modifyUser.save();

    res.status(201).send({
      message: "Nyah Editado com sucesso!",
      patchedUser
    });

  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message
    });
  }

};


module.exports = {
  getAll, createUser, updateUser
};
