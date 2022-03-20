module.exports = (app) => {
  app.beforeStart(async function () {
    // await app.model.sync({ force: true }); //重启项目表中数据会清空
    await app.model.sync({});
  });
};
