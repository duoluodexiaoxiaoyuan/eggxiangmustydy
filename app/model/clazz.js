module.exports = (app) => {
  const { STRING } = app.Sequelize;
  const Clazz = app.model.define("clazz", {
    name: STRING,
  });
  return Clazz;
};
