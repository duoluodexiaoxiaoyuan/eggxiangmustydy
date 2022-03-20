"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/login", controller.home.login);
  router.post("/login", controller.home.doLogin);
  router.post("/logout", controller.home.logout);
  router.get("/jwt", controller.jwt.index);
  router.post("/jwtLogin", controller.jwt.doLogin);
  router.get(
    "/jwtMessage",
    app.middleware.checktoken(),
    controller.jwt.getMessage
  );
  // router.get("/fruits", controller.fruits.index);
  // router.get("/fruits/:id", controller.fruits.getId);
  // router.get("/createFruit", controller.fruits.createPage);
  // router.post("/createFruit", controller.fruits.createFruit);
  router.resources("fruits", "/fruits", controller.fruits);
  router.resources("fruits2", "/fruits2", controller.fruits2);
  router.resources("clazz", "/clazz", controller.clazz);
  router.resources("student", "/student", controller.student);
};
