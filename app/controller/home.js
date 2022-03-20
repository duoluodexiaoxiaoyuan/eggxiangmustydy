"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    if (ctx.session.user) {
      await ctx.render("index", { fruits: ["香蕉", "苹果", "草莓"] });
    } else {
      ctx.redirect("/login");
    }
  }

  async login() {
    const { ctx } = this;
    await ctx.render("login");
  }
  async doLogin() {
    const { ctx } = this;
    let { username, password } = this.ctx.request.body;
    console.log(username, password);
    if (username === "admin" && password === "123") {
      ctx.session.user = username;
      ctx.redirect("/");
    } else {
      ctx.redirect("/login");
    }
  }

  async logout() {
    const { ctx } = this;
    ctx.session.user = "";
    ctx.redirect("/login");
  }
}

module.exports = HomeController;
