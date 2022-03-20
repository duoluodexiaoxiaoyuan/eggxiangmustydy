const Controller = require("egg").Controller;
let fruitsList = ["苹果", "香蕉", "草莓"];

class FruiesController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = fruitsList;
  }

  async new() {
    const { ctx } = this;
    ctx.body = `
      <form method="post" action="/fruits">
        <input name="fruitname">
        <button>添加</button>
      </form>
    `;
  }

  async create() {
    const { ctx } = this;
    let fruit = ctx.request.body;
    fruitsList.push(fruit.fruitname);
    // ctx.body = "添加成功";
    ctx.redirect("/fruits");
  }

  async destroy() {}

  async update() {}

  // async getId() {
  //   const { ctx } = this;
  //   let id = ctx.params.id;
  //   ctx.body = `传递的id是${id}`;
  // }
  // async createPage() {
  //   const { ctx } = this;
  //   ctx.body = `
  //     <form method="post" action="/createFruit">
  //       <input name="fruitname">
  //       <button>添加</button>
  //     </form>
  //   `;
  // }

  // async createFruit() {
  //   const { ctx } = this;
  //   let fruit = ctx.request.body;
  //   fruitsList.push(fruit.fruitname);
  //   ctx.body = "添加成功";
  // }
}

module.exports = FruiesController;
