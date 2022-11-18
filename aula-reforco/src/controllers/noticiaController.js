const UserSchema = require('../models/userSchema')
const NoticiasSchema = require('../models/newsSchema')
const bcrypt = require("bcrypt");

const listarTodasAsNoticias = async (req, res) => {
  
  NoticiasSchema.find(function (err, news) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(news)
  })
}

const criarNoticia = async (req, res) => {
  try {
    const noticia = new NoticiasSchema({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo,
      fonte: req.body.fonte,
    });
    const salvarNoticia = await noticia.save();
    res.status(201).json({
      noticia: salvarNoticia,
    });
  } catch (error) {
    res.status(400).json({
      mensagem: error.message,
    });
  }
};

const cadastrarUsuario = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword

  const emailExists = await UserSchema.exists({ email: req.body.email })

  if (emailExists) {
    return res.status(409).send({
      message: 'Email já cadastrado',
    })
  }

  try {
    const newUser = new UserSchema(req.body)

    const savedUser = await newUser.save()

    res.status(201).send({
      message: 'User criado',
      savedUser,
    })
  } catch (err) {
    console.error(err)
    res.status(500).send({
      message: err.message,
    })
  }
}


module.exports = {
  listarTodasAsNoticias,
  criarNoticia,
  cadastrarUsuario
}
