//importações--------------------------------------- //
const UserSchema = require("../models/userSchema"); //importal models//
const bcrypt = require("bcrypt"); //criptografa a senha//
const jwt = require("jsonwebtoken");  //gera o token//

const SECRET =  process.env.SECRET; //usado pelo jwt na hora de gerar o token//
const login = (req, res) => {
    try {
        
        UserSchema.findOne({ email: req.body.email }, (error, user) => {
            console.log("Usuario🐱‍👤 "+user);
            if(!user){
                return res.status(404).send({
                    message: "Usuario não encontrado",
                    email: `$${req.body.email}`
                })
            }

            // Usuario enviado no body da request e Usuario no Banco de dados com o mesmo Email//
            const validPassword = bcrypt.compareSync(req.body.password, user.password);
            console.log("Senha valida? ", validPassword);

            if(!validPassword){
                return res.status(401).send({
                    "message": "Senha invalida nya! ⛔",
                    "statusCode": 401
                })
            }

            const token = jwt.sign({name: user.name}, SECRET);
            console.log("Token Gerado: ", token);

            return res.status(200).send({
                "message": "🟩Tudo certo nya!🟩",
                "message": "🟩Loginya feito com sucesso!🟩",
                token
            })

        });
        
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    login
};