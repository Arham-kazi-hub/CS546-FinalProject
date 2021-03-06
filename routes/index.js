const login = require("./login");
const home = require("./home");
const private = require("./private");
const regi = require("./registration");
const search = require("./search");
const video = require("./video");


const constructorMethod = (app) => {
  app.use('/', home);
  app.use('/login', login);
  app.use('regi', regi);
  app.use('/private', private);
  app.use('/search', search);
  app.use('/video', video);


  app.use('*', (req, res) => {
    res.status(404).render("error", {
      title: "Error",
      status: 404,
      msg: "Not Found"
    });
  });
};

module.exports = constructorMethod;
