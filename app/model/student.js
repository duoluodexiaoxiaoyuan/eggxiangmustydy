module.exports = (app) => {
  const { STRING, DOUBLE } = app.Sequelize;
  const Student = app.model.define("student", {
    name: STRING,
    achievement: DOUBLE,
  });

  Student.associate = function () {
    app.model.Student.belongsTo(app.model.Clazz, {
      foreignKey: "clazz_id",
      as: "clazz",
    });
  };
  return Student;
};
