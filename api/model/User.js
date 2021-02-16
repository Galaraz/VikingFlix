const Mongoose = require('mongoose');
class User extends Mongoose.Schema {
  constructor() {
    super({
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      email: {
        type: String,

        required: true,
      },
      birthday: {
        type: Date,
        required: true,
      },
      Perfil: {
        Token: String,
        
        Perfis: [
          {
            P1: [
              {
                id: String,
                foto:String,
                wathList: [],
                watched: [],
              },
            ],

            P2: [
              {
                id: String,
                foto:String,
                wathList: [],
                watched: [],
              },
            ],

            P3: [
              {
                id: String,
                foto:String,
                wathList: [],
                watched: [],
              },
            ],

            P4: [
              {
                id: String,
                wathList: [],
                watched: [],
              },
            ],
          },          
        ],
      },
    });

    //Registrando Schema no Mongoose
    Mongoose.model('User', this);
  }
}

module.exports = User;
