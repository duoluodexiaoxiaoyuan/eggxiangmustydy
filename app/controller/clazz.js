const Controller = require("egg").Controller;
class ClazzController extends Controller {
  async index() {
    let id = this.ctx.request.query.id;
    let clazzList = await this.app.model.Clazz.findAll({
      where: {
        id: id,
      },
    });
    this.ctx.body = clazzList;
  }
  async create() {
    let name = this.ctx.request.body.name;
    await this.app.model.Clazz.create({
      name: name,
    });
    this.ctx.body = "添加成功";
  }
  async destroy() {
    let id = this.ctx.params.id;
    await this.app.model.Clazz.destroy({ where: { id: id } });
    this.ctx.body = "删除班级数据";
  }
  async update() {
    let id = this.ctx.params.id;
    let name = this.ctx.request.body.name;
    await this.app.model.Clazz.update(
      { name: name },
      {
        where: { id: id },
      }
    );
    this.ctx.body = "修改成功";
  }
}

module.exports = ClazzController;
