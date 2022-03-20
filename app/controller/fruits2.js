const Controller = require("egg").Controller;

let fruitsList = ["香蕉", "苹果", "鸭梨"];
class Fruits2Controller extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = fruitsList;
  }

  async create() {
    const { ctx } = this;
    const fruit = ctx.request.body.fruit;
    fruitsList.push(fruit);
    ctx.body = "添加成功";
  }
  // 别把destroy这个单词写错
  async destroy() {
    const { ctx } = this;
    let id = ctx.params.id;
    console.log(id);
    fruitsList.splice(id, 1);
    ctx.body = "删除成功";
  }
}

module.exports = Fruits2Controller;
