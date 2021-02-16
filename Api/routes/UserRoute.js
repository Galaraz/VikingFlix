const UserController = require("../controller/UserController");

class UserRoute {
  constructor(app) {
    //Definições das outras rotas

    app
      .route("/usuarios")
      .get(UserController.buscarTodos)
      .post(UserController.adicionar)
      .put(UserController.editar)
         

      /* app.route("/usuarios/ativarInativar").put(UserController.ativarInativar);

      
      app.route("/usuarios/buscar").get(UserController.buscarTudo);
      app.route("/usuarios/login").post(UserController.login); */
          
  }
}

module.exports = UserRoute;
