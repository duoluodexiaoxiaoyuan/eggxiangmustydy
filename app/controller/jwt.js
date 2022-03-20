const Controller = require("egg").Controller;

class JwtController extends Controller {
  async index() {
    const { ctx } = this;
    let user = {
      username: "xiaoming",
    };
    // 存到localstorage里面，每次请求请求头里面携带token
    let token = this.app.jwt.sign(user, this.app.config.jwt.secret);
    try {
      let decode = this.app.jwt.verify("123456", this.app.config.jwt.secret);
      this.ctx.body = decode;
    } catch (e) {
      this.ctx.body = "token未能通过验证";
    }
  }

  async doLogin() {
    const { ctx } = this;
    let user = ctx.request.body.user;
    if (user.username === "admin" && user.password === "123") {
      let user_jwt = { username: user.username };
      let token = this.app.jwt.sign(user_jwt, this.app.config.jwt.secret);
      ctx.body = {
        code: 20000,
        token: token,
      };
    } else {
      ctx.body = {
        code: 40000,
        msg: "用户名或密码错误",
      };
    }
  }

  async getMessage() {
    const { ctx } = this;
    this.ctx.body = "hello jwt";
  }
}

module.exports = JwtController;
