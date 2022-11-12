const jwt = require("jsonwebtoken");

const   SECRET = process.env.SECRET;



exports.checkAuth = (req, res, next) => {
    const authHeader = req.get("authorization");
    if(!authHeader){
        return res.status(401).send({
            message: "acesso não autorizado!",
            statusCode: 401
        });
    }
    const token = authHeader.split(" ")[1];
    console.log("Tokenya: ", token);

    if(!token){
        return res.status(401).send({
            message: "Token error!"
        })
    }

    try {
        jwt.verify(token, SECRET, (error) => {
            if(error){
                return res.status(401).send({
                    message: "Acesso negado!"
                })
            }
            next();
        })
    } catch (error) {
        console.error(error);
    }

};