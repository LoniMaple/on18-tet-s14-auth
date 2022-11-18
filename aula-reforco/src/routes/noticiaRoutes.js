const express = require("express");
const router = express.Router();

// depois voltamos para a fase das rotas
const controller = require("../controllers/noticiaController");
const authController = require("../controllers/authController");

const { checkAuth } = require("../middlewares/auth");

router.get("/todas", controller.listarTodasAsNoticias);
router.post("/criar", checkAuth, controller.criarNoticia);
router.post("/cadastrar", controller.cadastrarUsuario);
// login eh o nosso step 1 para autenticacao 
// pq?????????
// pq ele vai nos retornar um TOKENNNN que vai ser usado para autenticar o usuario nas proximas requisicoes
// ou proximas rotas
router.post("/login", authController.login); 



module.exports = router;
