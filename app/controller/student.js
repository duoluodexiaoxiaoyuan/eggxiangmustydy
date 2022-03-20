const Controller = require("egg").Controller;
class StudentController extends Controller {
  async index() {
    let list = await this.ctx.service.Student.getStudentList();
    if (list) {
      this.ctx.body = {
        code: 20000,
        data: list,
      };
    } else {
      this.ctx.body = {
        code: 20000,
        msg: "服务器异常请与管理员联系",
      };
    }
  }

  async create() {
    let name = this.ctx.request.body.name;
    let achievement = this.ctx.request.body.achievement;
    let clazz_id = this.ctx.request.body.clazz_id;
    let result = await this.ctx.service.Student.createStudent(
      name,
      achievement,
      clazz_id
    );
    if (result) {
      this.ctx.body = {
        code: 20000,
        data: "添加成功",
      };
    } else {
      this.ctx.body = {
        code: 50000,
        data: "数据添加失败请与管理员联系",
      };
    }
  }
  async destroy() {}

  async update() {}
}
module.exports = StudentController;
