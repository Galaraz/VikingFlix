"use strict";

const Express = require("express");
const Mongoose = require("mongoose");
const Cors = require("cors");

const env = process.NODE_ENV || "development";
const config = require("./config.json")[env];

//Importação dos modelos

const User = require("./model/User");


class App {
  constructor() {
    this.app;
  }

  //Configurar o servidor HTTP
  init() {
    //this.app é agora uma instancia do express
    this.app = Express();

    this.app.use(Express.json());
    this.app.use(Cors());

    //Conexão com o banco de dados MongoDB
    Mongoose.connect(
        `mongodb+srv://${config.db.user}:${config.db.password}@${config.db.url}/${config.db.nome}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    //Instanciando modelos
    
    new User();
    

    //Importando as rotas
   
    const UserRoute = require("./routes/UserRoute");
    

    //Instanciando as rotas
   
    new UserRoute(this.app);
   

    //Definição da rota raíz
    this.app.get("/", (req, res) => {
      res.send("Seja Bem-vindo a VikingFlix API");
    });

    //Listener
    this.app.listen(process.env.PORT || config.port, () => {
      console.log(`API - VikingFlix rodando na porta ${config.port}`);
    });
  }
}

new App().init();
